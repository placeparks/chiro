import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaBolt, FaPhone } from 'react-icons/fa'

// In dev, calls go to /api/scheduler and Vite proxies to the Apps Script URL.
// (Direct browser calls to script.google.com fail CORS due to its 302 redirect.)
const SCHEDULER_URL = '/api/scheduler'
const DEV_SCHEDULER_SECRET = import.meta.env.DEV ? import.meta.env.VITE_SCHEDULER_SECRET : undefined
const SCHEDULER_CONFIGURED = import.meta.env.VITE_SCHEDULER_DISABLED !== 'true'

const DESK_IMAGE =
  'https://www.kauffmanchiros.com/wp-content/uploads/2019/12/Chiropractic-Merrillville-IN-Receptionist-Desk-Contact-Us.jpg'

const locations = {
  merrillville: {
    key: 'merrillville',
    label: 'Merrillville',
    buttonLabel: 'Merrillville Location',
    title: 'Schedule an Appointment at Our Merrillville Location',
    phone: '(219) 736-7363',
    tel: '2197367363',
    address: '8585 Broadway, Suite 440, Merrillville, IN 46410',
    detailsPath: '/merrillville',
  },
  crownPoint: {
    key: 'crown-point',
    label: 'Crown Point',
    buttonLabel: 'Crown Point Location',
    title: 'Schedule an Appointment at Our Crown Point Location',
    phone: '(219) 662-9855',
    tel: '2196629855',
    address: '11055 Broadway, Suite B, Crown Point, IN 46307',
    detailsPath: '/crown-point',
  },
}

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  note: '',
  privacy: false,
}

function todayStr() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function formatSlot(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const h12 = ((h + 11) % 12) + 1
  return `${h12}:${String(m).padStart(2, '0')} ${period}`
}

export default function Scheduler() {
  const navigate = useNavigate()
  const { locationKey } = useParams()
  const selectedLocation = locationKey === 'crown-point' ? 'crownPoint' : 'merrillville'
  const activeLocation = locations[selectedLocation]

  const [date, setDate] = useState(todayStr())
  const [slots, setSlots] = useState([])
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [slotsError, setSlotsError] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [confirmation, setConfirmation] = useState(null)

  // Fetch slots whenever the date changes
  useEffect(() => {
    if (!SCHEDULER_CONFIGURED) {
      setSlotsError('Scheduler is not configured yet.')
      return
    }
    let cancelled = false
    setSlotsLoading(true)
    setSlotsError('')
    setSelectedSlot('')

    fetch(`${SCHEDULER_URL}?action=slots&date=${date}&location=${activeLocation.key}`)
      .then((r) => r.json())
      .then((res) => {
        if (cancelled) return
        if (res.ok) {
          setSlots(res.slots || [])
        } else {
          setSlotsError(res.error || 'Could not load slots')
          setSlots([])
        }
      })
      .catch((err) => {
        if (cancelled) return
        setSlotsError('Network error loading slots')
        setSlots([])
      })
      .finally(() => !cancelled && setSlotsLoading(false))
    return () => {
      cancelled = true
    }
  }, [date, activeLocation.key])

  function chooseLocation(key) {
    setSubmitted(false)
    setError('')
    setForm(initialForm)
    setSelectedSlot('')
    setConfirmation(null)
    navigate(key === 'crownPoint' ? '/scheduler/crown-point' : '/scheduler/merrillville')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!selectedSlot) {
      setError('Please pick a time slot.')
      return
    }
    if (!SCHEDULER_CONFIGURED) {
      setError('Scheduler is not configured yet.')
      return
    }

    setSending(true)
    try {
      const res = await fetch(SCHEDULER_URL, {
        method: 'POST',
        // text/plain avoids CORS preflight to Apps Script
        body: JSON.stringify({
          action: 'book',
          secret: DEV_SCHEDULER_SECRET,
          location: activeLocation.key,
          date,
          time: selectedSlot,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          note: form.note,
        }),
      })
      const data = await res.json()
      if (!data.ok) {
        setError(data.error || 'Could not book. Please try again.')
        // refresh slots in case the conflict was from a fresh booking
        setDate((d) => d)
        setSelectedSlot('')
        return
      }
      setConfirmation({
        date,
        time: selectedSlot,
        location: activeLocation.label,
        firstName: form.firstName,
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError('Network error. Please try again or call us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1344px] px-4 py-10 md:px-5 md:py-16">
        <h1 className="mb-10 text-center text-[30px] font-black uppercase leading-tight text-[#333] md:mb-12 md:text-[43px]">
          {activeLocation.title}
        </h1>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start">
          <div>
            <img
              src={DESK_IMAGE}
              alt="Kauffman Chiropractic receptionist desk"
              className="mb-14 h-auto w-full object-cover"
            />

            <div className="mx-auto max-w-[730px]">
              {submitted && confirmation ? (
                <div className="border border-[#2f9db2]/30 bg-[#eef8fa] px-7 py-10 text-center">
                  <h3 className="mb-3 text-[26px] font-black text-[#333]">Appointment Confirmed</h3>
                  <p className="mb-2 text-[18px] leading-7 text-[#333]">
                    Thank you, {confirmation.firstName}.
                  </p>
                  <p className="mb-1 text-[17px] leading-7 text-[#555]">
                    <strong>{new Date(confirmation.date + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                  </p>
                  <p className="mb-4 text-[17px] leading-7 text-[#555]">
                    at <strong>{formatSlot(confirmation.time)}</strong> — {confirmation.location} office
                  </p>
                  <p className="text-[15px] text-[#555]">
                    A confirmation has been emailed to you. We look forward to seeing you.
                  </p>
                </div>
              ) : (
                <>
                  {/* Date + Slots */}
                  <h2 className="mb-5 text-center text-[29px] font-black text-black">Pick a Date &amp; Time</h2>

                  <div className="mb-6">
                    <label htmlFor="date" className="mb-2 block text-[20px] text-black">
                      Date:
                    </label>
                    <input
                      id="date"
                      type="date"
                      min={todayStr()}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="h-[43px] w-full max-w-[320px] border border-[#cfcfcf] px-4 text-[17px] outline-none transition focus:border-[#2f9db2] focus:ring-2 focus:ring-[#2f9db2]/20"
                    />
                  </div>

                  <div className="mb-10">
                    <p className="mb-3 text-[20px] text-black">Available times:</p>
                    {slotsLoading && <p className="text-[15px] text-[#555]">Loading…</p>}
                    {!slotsLoading && slotsError && (
                      <p className="text-[15px] text-red-700">{slotsError}</p>
                    )}
                    {!slotsLoading && !slotsError && slots.length === 0 && (
                      <p className="text-[15px] text-[#555]">No availability on this date. Please pick another day.</p>
                    )}
                    {!slotsLoading && slots.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
                        {slots.map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setSelectedSlot(s)}
                            className={`px-3 py-3 text-[15px] font-bold transition border ${
                              selectedSlot === s
                                ? 'bg-[#2f9db2] text-white border-[#2f9db2]'
                                : 'bg-white text-[#2f9db2] border-[#2f9db2] hover:bg-[#2f9db2] hover:text-white'
                            }`}
                          >
                            {formatSlot(s)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Patient info */}
                  <h2 className="mb-7 text-center text-[29px] font-black text-black">Patient Info</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <SchedulerField
                      label="First Name:"
                      name="firstName"
                      placeholder="first name"
                      value={form.firstName}
                      onChange={(value) => setForm({ ...form, firstName: value })}
                      required
                    />
                    <SchedulerField
                      label="Last Name:"
                      name="lastName"
                      placeholder="last name"
                      value={form.lastName}
                      onChange={(value) => setForm({ ...form, lastName: value })}
                      required
                    />
                    <SchedulerField
                      label="Email Address:"
                      name="email"
                      type="email"
                      placeholder="email address"
                      value={form.email}
                      onChange={(value) => setForm({ ...form, email: value })}
                      required
                    />
                    <SchedulerField
                      label="Mobile Phone:"
                      name="phone"
                      type="tel"
                      placeholder="mobile phone number"
                      value={form.phone}
                      onChange={(value) => setForm({ ...form, phone: value })}
                      required
                    />

                    <div>
                      <label htmlFor="note" className="mb-2 block text-[20px] text-black">
                        Add a Note (optional):
                      </label>
                      <textarea
                        id="note"
                        rows={3}
                        value={form.note}
                        onChange={(e) => setForm({ ...form, note: e.target.value })}
                        className="w-full border border-[#cfcfcf] px-4 py-3 text-[17px] outline-none transition focus:border-[#2f9db2] focus:ring-2 focus:ring-[#2f9db2]/20"
                      />
                    </div>

                    <label className="flex items-start gap-2 text-[18px] leading-6 text-black">
                      <input
                        type="checkbox"
                        required
                        checked={form.privacy}
                        onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                        className="mt-1 h-4 w-4"
                      />
                      <span>Check here to agree to our privacy policy.</span>
                    </label>

                    {error && (
                      <div className="border border-red-300 bg-red-50 px-4 py-3 text-[15px] text-red-700">
                        {error}
                      </div>
                    )}

                    {selectedSlot && (
                      <p className="text-center text-[16px] text-[#333]">
                        Booking{' '}
                        <strong>
                          {new Date(date + 'T00:00:00').toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}{' '}
                          at {formatSlot(selectedSlot)}
                        </strong>{' '}
                        — {activeLocation.label}
                      </p>
                    )}

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={sending || !selectedSlot}
                        className="min-w-[250px] bg-[#f8a500] px-8 py-3 text-[20px] font-medium text-white transition hover:bg-[#e69600] focus:outline-none focus:ring-4 focus:ring-[#2f9db2]/30 max-sm:min-w-0 max-sm:w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {sending ? 'Booking…' : 'Confirm Appointment'}
                      </button>
                    </div>
                  </form>
                </>
              )}

              <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-[#ececec] pt-3 text-center text-[15px] text-black md:mt-20">
                <span className="inline-flex items-center gap-1">
                  <FaBolt className="text-[#f8a500]" /> Powered by Kauffman Chiropractic
                </span>
                <a href="/privacy-policy" className="text-black hover:text-[#2f9db2]">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:pt-[14px]">
            <div className="mb-10 text-center">
              <p className="mx-auto mb-5 max-w-[330px] text-[22px] font-black leading-8 text-[#333]">
                Schedule an appointment at one of our locations below:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {Object.entries(locations).map(([key, location]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => chooseLocation(key)}
                    className={`min-h-[120px] px-2 text-[16px] font-black uppercase leading-tight text-black transition md:min-h-[142px] md:px-3 md:text-[20px] ${
                      selectedLocation === key
                        ? 'bg-[#f8a500] ring-4 ring-[#2f9db2]/20'
                        : 'bg-[#f8a500] hover:bg-[#e69600]'
                    }`}
                  >
                    {location.buttonLabel}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-11 bg-[#32a2b5] px-5 py-8 text-center text-[24px] font-black uppercase text-white md:px-8 md:py-11 md:text-[25px]">
              Our Locations:
            </div>

            <LocationDetail location={locations.merrillville} />
            <LocationDetail location={locations.crownPoint} />
          </aside>
        </div>
      </div>
    </section>
  )
}

function SchedulerField({ label, name, placeholder, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[20px] text-black">
        {label} {required && <span className="text-[#d4352a]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-[43px] w-full border border-[#cfcfcf] px-4 text-[17px] outline-none transition placeholder:text-[#b8b8b8] focus:border-[#2f9db2] focus:ring-2 focus:ring-[#2f9db2]/20"
      />
    </div>
  )
}

function LocationDetail({ location }) {
  return (
    <div className="mx-auto mb-12 max-w-[310px] border-b border-[#d0d0d0] pb-12 text-center last:mb-0 last:border-b-0">
      <h3 className="mb-1 text-[29px] font-black leading-none text-[#333]">{location.label}</h3>
      <a href={`tel:${location.tel}`} className="text-[23px] font-black leading-none text-[#2f9db2] hover:text-[#217f8f]">
        {location.phone}
      </a>
      <p className="mx-auto mt-4 max-w-[260px] text-[15px] leading-6 text-[#555]">{location.address}</p>
      <a
        href={location.detailsPath}
        className="mt-8 inline-flex min-w-[250px] items-center justify-center border-2 border-[#2f9db2] px-6 py-3 text-[18px] font-black uppercase text-[#2f9db2] transition hover:bg-[#2f9db2] hover:text-white"
      >
        <FaPhone className="mr-2 text-[15px]" />
        Location Details
      </a>
    </div>
  )
}
