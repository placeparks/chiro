import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function ArmLegPain() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Arm and Leg Pain</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-chiropractor-near-you-may-help-arm-leg-pain.jpg" alt="Chiropractor can help arm and leg pain" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Our shoulder and hip joints are two of our most frequently used joints and are prone to a wide range of possible injuries. Oftentimes people are completely unaware of what caused their pain — maybe it is a weekend warrior who overused the joint in an athletic competition, an unfortunate participant in a car accident, a person lifting too much weight at work or home, or a grandmother who fell asleep holding their grandchild in one position all night. Typically, these situations cause almost an immediate pain or discomfort as a result of muscle, bone, or nervous system damage and irritation. Our chiropractic clinic can help.</p>
            <p className="text-gray-700 leading-relaxed mb-4">However, many people have arm and leg pain that develops gradually over time, and are unaware of what may have initially caused it. Vertebral subluxations, arthritis, bursitis, tendinitis, and frozen shoulder are the most common causes of pain.</p>
            <p className="text-gray-700 leading-relaxed mb-6">It has also been shown that arm and leg pain is often caused by "referred pain," where pain in one area moves to another part of the body. This may be best known as the arm pain that is commonly reported during a heart attack. We frequently see patients who complain of arm and leg pain that is being referred from nerve irritation at the spine. If the spaces where the nerves leave the spine are narrowed due to the vertebrae or disc being out of position, the nerve can become irritated and often produces pain down its entire path.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">What Is Causing My Leg Pain?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Due to the complexity of the joints and the vast number of possible causes, it is important that you see someone who is trained in these areas. Typically, your healthcare provider will use a combination of a physical examination and advanced imaging to get to the root cause of your problems. This is done by finding the location of the pain, aggravating or alleviating factors, type of pain sensation, and other symptoms such as swelling, skin changes, and bruising as other tools to assist in the diagnosis.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Can a Chiropractor Help?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">As with any condition, you want to start with treating the most common and typical cause of the pain and symptoms first. Misalignment (subluxations) of the vertebrae in the neck and lower back has been found responsible for the vast majority of reported arm and leg pain. When bones or discs are out of position and are unable to move properly, it can cause irritation to the surrounding tissues and nerves.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Many patients are surprised to see how extensively their nerves are spread throughout the body, from the spine all the way to the fingertips and toes. As a result, injuries to the vertebrae in the spine can create the sensation of pain anywhere along arms and legs. Through a careful pattern of treatment, patients at Kauffman Chiropractic have experienced high levels of success through chiropractic treatment.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">If you or a loved one is experiencing arm or leg pain, <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">contact us at either of our Merrillville or Crown Point locations</Link> today to schedule an appointment.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
