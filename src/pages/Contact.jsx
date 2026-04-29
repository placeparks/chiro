import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', location: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-secondary-light font-semibold mb-2 uppercase tracking-wide text-sm">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Ready to schedule an appointment or have a question? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-secondary mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been received. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition"
                      placeholder="(219) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Location</label>
                    <select
                      value={form.location}
                      onChange={e => setForm({ ...form, location: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select a location</option>
                      <option value="merrillville">Merrillville Office</option>
                      <option value="crownpoint">Crown Point Office</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your symptoms or ask any questions..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-lg transition flex items-center gap-2 shadow"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-primary rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-blue-200 mb-1">Merrillville Office</h4>
                  <p className="flex items-start gap-2 text-blue-100"><FaMapMarkerAlt className="mt-0.5 shrink-0" /> 8585 Broadway, Suite 440<br/>Merrillville, IN 46410</p>
                  <p className="flex items-center gap-2 text-blue-100 mt-1"><FaPhone /> (219) 736-7363</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-200 mb-1">Crown Point Office</h4>
                  <p className="flex items-start gap-2 text-blue-100"><FaMapMarkerAlt className="mt-0.5 shrink-0" /> 11055 Broadway, Suite B<br/>Crown Point, IN 46307</p>
                  <p className="flex items-center gap-2 text-blue-100 mt-1"><FaPhone /> (219) 662-9855</p>
                </div>
                <div className="flex items-start gap-2 text-blue-100">
                  <FaEnvelope className="mt-0.5 shrink-0" /> info@kauffmanchiros.com
                </div>
              </div>
            </div>

            <div className="bg-bg-light rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <FaClock className="text-primary" />
                <h3 className="font-bold text-primary">Office Hours</h3>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-gray-600">Mon - Fri</span><span className="font-medium">9am - 6pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Saturday</span><span className="font-medium">9am - 12pm</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Sunday</span><span className="font-medium text-accent">Closed</span></div>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-6 text-white text-center">
              <h3 className="font-bold text-lg mb-2">Emergency?</h3>
              <p className="text-green-100 text-sm mb-3">For urgent care needs, call us directly.</p>
              <a href="tel:2197367363" className="inline-block bg-white text-secondary font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition text-sm">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
