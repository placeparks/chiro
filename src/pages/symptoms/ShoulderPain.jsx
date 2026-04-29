import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function ShoulderPain() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Struggling with Shoulder Pain?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-get-shoulder-pain-relief-at-our-chiropractic-clinic.jpg" alt="Shoulder pain relief at our chiropractic office" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Do you have shoulder pain? The shoulder is the most mobile joint in the body and as a result is subject to a wide range of injuries and conditions. Shoulder pain can be caused by a variety of problems, but some of the most common reasons for pain in the shoulder include: neck and upper back problems, arthritis, abnormal motion patterns, participation in athletic events, and automobile accidents.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">Due to the wide range of potential causes, shoulder pain or abnormal motion in the joint could either develop gradually or come on suddenly. Since the shoulder joint is used in almost every daily activity, any injury to the area should be taken seriously and treated appropriately. Even minor injuries could worsen and should be treated early to help prevent progression.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Common Symptoms</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Symptoms indicating the need for an immediate evaluation of the shoulder include:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-6 ml-2">
              <li>Pain that lasts for more than a week</li>
              <li>Shoulder pain that comes and goes frequently</li>
              <li>Difficulty raising your arm above your head</li>
              <li>Trouble or pain when carrying objects</li>
              <li>Pain that gets worse in the evening</li>
              <li>Obvious signs of injury, or an unusual snapping or clicking sensation in the joint during movement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">As with most conditions, the most effective treatment depends on the source of the problem, so getting an accurate diagnosis is a crucial step in the evaluation process. Most chiropractors are fully equipped and trained on the various methods for diagnosing the cause of shoulder pain. With the clinical information provided from your history, advanced imaging techniques, and orthopedic procedures, a chiropractor will be able to quickly determine the exact cause of your pain.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Treatment for Shoulder Pain</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The neck and upper back are the areas where all of the muscles and structures that control the shoulder joint originate. There is a wide variety of issues that could arise if there is a problem with the nerves and the structures due to spinal misalignment. Research has also shown that many cases of shoulder pain are actually due to referred pain from the neck region.</p>
            <p className="text-gray-700 leading-relaxed mb-6">If the shoulder pain persists following the correction of spinal misalignment, alert your chiropractor immediately. Additional manual and passive therapies will often be used in conjunction with the main chiropractic care to help ensure a fast recovery.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">Whether the pain is originating from the spine or is caused by damage to the shoulder joint, <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">call our team at Kauffman Chiropractic</Link> for a full check-up.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
