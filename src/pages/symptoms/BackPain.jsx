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

export default function BackPain() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Struggling with Back Pain?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0 prose prose-gray max-w-none">

            <img
              src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-chiropractic-care-can-help-with-back-pain.jpg"
              alt="Chiropractic care can help with back pain"
              className="w-full rounded-lg shadow mb-6 not-prose"
            />

            <p className="text-gray-700 leading-relaxed mb-4">
              Whether it is located in your upper, middle, or lower back, most people will experience some form of back pain in their life. In fact, an estimated 32 million Americans are currently suffering with back pain at this moment. Back pain has become the #1 cause of disability in the United States and is quickly becoming a major concern for many people.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, our experienced chiropractic team is here to help.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">What is the Cause of Back Pain?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The number of potential injuries, misalignments, and conditions that could cause back pain seems endless. Tendons, ligaments, discs, muscles, and bones can all become irritated or damaged throughout a lifetime, through repetitive stress or sudden, severe trauma. Conditions such as obesity, arthritis, kidney stones, and urinary tract infections have been shown to cause symptoms of lower back pain.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Disc Bulges or Herniation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              One of the most common and painful causes of back pain is a disc bulge or herniation. A disc herniation is when the outer edges of the disc are worn away over time, ultimately exposing the nerves. According to MRI studies, as many as 37% of the American population have a disc bulge or herniation, with the vast majority of those diagnosed not reporting any pain. On the other hand, the people who are experiencing pain often describe it as severe and intense.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The type of pain experienced due to a disc herniation depends on the type and position of the herniation. If the damaged disc is irritating a surrounding nerve, shooting pain and weakness in the legs may develop. Chiropractic care has been shown to prevent the advancement of the herniation and provide relief from the associated pain.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Subluxations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Subluxations are one of the most commonly overlooked contributors to back pain. Essentially, when a vertebra is out of position, it can cause a lot of pain and impede your movement. Subluxations can occur anywhere in the spine and can be caused by physical trauma, stress, and toxins. The time frame to correct subluxations varies, depending on both the individual, the severity of the subluxation and other factors.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Muscular Sprains and Tendon or Ligament Strains</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strains and sprains can occur in anyone, but they typically occur in people who engage in tasks that their body is not accustomed to or pushing themselves too hard. Ligament sprains are typically caused by stretching and tearing the ligament. Muscular strains are commonly caused by improper lifting form. Strains and sprains can be quite painful and are often accompanied by swelling and bruising of the surrounding area. On the upside, strains and sprains are rarely serious and typically respond very well to chiropractic care.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Stress and Back Pain</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              People with chronic stress have a very different physiological profile than those who don't. Elevated stress levels have been shown to contribute to the development of heart disease, digestive issues, depression, obesity, and back pain. The tension produced by chronic stress causes a contraction of muscle tissue creating "trigger points" which can be extremely painful.
            </p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] not-prose">
              <p className="text-gray-700 text-sm leading-relaxed">
                If you are suffering from back pain and have any further questions, please{' '}
                <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">contact our chiropractic team</Link>{' '}
                at Kauffman Chiropractic today to schedule a consultation.
              </p>
            </div>
          </div>

          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
