import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function CarpalTunnel() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Struggling with Carpal Tunnel?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-chiropractic-care-helps-patients-with-carpal-tunnel-syndrome.jpg" alt="Chiropractic care for carpal tunnel syndrome" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Just as nerves can be pinched in your back by the bones in your spine, the bones in your wrist may also compress nearby nerves giving rise to the symptoms of carpal tunnel syndrome. While many people seek treatment through surgical means, chiropractors have had great success with chiropractic care, including non-invasive treatments involving adjusting the bones in the wrist.</p>
            <p className="text-gray-700 leading-relaxed mb-6">With surgical procedures costing anywhere between $6,000 and $11,000 dollars, and rarely resulting in full resolution of symptoms, many people are electing to choose a more conservative approach to care. If you're unsure of how to proceed with treatment, this short article should provide you with some general information about the different solutions available for those suffering from carpal tunnel syndrome.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Could I Be Developing Carpal Tunnel Syndrome?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Many people who complain of wrist pain rarely realize what exactly carpal tunnel syndrome feels like. Typically, as the median nerve is compressed due to swelling and bony misalignments of the wrist, sufferers have reported burning pain, tingling, or swelling extending from the first to the third digit and the thumb. It is not uncommon for patients to report that they have recently noticed weakness throughout the affected hand.</p>
            <p className="text-gray-700 leading-relaxed mb-4">The cause of carpal tunnel syndrome is rarely obvious, but some patients are able to recall an injury to the wrist that caused the symptoms to develop shortly after. Certain occupations have also been shown to contribute to the development of the condition, particularly jobs that involve long term use of vibrating instruments and the repetitious use of the hands and wrist.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Carpal tunnel typically begins in a person's dominant hand, but symptoms throughout both hands is not uncommon and is nearly 3 times more common in women than men. It has been shown that patients suffering from carpal tunnel syndrome in both arms typically have nerve irritation stemming from the spine, which is why carpal tunnel decompression surgeries are unsuccessful nearly 40% of the time.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">What are the Best Treatments for Carpal Tunnel?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The most appropriate treatment for your carpal tunnel syndrome largely depends on the underlying cause. As with most conditions, it is advised that patients begin with a non-invasive and more affordable treatment, such as spinal adjustment. Following spinal corrections, many patients experience substantial improvements of their symptoms, unlike those who use prescription medications and decompression surgeries, who often report that their symptoms reappear after a short period of time.</p>
            <p className="text-gray-700 leading-relaxed mb-6">A chiropractor should perform an evaluation of your condition and formulate an individualized treatment plan that best suits you. If symptoms persist, adjustments to the bones of the wrist and therapies to the surrounding tissues are often considered.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">We understand that making decisions about how to treat carpal tunnel syndrome can be confusing. <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">Contact Kauffman Chiropractic today</Link> for more information or to schedule a consultation.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
