import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaPhone, FaArrowRight, FaCalendarAlt } from 'react-icons/fa'

const SCHEDULER_URL = '/api/scheduler'
const SCHEDULER_SECRET = import.meta.env.VITE_SCHEDULER_SECRET
const SCHEDULER_CONFIGURED = Boolean(import.meta.env.VITE_SCHEDULER_URL)

const locations = {
  merrillville: { key: 'merrillville', label: 'Merrillville' },
  'crown-point': { key: 'crown-point', label: 'Crown Point' },
}

function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatSlot(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const h12 = ((h + 11) % 12) + 1
  return `${h12}:${String(m).padStart(2, '0')} ${period}`
}

const initialPatient = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  note: '',
  privacy: false,
}

export default function SpecialOffer() {
  const [step, setStep] = useState(1)
  const [patient, setPatient] = useState(initialPatient)
  const [location, setLocation] = useState('merrillville')
  const [date, setDate] = useState(todayStr())
  const [slots, setSlots] = useState([])
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [slotsError, setSlotsError] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [confirmation, setConfirmation] = useState(null)

  useEffect(() => {
    if (step !== 2) return
    if (!SCHEDULER_CONFIGURED) {
      setSlotsError('Scheduler not configured.')
      return
    }
    let cancelled = false
    setSlotsLoading(true)
    setSlotsError('')
    setSelectedSlot('')

    fetch(`${SCHEDULER_URL}?action=slots&date=${date}&location=${location}`)
      .then((r) => r.json())
      .then((res) => {
        if (cancelled) return
        if (res.ok) setSlots(res.slots || [])
        else {
          setSlotsError(res.error || 'Could not load times')
          setSlots([])
        }
      })
      .catch(() => {
        if (cancelled) return
        setSlotsError('Network error loading times')
        setSlots([])
      })
      .finally(() => !cancelled && setSlotsLoading(false))

    return () => {
      cancelled = true
    }
  }, [date, location, step])

  function handleStep1Submit(e) {
    e.preventDefault()
    setError('')
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleStep2Submit(e) {
    e.preventDefault()
    setError('')
    if (!selectedSlot) {
      setError('Please pick a time slot.')
      return
    }
    setSending(true)
    try {
      const res = await fetch(SCHEDULER_URL, {
        method: 'POST',
        body: JSON.stringify({
          action: 'book',
          secret: SCHEDULER_SECRET,
          location,
          date,
          time: selectedSlot,
          firstName: patient.firstName,
          lastName: patient.lastName,
          email: patient.email,
          phone: patient.phone,
          note: patient.note ? `[New Patient Special] ${patient.note}` : '[New Patient Special]',
        }),
      })
      const data = await res.json()
      if (!data.ok) {
        setError(data.error || 'Could not book. Please try again.')
        setSelectedSlot('')
        return
      }
      setConfirmation({ date, time: selectedSlot, location: locations[location].label, firstName: patient.firstName })
    } catch (err) {
      console.error(err)
      setError('Network error. Please try again or call us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Header banner */}
      <section className="bg-[#34a1b2] text-white">
        <div className="mx-auto max-w-[1180px] px-4 py-12 text-center md:py-16">
          <h1 className="text-[28px] font-black uppercase leading-tight tracking-tight md:text-[42px]">
            New Patient Special Offer
          </h1>
          <p className="mt-3 text-[18px] font-bold uppercase tracking-wide md:text-[22px]">
            Receive a Complimentary Consultation and Examination
          </p>
          <p className="mt-3 text-[13px] italic opacity-90">
            * Offer Does Not Apply To Medicare &amp; Medicaid
          </p>
        </div>
        <div className="mx-auto h-0 w-0 border-x-[28px] border-t-[24px] border-x-transparent border-t-[#34a1b2]" />
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left column — copy */}
          <div className="space-y-5 text-[17px] leading-7 text-[#444]">
            <p>
              If you'd like to revitalize your health naturally and increase your quality of life, we encourage you to take advantage of <strong>this valuable offer!</strong>
            </p>
            <p>
              Our experienced chiropractors use a "whole person" approach to chiropractic care and wellness. This means that we work with our patients to find out their particular wellness needs, then craft personalized care plans to help them achieve the highest quality of life. We also offer a unique, comprehensive wellness program. Don't just take our word for it though.{' '}
              <Link to="/testimonials" className="text-[#2f9db2] font-bold hover:underline">
                Read our testimonials
              </Link>{' '}
              to see what our patients have to say.
            </p>
            <p>Fill out this form and start experiencing the difference of our chiropractic and wellness care.</p>
            <p>
              There is <strong>NO OBLIGATION!</strong> We would love to see if we can help you before you make a financial commitment to further treatment. Book now!
            </p>
          </div>

          {/* Right column — multi-step form */}
          <div>
            <p className="mb-5 text-[17px] leading-7 text-[#444]">
              Please fill out the form below, including all required fields, and we will contact you to confirm your appointment.
            </p>

            {/* Step pills */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              <StepPill
                num={1}
                label="Enter Patient Information"
                active={step === 1}
                done={step > 1}
              />
              <StepPill
                num={2}
                label="Choose a Date & Time"
                active={step === 2}
                done={!!confirmation}
              />
            </div>

            {confirmation ? (
              <div className="border border-[#2f9db2]/30 bg-[#eef8fa] px-7 py-10 text-center">
                <h3 className="mb-3 text-[24px] font-black text-[#333]">Appointment Confirmed</h3>
                <p className="mb-2 text-[17px] text-[#333]">Thank you, {confirmation.firstName}.</p>
                <p className="mb-1 text-[16px] text-[#555]">
                  <strong>
                    {new Date(confirmation.date + 'T00:00:00').toLocaleDateString(undefined, {
                      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                    })}
                  </strong>
                </p>
                <p className="mb-3 text-[16px] text-[#555]">
                  at <strong>{formatSlot(confirmation.time)}</strong> — {confirmation.location} office
                </p>
                <p className="text-[14px] text-[#555]">A confirmation has been emailed to you.</p>
              </div>
            ) : step === 1 ? (
              <form onSubmit={handleStep1Submit} className="space-y-5 bg-white">
                <h3 className="text-[15px] font-black uppercase tracking-wide text-[#333]">
                  Enter patient information in the required fields below.
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="First Name" required>
                    <FaUser className="form-icon" />
                    <input
                      type="text"
                      required
                      value={patient.firstName}
                      onChange={(e) => setPatient({ ...patient, firstName: e.target.value })}
                      className="form-input pl-10"
                    />
                  </Field>
                  <Field label="Last Name" required>
                    <FaUser className="form-icon" />
                    <input
                      type="text"
                      required
                      value={patient.lastName}
                      onChange={(e) => setPatient({ ...patient, lastName: e.target.value })}
                      className="form-input pl-10"
                    />
                  </Field>
                  <Field label="Email" required>
                    <FaEnvelope className="form-icon" />
                    <input
                      type="email"
                      required
                      value={patient.email}
                      onChange={(e) => setPatient({ ...patient, email: e.target.value })}
                      className="form-input pl-10"
                    />
                  </Field>
                  <Field label="Mobile Phone" required>
                    <FaPhone className="form-icon" />
                    <input
                      type="tel"
                      required
                      value={patient.phone}
                      onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
                      className="form-input pl-10"
                    />
                  </Field>
                </div>

                <div>
                  <label className="mb-1 block text-[14px] font-semibold text-[#333]">Add a Note (optional)</label>
                  <textarea
                    rows={4}
                    value={patient.note}
                    onChange={(e) => setPatient({ ...patient, note: e.target.value })}
                    className="w-full border border-[#cfcfcf] px-3 py-2 text-[15px] outline-none focus:border-[#2f9db2] focus:ring-2 focus:ring-[#2f9db2]/20"
                  />
                </div>

                <label className="flex items-start gap-2 text-[14px] text-[#333]">
                  <input
                    type="checkbox"
                    required
                    checked={patient.privacy}
                    onChange={(e) => setPatient({ ...patient, privacy: e.target.checked })}
                    className="mt-1 h-4 w-4"
                  />
                  <span>Check here to agree to our privacy policy.</span>
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 bg-[#f8a500] px-8 py-4 text-[18px] font-black uppercase text-white transition hover:bg-[#e69600]"
                >
                  Continue <FaArrowRight />
                </button>
              </form>
            ) : (
              <form onSubmit={handleStep2Submit} className="space-y-6 bg-white">
                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-[#333]">Location</label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(locations).map((loc) => (
                      <button
                        type="button"
                        key={loc.key}
                        onClick={() => setLocation(loc.key)}
                        className={`px-3 py-3 text-[14px] font-bold uppercase transition border ${
                          location === loc.key
                            ? 'bg-[#2f9db2] text-white border-[#2f9db2]'
                            : 'bg-white text-[#2f9db2] border-[#2f9db2] hover:bg-[#2f9db2] hover:text-white'
                        }`}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[14px] font-semibold text-[#333]">Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="form-icon" />
                    <input
                      type="date"
                      min={todayStr()}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="form-input pl-10"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[14px] font-semibold text-[#333]">Available times:</p>
                  {slotsLoading && <p className="text-[14px] text-[#555]">Loading…</p>}
                  {!slotsLoading && slotsError && <p className="text-[14px] text-red-700">{slotsError}</p>}
                  {!slotsLoading && !slotsError && slots.length === 0 && (
                    <p className="text-[14px] text-[#555]">No availability on this date. Please pick another day.</p>
                  )}
                  {!slotsLoading && slots.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                      {slots.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setSelectedSlot(s)}
                          className={`px-2 py-2 text-[13px] font-bold transition border ${
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

                {error && (
                  <div className="border border-red-300 bg-red-50 px-4 py-3 text-[14px] text-red-700">{error}</div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[14px] font-bold uppercase text-[#2f9db2] hover:underline"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={sending || !selectedSlot}
                    className="inline-flex items-center justify-center gap-3 bg-[#f8a500] px-8 py-4 text-[18px] font-black uppercase text-white transition hover:bg-[#e69600] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Booking…' : 'Confirm Appointment'} {!sending && <FaArrowRight />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="bg-[#34a1b2] text-white">
        <div className="mx-auto max-w-[1180px] px-4 py-14 text-center md:py-16">
          <p className="text-[18px] font-bold uppercase tracking-wide md:text-[22px]">Don't Wait Another Day</p>
          <h2 className="mt-2 text-[28px] font-black uppercase leading-tight md:text-[42px]">
            Schedule Your Appointment Today!
          </h2>
        </div>
      </section>

      <style>{`
        .form-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
          font-size: 14px;
          pointer-events: none;
        }
        .form-input {
          width: 100%;
          height: 44px;
          border: 1px solid #cfcfcf;
          padding: 0 12px;
          font-size: 15px;
          outline: none;
          transition: border-color 0.15s;
        }
        .form-input:focus {
          border-color: #2f9db2;
          box-shadow: 0 0 0 2px rgba(47, 157, 178, 0.2);
        }
      `}</style>
    </>
  )
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="mb-1 block text-[14px] font-semibold text-[#333]">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="relative">{children}</div>
    </div>
  )
}

function StepPill({ num, label, active, done }) {
  const base = 'flex items-center gap-3 px-4 py-4 text-[14px] font-bold uppercase leading-tight transition border'
  let cls
  if (active) cls = 'bg-[#f8a500] text-white border-[#f8a500]'
  else if (done) cls = 'bg-[#2f9db2] text-white border-[#2f9db2]'
  else cls = 'bg-gray-100 text-[#777] border-gray-200'
  return (
    <div className={`${base} ${cls}`}>
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[15px] font-black ${
        active ? 'bg-white text-[#f8a500]' : done ? 'bg-white text-[#2f9db2]' : 'bg-white text-[#777]'
      }`}>
        {num}
      </span>
      <span>{label}</span>
    </div>
  )
}
