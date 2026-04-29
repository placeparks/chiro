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

export default function Scoliosis() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Struggling with Scoliosis?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img
              src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-scoliosis-is-helped-with-chiropractic-care.jpg"
              alt="Chiropractic care for scoliosis"
              className="w-full rounded-lg shadow mb-6"
            />

            <p className="text-gray-700 leading-relaxed mb-4">
              Scoliosis typically begins as a minor bend in the spine that gradually becomes more and more curved. To make a diagnosis of scoliosis there must be a minimum 60 degree sideways curve of the spine. Unfortunately, once the spine has advanced to this stage, there are often severe health consequences to deal with. The good news is that if the bending of the spine is discovered before advancing to that point, and cared for properly during its early stages using chiropractic care, it can be prevented from worsening over time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many ideas regarding the cause of scoliosis have been researched and there has been little consensus regarding its origin. However, the studies have shown that scoliosis is more likely to occur in young adolescent females than males of any age.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Starting Off Small</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many times a small bend in the spine begins with the simple misalignment of a single vertebra. Over time, the body is forced to compensate for this abnormality and the spine develops "S" and "C" shaped curves. Often parents and children first notice the presence of scoliosis due to an obvious deformity of the shoulders and pelvis. Unlike most other spinal conditions, scoliosis cannot be reversed by improving posture.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              While the majority of scoliosis cases affect the younger population, it's important for you to realize that the condition can also develop in older adults. As people age, degenerative disorders such as osteoporosis can cause the bones in the spine to lose their normal shape. As a result, the body must compensate by producing lateral curves in the spine to ensure that the head remains level. In such cases, if the cause of the bending is not addressed there may be severe consequences, such as heart and lung problems.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              An x-ray examination performed by your chiropractor is the most effective means of detecting curvature of the spine. However, various orthopedic examinations such as Adams Position Test can assist in the diagnosis. Chiropractors will also examine the hips and shoulders, and check the legs for variation in length which can be a clue to the development of scoliosis.
            </p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Chiropractic Care for Scoliosis</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Chiropractic care has been demonstrated in numerous research studies to slow or stop the progression of scoliosis. Most chiropractors will have the resources and experience to provide you the most appropriate care, which may keep you from looking into more invasive or even surgical treatments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The chiropractor will request your full health history to identify any factors that could be contributing to the presence of scoliosis, such as occupational factors, lifestyle habits, previous traumas, and recreational activities. After these factors have been considered, they will likely perform specific spinal adjustments to reverse the body's compensations and assist in the restoration process.
            </p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">
                If you have any questions regarding scoliosis or chiropractic care at our Merrillville or Crown Point location, please{' '}
                <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give our team at Kauffman Chiropractic a call</Link>.
              </p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
