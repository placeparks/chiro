import { Link } from 'react-router-dom'
import { FaFileAlt, FaCalendarCheck, FaClipboardList, FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

const steps = [
  { icon: <FaCalendarCheck />, title: 'Schedule Your Visit', desc: 'Call us or use our online scheduler to book your first appointment at either location.' },
  { icon: <FaFileAlt />, title: 'Complete Paperwork', desc: 'Download and fill out our new patient forms before your visit to save time.' },
  { icon: <FaClipboardList />, title: 'Initial Consultation', desc: 'Meet with the doctor for a thorough examination, health history review, and any necessary X-rays.' },
  { icon: <FaCheckCircle />, title: 'Treatment Plan', desc: 'Receive a personalized treatment plan designed for your specific condition and recovery goals.' },
]

const faqs = [
  { q: 'What should I bring to my first visit?', a: 'Please bring your photo ID, insurance card, completed new patient paperwork, and any relevant medical records or imaging studies.' },
  { q: 'Does chiropractic treatment hurt?', a: 'Most patients experience little to no discomfort during chiropractic adjustments. You may hear a popping sound, which is simply gas being released from the joint. Many patients report immediate relief after their adjustment.' },
  { q: 'How long is the first appointment?', a: 'Your initial visit typically takes 45-60 minutes, which includes a comprehensive examination, health history review, and your first treatment if appropriate.' },
  { q: 'Do you accept insurance?', a: 'Yes, we accept most major insurance plans including Blue Cross Blue Shield, Aetna, United Healthcare, Cigna, and many others. Contact our office to verify your specific coverage.' },
  { q: 'How many visits will I need?', a: 'Treatment frequency varies based on your condition, severity, and health goals. After your initial evaluation, we will recommend a treatment plan tailored to your needs.' },
]

export default function Patients() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-secondary-light font-semibold mb-2 uppercase tracking-wide text-sm">New Patients</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome New Patients</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Everything you need to know about your first visit to Kauffman Chiropractic.</p>
        </div>
      </section>

      {/* New Patient Special */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-secondary to-secondary-light rounded-2xl p-8 md:p-12 text-white text-center">
          <p className="uppercase tracking-wide text-sm font-bold text-green-100 mb-2">Limited Time Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">New Patient Special</h2>
          <p className="text-green-100 text-lg mb-6 max-w-xl mx-auto">
            Comprehensive consultation, examination, and X-rays (if needed) — all at a special introductory rate for new patients.
          </p>
          <Link to="/contact" className="inline-block bg-white text-secondary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg">
            Claim Your Offer
          </Link>
        </div>
      </section>

      {/* First Visit Steps */}
      <section className="bg-bg-light py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Your First Visit</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Here's what to expect when you visit our office for the first time.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="bg-white rounded-xl p-6 shadow text-center relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</div>
                <div className="text-3xl text-primary mb-3 flex justify-center">{step.icon}</div>
                <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paperwork */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Patient Paperwork</h2>
            <p className="text-gray-600 mb-6">
              Save time at your first visit by downloading and completing our patient forms before you arrive. You can also fill them out in our office.
            </p>
            <div className="space-y-3">
              {['New Patient Intake Form', 'Health History Questionnaire', 'HIPAA Privacy Notice', 'Financial Policy Agreement'].map(form => (
                <div key={form} className="flex items-center gap-3 bg-bg-light rounded-lg p-4">
                  <FaFileAlt className="text-primary shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{form}</span>
                  <span className="ml-auto text-primary-light text-xs font-semibold cursor-pointer hover:underline">Download PDF</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4 font-[var(--font-heading)]">Insurance We Accept</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {['Blue Cross Blue Shield', 'Aetna', 'United Healthcare', 'Cigna', 'Humana', 'Medicare', 'Auto Insurance', 'Workers Comp'].map(ins => (
                <div key={ins} className="flex items-center gap-2 text-blue-100">
                  <FaCheckCircle className="text-secondary-light shrink-0 text-xs" /> {ins}
                </div>
              ))}
            </div>
            <p className="text-blue-200 text-xs mt-4">Don't see your plan? Call us to verify your coverage.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-bg-light py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(faq => (
              <details key={faq.q} className="bg-white rounded-xl shadow group">
                <summary className="p-5 font-semibold text-primary cursor-pointer flex items-center justify-between hover:bg-bg-light rounded-xl transition">
                  {faq.q}
                  <FaArrowRight className="text-xs transform group-open:rotate-90 transition shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">Patient Reviews</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Michael R.', text: 'Best chiropractic experience I have ever had. The staff is friendly and Dr. Kauffman truly cares about his patients.' },
            { name: 'Jennifer S.', text: 'After my car accident, the team here helped me recover completely. I am so grateful for their expertise and compassion.' },
            { name: 'David K.', text: 'I have been a patient for over 10 years. The consistent quality of care keeps me coming back. Highly recommend!' },
          ].map(review => (
            <div key={review.name} className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-600 text-sm italic mb-4">"{review.text}"</p>
              <p className="font-bold text-primary text-sm">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
