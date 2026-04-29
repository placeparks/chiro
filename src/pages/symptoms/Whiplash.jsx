import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function Whiplash() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Suffering from Whiplash?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-auto-injuries-helped-by-seeing-a-chiropractor.jpg" alt="Auto injuries helped by chiropractor" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Have you experienced whiplash? Rear end collisions are the most common kind of car accidents that happen. Although they usually happen due to a combination of sudden braking, poor driving, or even unclear road signs and directions, they can vary wildly in severity. This article discusses how chiropractic care can help.</p>
            <p className="text-gray-700 leading-relaxed mb-4">Quite often, many patients that have been involved in some kind of rear-end collision don't even realize they have received injuries until weeks or even months post-impact. Their medical doctors do not always acknowledge injuries that may occur at lower speeds, despite a great deal of research today that says differently. If you believe that you have been injured in an accident, then you need to figure out how serious the injuries may be.</p>
            <p className="text-gray-700 leading-relaxed mb-4">To successfully treat a whiplash injury, it's extremely important to work with a medical professional that understands the problem and how to treat it. If you have been injured recently, you'll need to get your spine checked as soon as possible. The sooner that you get checked up and take the appropriate steps to care for injuries, the less chance you have of developing long-term problems.</p>
            <p className="text-gray-700 leading-relaxed mb-6">All drivers should take actions to reduce the risk of whiplash. Injuries tend to be more significant when your headrest is positioned too low. If you don't adjust it appropriately it can act as an acceleration point when you are hit from behind. A 5 mph impact can result in your head whipping back at a much higher rate of speed causing greater injury.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">When Should Care Start for a Whiplash Injury?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Whiplash injuries are a serious matter. If an injury of this caliber is left untreated then the potential long-term impact can be devastating. Unfortunately, most people that have been injured may not even realize they are injured until long after the accident. By the time many people realize they are in need of help, their problems will need more extensive treatment than if they had started treatment sooner.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Significant improvement was noted for 93% of the 28 patients studied in the Woodward study while under chiropractic care. In the research study the chiropractic care consisted of spinal manipulation, PNF, and cryotherapy.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">If you believe you have been injured and are in need of a chiropractor, <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">call our team at Kauffman Chiropractic today</Link> to set up an appointment.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
