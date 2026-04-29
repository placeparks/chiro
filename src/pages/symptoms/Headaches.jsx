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
          <Link to="/locations" className="bg-[#f0a500] hover:bg-yellow-500 text-white font-black text-xs py-6 px-2 rounded text-center uppercase leading-tight transition">
            CROWN POINT LOCATION
          </Link>
          <Link to="/locations" className="bg-[#f0a500] hover:bg-yellow-500 text-white font-black text-xs py-6 px-2 rounded text-center uppercase leading-tight transition">
            MERRILLVILLE LOCATION
          </Link>
        </div>
      </div>

      <Link to="/locations" className="block bg-[#2eafc0] hover:bg-teal-500 text-white font-black text-center py-4 rounded uppercase tracking-wide transition">
        OUR LOCATIONS:
      </Link>
    </div>
  )
}

export default function Headaches() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Struggling with Headaches or Migraines?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">

            <img
              src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-chiropractors-can-help-with-headaches-and-migraines.jpg"
              alt="Chiropractic care for headaches and migraines"
              className="w-full rounded-lg shadow mb-6"
            />

            <p className="text-gray-700 leading-relaxed mb-4">
              Migraines and headaches affect far too many people. If you're not sure if you have had a migraine or not, then chances are you probably haven't. The pain has been described as mind numbing, and leaves many sufferers unable to function. Traditional medical science relies on medication for this issue in most cases, but for many patients that is not the long-term solution. In these cases, it's important to find the source of what's causing the problem. Our team offers the best chiropractic care for migraines and headaches.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              There are many symptoms that can occur before a headache or migraine starts. Hallucinations, depression, or irritation are just some of the symptoms that patients often report before and during a migraine. Migraine sufferers will usually try to avoid light and loud noises and experience nausea and vomiting, among other symptoms.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Chiropractic Care for Migraines?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chiropractors know and understand how the nervous system can impact and influence the body, and have been providing relief from headaches and migraines for more than 100 years. Most people do not realize that a chiropractor could help with this type of symptom, but it has been shown that chiropractic care is effective at helping people with both headaches and migraines.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If the spine moves out of position it can put pressure on the surrounding nerves. This pressure can result in many problems, among them headaches and migraines, but when the spine is correctly adjusted and pressure is removed from the nervous system it can reduce or even prevent the occurrence of migraine headaches.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please give us a call.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">How are Headaches Treated?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The kind of treatment for headaches you need will depend on what is causing the problem. Your chiropractor and their team will work diligently to find the source of your headaches and provide advice on how best to treat it. Each year millions of dollars are spent treating headaches with aspirin and other drugs. While this may help in some cases, it only treats the symptoms, not the source of the problem. With a little time and effort, a chiropractor will be able to find the source of the problem and offer advice on how to deal with it, which can help you prevent the need for headache medications.
            </p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">
                Don't suffer needlessly with headaches and migraines. At Kauffman Chiropractic our team can help you understand your condition, and offer the best treatment.{' '}
                <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">Contact us</Link>{' '}
                at any time and ask any questions that you may have.
              </p>
            </div>
          </div>

          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
