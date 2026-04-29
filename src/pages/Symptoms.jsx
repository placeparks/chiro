import { useState } from 'react'
import { FaHeadSideCough, FaBone, FaRunning, FaUserMd, FaHandPaper, FaBrain, FaChild, FaBaby, FaHeartbeat, FaWalking, FaEye, FaWeight } from 'react-icons/fa'

const categories = [
  { id: 'spine', label: 'Spine-Related' },
  { id: 'injuries', label: 'Injuries' },
  { id: 'extremities', label: 'Extremities' },
  { id: 'family', label: 'Family' },
  { id: 'other', label: 'Other' },
]

const conditions = [
  { icon: <FaUserMd />, title: 'Back Pain', category: 'spine', desc: 'Lower and upper back pain treatment through spinal adjustments, reducing pressure on nerves and restoring proper alignment for lasting relief.' },
  { icon: <FaBone />, title: 'Neck Pain', category: 'spine', desc: 'Gentle cervical adjustments to restore mobility, reduce stiffness, and alleviate chronic or acute neck pain from various causes.' },
  { icon: <FaHeadSideCough />, title: 'Headaches & Migraines', category: 'spine', desc: 'Many headaches originate from spinal issues. Chiropractic care can reduce the frequency and severity of tension and migraine headaches.' },
  { icon: <FaBrain />, title: 'Sciatica', category: 'spine', desc: 'Targeted treatment to relieve pressure on the sciatic nerve, reducing radiating leg pain, numbness, and tingling sensations.' },
  { icon: <FaBone />, title: 'Disc Injuries', category: 'spine', desc: 'Non-surgical treatment for herniated, bulging, or degenerative disc conditions using gentle decompression and adjustment techniques.' },
  { icon: <FaWalking />, title: 'Scoliosis', category: 'spine', desc: 'Management and treatment of spinal curvature through specialized adjustments and therapeutic exercises.' },
  { icon: <FaRunning />, title: 'Whiplash', category: 'injuries', desc: 'Comprehensive treatment for auto accident injuries including whiplash, helping restore range of motion and reduce pain.' },
  { icon: <FaRunning />, title: 'Sports Injuries', category: 'injuries', desc: 'Recovery and rehabilitation for athletic injuries, from sprains and strains to repetitive motion disorders.' },
  { icon: <FaRunning />, title: 'Work Injuries', category: 'injuries', desc: 'Treatment for workplace injuries including repetitive strain, lifting injuries, and occupational musculoskeletal conditions.' },
  { icon: <FaHandPaper />, title: 'Carpal Tunnel', category: 'extremities', desc: 'Non-surgical approaches to relieve wrist pain, numbness, and tingling from carpal tunnel syndrome.' },
  { icon: <FaBone />, title: 'Shoulder Pain', category: 'extremities', desc: 'Treatment for frozen shoulder, rotator cuff issues, and general shoulder pain through adjustments and therapy.' },
  { icon: <FaWalking />, title: 'Arm & Leg Pain', category: 'extremities', desc: 'Diagnosis and treatment of radiating pain in the extremities, often caused by spinal nerve compression.' },
  { icon: <FaBaby />, title: 'Pregnancy Care', category: 'family', desc: 'Safe, gentle chiropractic care during pregnancy to reduce back pain, improve comfort, and support optimal fetal positioning.' },
  { icon: <FaChild />, title: "Children's Care", category: 'family', desc: 'Gentle pediatric chiropractic care to support healthy development and address common childhood musculoskeletal issues.' },
  { icon: <FaHeartbeat />, title: 'Wellness Care', category: 'family', desc: 'Ongoing preventive care to maintain spinal health, boost immunity, and support overall well-being for the whole family.' },
  { icon: <FaEye />, title: 'Vertigo & Dizziness', category: 'other', desc: 'Chiropractic treatment can help address certain types of vertigo and dizziness related to cervical spine issues.' },
  { icon: <FaWeight />, title: 'Posture Correction', category: 'other', desc: 'Evaluation and treatment of postural imbalances that contribute to pain, fatigue, and decreased quality of life.' },
  { icon: <FaHeartbeat />, title: 'Fibromyalgia', category: 'other', desc: 'Supportive care to help manage fibromyalgia symptoms including widespread pain, fatigue, and sleep disturbances.' },
]

export default function Symptoms() {
  const [active, setActive] = useState('spine')
  const filtered = conditions.filter(c => c.category === active)

  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-secondary-light font-semibold mb-2 uppercase tracking-wide text-sm">Symptoms & Conditions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Treat</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">We specialize in diagnosing and treating a wide range of neuromusculoskeletal conditions.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition ${
                active === cat.id
                  ? 'bg-primary text-white shadow'
                  : 'bg-bg-light text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <div key={c.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition border border-gray-100">
              <div className="text-3xl text-primary mb-3">{c.icon}</div>
              <h3 className="font-bold text-lg text-primary mb-2">{c.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-light py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Don't See Your Condition?</h2>
          <p className="text-gray-600 mb-6">We treat many more conditions than listed here. Contact us to discuss your specific symptoms and learn how chiropractic care can help you.</p>
          <a href="tel:2197367363" className="inline-block bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-lg transition shadow">
            Call Us: (219) 736-7363
          </a>
        </div>
      </section>
    </>
  )
}
