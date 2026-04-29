import { FaMapMarkerAlt, FaPhone, FaClock, FaDirections } from 'react-icons/fa'

const locations = [
  {
    name: 'Merrillville Office',
    address: '8585 Broadway, Suite 440',
    city: 'Merrillville, IN 46410',
    phone: '(219) 736-7363',
    hours: [
      { day: 'Monday', time: '9:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
      { day: 'Friday', time: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    mapQuery: 'Kauffman+Chiropractic+Merrillville+IN',
  },
  {
    name: 'Crown Point Office',
    address: '11055 Broadway, Suite B',
    city: 'Crown Point, IN 46307',
    phone: '(219) 662-9855',
    hours: [
      { day: 'Monday', time: '9:00 AM - 6:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
      { day: 'Friday', time: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 12:00 PM' },
      { day: 'Sunday', time: 'Closed' },
    ],
    mapQuery: 'Kauffman+Chiropractic+Crown+Point+IN',
  },
]

export default function Locations() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-secondary-light font-semibold mb-2 uppercase tracking-wide text-sm">Our Locations</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Two Convenient Locations</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Visit us at either of our Northwest Indiana offices for quality chiropractic care.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map(loc => (
            <div key={loc.name} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-bg-light h-48 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-5xl text-primary mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Interactive Map</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">{loc.name}</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-gray-700">{loc.address}</p>
                      <p className="text-gray-500 text-sm">{loc.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-primary shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="font-medium text-primary-light hover:underline">{loc.phone}</a>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FaClock className="text-primary" />
                    <h3 className="font-bold text-gray-700">Office Hours</h3>
                  </div>
                  <div className="space-y-1">
                    {loc.hours.map(h => (
                      <div key={h.day} className="flex justify-between text-sm">
                        <span className="text-gray-600">{h.day}</span>
                        <span className={`font-medium ${h.time === 'Closed' ? 'text-accent' : 'text-gray-700'}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-lg transition"
                >
                  <FaDirections /> Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Need to Schedule?</h2>
          <p className="text-gray-600 mb-6">Call either location to schedule your appointment or use our online booking system.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:2197367363" className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-lg transition">
              Merrillville: (219) 736-7363
            </a>
            <a href="tel:2196629855" className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-lg transition">
              Crown Point: (219) 662-9855
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
