import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function WorkInjury() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Injured at Work?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-best-chiropractic-care-for-work-injury.jpg" alt="Best chiropractic care for work injuries" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Many people are surprised when they find out that the overwhelming majority of injuries that happen in the workplace do not occur because of serious accidents. The truth is that most injuries in the workplace happen from strain and repetitive movements. Each year in the United States millions of dollars are spent to help individuals with this problem, with mixed results. Chiropractic care may be the answer.</p>
            <p className="text-gray-700 leading-relaxed mb-6">The most common of all the risk factors associated with work injury is repetitive stress. Small tasks that are done with consistently poor posture will create big problems over the months or even years. Some of the most common repetitive strain injuries include twisting and turning while moving boxes or other heavy items, or even continuous typing in a poor position. You would think it's the big package that falls on you, but it's the small ones handled more often each day that create the majority of injuries.</p>
            <p className="text-gray-700 leading-relaxed mb-6">When the spine and joints become misaligned it can (and will) cause pain and injuries. Joints that are misaligned cause swelling which can irritate surrounding nerves leading to multiple problems.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Can Our Chiropractic Team Help?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Chiropractors historically have very high success rates when it comes to helping relieve pain in people with work injuries. Lower back pain and repetitive stress injuries, including carpal tunnel syndrome, are just two of the more common work-related conditions that any chiropractor will deal with on a regular basis.</p>
            <p className="text-gray-700 leading-relaxed mb-4">The importance of receiving the appropriate care as quickly as possible cannot be stated enough. Repetitive strain injuries will get worse the longer you go without treatment. If the injuries are allowed to worsen, you may have to undergo surgery to correct any issues that have developed. By talking with a chiropractor and undergoing treatment, you may be able to completely avoid surgery or prescription medication for pain relief.</p>
            <p className="text-gray-700 leading-relaxed mb-6">The sooner you receive proper care after a work injury, the easier it is to make a quick recovery. One of our professional chiropractors may be able to assess your condition and help you understand what it is going to take to recover, such as approximate recovery time and exercises you will find beneficial to your recovery.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">Pain is not something you should have to live with. If you are dealing with any kind of work injury, our team at Kauffman Chiropractic is here to help. If you have any questions about our Merrillville or Crown Point locations, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
