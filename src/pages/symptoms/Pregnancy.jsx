import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function Pregnancy() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Chiropractic for Pregnancy?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-many-women-use-chiropractic-care-during-pregnancy.jpg" alt="Chiropractic care during pregnancy" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Have you considered chiropractic care for pregnancy? The physical stress of pregnancy can lead to a great deal of discomfort, and it's common for women to complain of a lot of lower back pain while pregnant.</p>
            <p className="text-gray-700 leading-relaxed mb-4">According to the American Pregnancy Association, 50-70% of pregnant women experience lower back pain at some point during their pregnancy. The back pain generally peaks around the third trimester because this is when the baby gains the most weight.</p>
            <p className="text-gray-700 leading-relaxed mb-6">During pregnancy, a woman's body must undergo a number of different changes to accommodate the growing baby. Due to the weight that is gained, a mother's center of gravity moves from its natural position, shifting to the front of her pelvis. This can add stress and discomfort to the lower back and various joints in the pelvis.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Added Stress as Pregnancy Progresses</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Throughout the pregnancy, as the baby grows, the mother gains more weight, adding to the stress on the lower back and increasing the lordotic curvature of her lower back. If the sufferer already has a history of lower back problems there is a good chance that the pregnancy will aggravate the condition. This may lead to difficulty performing daily routines such as dressing or working, and can create complications during labor.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Stress on the lower back can create many more additional problems. Issues such as leg cramps, abdominal cramping, constipation and more have been reported.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Prenatal Care at Kauffman Chiropractic</h2>
            <p className="text-gray-700 leading-relaxed mb-6">At Kauffman Chiropractic we can provide personalized care throughout your pregnancy as well as after. Regular consultations with our trained staff of chiropractors can help alleviate and even prevent common pains and problems associated with pregnancy. In doing this, we give you and your baby a better chance of a straightforward, safe birth.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Chiropractic During Pregnancy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Chiropractic care is just one of the many safe and effective treatments that can help prepare the mother's body for the experience of pregnancy and childbirth. There are specialized adjustment methods designed to accommodate pregnancy and lessen the issues that come with it. Many of the women that choose to receive chiropractic care during their pregnancy report that it helped them use little to no pain medications throughout their delivery. There are also studies finding that receiving regular care can help reduce labor time.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">Kauffman Chiropractic has the educated and trained staff to answer your questions. We are here to provide safe, controlled, and gentle care for you and your unborn child. <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">Call today</Link> to take a step towards a pain-free and natural pregnancy.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
