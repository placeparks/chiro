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

export default function Sciatica() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Struggling with Sciatica?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img
              src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-our-chiropractic-clinic-helps-sciatica-pain.jpg"
              alt="Chiropractic care for sciatica"
              className="w-full rounded-lg shadow mb-6"
            />

            <p className="text-gray-700 leading-relaxed mb-4">
              Chiropractors are reporting that sciatica is one of the most common conditions they encounter each year. Millions of people in America will suffer with the pain of sciatica, and very few will find long-term relief. Keep reading to see how chiropractic care can help.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Patients often describe the pain of sciatica as ranging from a slight discomfort to the most extreme unbearable pain imaginable. Sciatic pain can show up in different areas of the leg and foot, and many times the pain will come and go. Over the years, people tend to go through periods of pain that typically intensify as the problem goes untreated.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Where Does Sciatica Start?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The pelvic and lumbar spine are usually the sources for sciatic issues. These areas of the spine are very complicated, and it can be difficult to locate the problem. Some patients say that all they did was bend over to pick up a piece of paper and they were hit with extreme pain. They don't understand how an easy task caused them so much pain. What they don't realize is that their condition was probably developing for the past few years, and bending to pick up that piece of paper just happened to be the last straw. With the exception of the most severe spinal problems, back issues don't happen overnight, they build up over years of time.
            </p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please{' '}
                <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.
              </p>
            </div>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">How Long Does it Take to Correct Sciatica?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Treatment length can vary significantly from patient to patient, depending on the severity of the problem. Some people respond very quickly while others take more time to recover. It really depends on the condition of the disc or the joints that the chiropractor has to correct. In most cases, the longer the issue persists, the longer it will take to achieve correction. The great news is that it typically takes less time to resolve it than it took to create it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              In the US the amount of people that end up with back surgery is staggering, and the low success rate is disappointing. It's estimated that back surgery is only about 15% effective within a five year period of time. By consulting with a chiropractor, you will be able to zero in on the source and deal with it, hopefully without needing invasive surgery. From there they will need to work with you to improve the position of the spine and discs.
            </p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">
                If you are serious about resolving your sciatica problems,{' '}
                <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">call our team at Kauffman Chiropractic</Link>{' '}
                today to set up a consultation.
              </p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
