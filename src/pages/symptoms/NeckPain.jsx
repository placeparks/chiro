import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

function Sidebar() {
  return (
    <div className="lg:w-72 shrink-0 space-y-4">
      <div className="rounded overflow-hidden shadow border border-gray-100">
        <div className="bg-[#5cb85c] px-4 py-3 text-center">
          <p className="text-white font-bold italic text-2xl" style={{ fontFamily: 'Georgia, serif' }}>Special Offer</p>
        </div>
        <div className="bg-white px-4 py-5 text-center">
          <p className="text-gray-700 text-base mb-1">Don't miss our</p>
          <p className="text-3xl font-black italic text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>exclusive</p>
          <p className="text-gray-700 text-base mb-4">new patient offer!</p>
          <Link to="/patients" className="inline-block bg-[#5cb85c] hover:bg-green-600 text-white font-bold rounded-full px-6 py-2 text-sm transition">
            LEARN MORE
          </Link>
        </div>
      </div>
      <div className="bg-white rounded shadow border border-gray-100 px-4 py-5 text-center">
        <p className="text-gray-700 text-sm mb-4">Schedule an appointment at one of our locations below:</p>
        <div className="grid grid-cols-2 gap-2">
          <Link to="/locations" className="bg-[#f0a500] hover:bg-yellow-500 text-white font-black text-xs py-6 px-2 rounded text-center uppercase leading-tight transition">CROWN POINT LOCATION</Link>
          <Link to="/locations" className="bg-[#f0a500] hover:bg-yellow-500 text-white font-black text-xs py-6 px-2 rounded text-center uppercase leading-tight transition">MERRILLVILLE LOCATION</Link>
        </div>
      </div>
      <Link to="/locations" className="block bg-[#2eafc0] hover:bg-teal-500 text-white font-black text-center py-4 rounded uppercase tracking-wide transition">OUR LOCATIONS:</Link>
    </div>
  )
}

export default function NeckPain() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Suffering with Neck Pain?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img
              src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-chiropractic-care-addresses-neck-pain.jpg"
              alt="Chiropractic care for neck pain"
              className="w-full rounded-lg shadow mb-6"
            />

            <p className="text-gray-700 leading-relaxed mb-6">
              Thousands of people suffer with neck pain. Most patients never receive the care they need even though chiropractors have been helping people with this condition for more than 100 years. This article from our Chiropractic team is here to help you understand the benefits of chiropractic care.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Chiropractic Care is Very Effective for Neck Pain</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              It is close to impossible to help a patient with neck pain if you are unsure of the location of the problem. At Kauffman Chiropractic, we use a variety of diagnostic tools to zero in on the source of the pain rather than just deal with the symptoms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The spine is one of the most complex areas of your body, with almost every systemic nerve running through it. Muscles connected to a misaligned region of the spine can spasm and tighten. This tightening is believed to be a defense mechanism of the body to protect the spine and spinal cord. Bad posture in general and specific repetitive motions done with bad posture are the most common cause of misalignments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many people let spinal problems go uncorrected. They hope that if they wait long enough their pain will just go away. In a lot of cases it probably will go away for at least a little bit, but the misalignment at the root of the problem will still be there. Over time that area can become aggravated again, and the pain may return. Without correction, over time the problem can become much more serious. Some patients even allow their spinal issues to worsen to the point that surgery may be the only option for relief.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Common vs. Normal</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are experiencing neck pain, you need to avoid falling into the common vs. normal trap. Simply put, because so many people complain of neck pain on a regular basis, for many people it's now seen as normal and to be expected in everyday life. This mentality is why so many people present with problems that can no longer be corrected by non-invasive methods and can lead to surgery and lengthy recovery times. Although neck pain is very common, it is certainly not normal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              You don't have to become a statistic of neck pain. Take control of the problem before it's too late by contacting us and setting up a consultation today. By dealing with your problem today, before it becomes unmanageable, your recovery time should be quick and with minimal interference.
            </p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">
                If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please{' '}
                <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.
              </p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
