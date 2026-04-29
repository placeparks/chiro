import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function Kids() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Chiropractic Care for Kids</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-chiropractor-sees-children-for-wellness-chiropractic-care.jpg" alt="Chiropractor for children wellness care" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-6">Have you considered the benefits of chiropractic care for your children? Although children appear to bounce back from most injuries quickly, many parents don't understand the long-term effects of misalignments that children develop in their spine. Unfortunately, children do not always verbalize exactly what they feel when they are sore, uncomfortable, or in pain. Just like with adults, if the underlying cause is left alone for too long it can develop into much more serious issues.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Chiropractic May Help With Child Development</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Chiropractic care may be helpful for your child's development. After development and birth, children growing into toddlers are faced with the developmental challenge of crawling and walking. While children are learning to overcome these challenges they are also going through a significant amount of straining, twisting, and falling.</p>
            <p className="text-gray-700 leading-relaxed mb-4">While growth continues, and the child reaches the age where they play with pets, friends, and family, they can begin to develop bad posture, start playing contact sports, wearing heavier backpacks (most likely the wrong way), and deal with the stress of more daily responsibilities. As these kids become teenagers and high school graduates, they join the workforce, which could place more strain on them depending on their chosen field.</p>
            <p className="text-gray-700 leading-relaxed mb-6">As a parent, you need to make it a point to ensure that all the falls, stress, trauma, and physical demands that your children go through do not stop them from being kids. Chiropractic care is all about protecting your body from harm and chiropractor's exams are not intrusive but extensive enough that, even if your child is too young to communicate, or too shy, they can ascertain if treatment is needed or not.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0] mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any concerns about your children, <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">call our team at Kauffman Chiropractic today</Link> for a no-obligation consultation and let us help your child on their way to a better life.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
