import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function Vertigo() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Do You Have Vertigo?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-chiropractic-care-helps-patients-with-vertigo.jpg" alt="Chiropractic care for vertigo" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Do you suffer from vertigo or dizziness? Many chiropractic clinics and health care professionals have patients who come to them complaining of dizziness. Most of these patients report having received little information about what is causing their dizziness (vertigo), and know little about the best available treatments.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Many people who report feeling dizzy are actually referring to two different symptoms. Sometimes dizziness means that they feel like they are going to pass out/faint, and others feel dizzy when they perceive objects around them spinning and moving. Vertigo is a medical term that is used to describe the second situation. It is important to differentiate between the two sensations because each has a different set of causes and appropriate treatments. Your doctor will be able to help you understand the difference between the two.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">What Causes Vertigo?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Patients have presented with a variety of different causes for their vertigo, but some causes are reported more commonly than others. Some of the most common causes of vertigo reported include:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-6 ml-2">
              <li>Severe headaches such as migraines or tension headaches are known for creating the sensations of dizziness and sickness</li>
              <li>Chronic earaches or damage to the inside of the ear</li>
              <li>A lack of blood flow to the brain</li>
              <li>Car accidents resulting in damage to the joints and ligaments throughout the spine</li>
              <li>The most frequent cause is misalignment or subluxations of the vertebrae in the neck</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">The above stated list of common causes of vertigo may seem unrelated, but they actually have one major thing in common. Each one of the areas mentioned plays an important role in how the body orients itself and maintains balance. Once this balance is disrupted the body functions abnormally. Typically, the imbalance that results in vertigo is due to a disproportion of nervous system signals reaching the brain. These signals that would normally keep us balanced become distorted and scrambled resulting in symptoms of dizziness.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">The Symptoms of Vertigo</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Just as there are many causes of vertigo, dizziness is not the only symptom associated with this disorder. Vertigo can range from a small nuisance to a possible indication of a severe underlying condition. For this reason, it is important to schedule a consultation with a health care professional if you are experiencing any of the following symptoms:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-6 ml-2">
              <li>Blurry vision or double vision</li>
              <li>Problems hearing, like ringing ears, especially in one ear</li>
              <li>Trouble maintaining balance</li>
              <li>Feeling fatigued or tired all the time</li>
            </ul>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">If you or someone you know is experiencing vertigo or dizziness, <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">call our team at Kauffman Chiropractic</Link> to schedule a consultation.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
