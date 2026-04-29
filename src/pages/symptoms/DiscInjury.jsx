import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function DiscInjury() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Have You Injured a Disc?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-disc-injury-can-be-helped-by-chiropractor.jpg" alt="Disc injury helped by chiropractor" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Have you been told that you have a slipped disc or a disc injury? Slipped or injured discs can vary from slight to severe, but most will require at least some attention from a trained chiropractor. It's important that you understand your condition and what it means for you, and a licensed chiropractor can help you develop the best treatment option for you.</p>
            <p className="text-gray-700 leading-relaxed mb-6">The little pads that lie between your vertebrae are called the intervertebral discs. Each disc has a tough outer ring and a soft gel-like center, like a jelly doughnut. Your discs both join, separate, and protect your vertebrae from trauma. These discs serve as cushions or shock absorbers so that the bones don't make contact with each other as you move. Without these discs we would literally be unable to move our upper torso.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Disc Injury Diagnosis</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If you are diagnosed with a protruding disc, it means that the gel has pushed out or is bulging due to injury, and is asymmetrical in different places. This may result in pinching and irritation of the nerve roots at that point, with varying levels of pain.</p>
            <p className="text-gray-700 leading-relaxed mb-4">A herniated disc happens when the disc material ruptures to the point that the gel pushes outward. This can also cause severe pain and numbness due to the irritation of the nerves and can be very serious in many cases.</p>
            <p className="text-gray-700 leading-relaxed mb-6">A disc extrusion is the worst type of disc injury. Essentially, the gel inside the disc balloons into the area outside the vertebrae or breaks off from the disc. This can lead to incredible back pain and can severely limit your range of motion.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Treatment Options</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If you have injured discs, don't despair, there are options. With proper care, an injured or damaged disc may be restored to health. With a combination of a healthy diet, low impact exercise, and warm and cold compresses, the pain can be lessened or even completely removed.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Unfortunately, in some cases of disc injury surgery may be the only option for treatment. The problem tissue will be removed by the surgery (a discectomy), which will remove the pressure on nearby tissue and nerves. With nearly half of a million discectomies performed each year, this procedure is fairly common and minimally invasive.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">If you're suffering from back pain that you believe is caused by a disc injury, <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">call our chiropractic team today at Kauffman Chiropractic</Link> to set up a consultation. The sooner you take control of your health the more options you will have for treatment.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
