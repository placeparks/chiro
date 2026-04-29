import { Link } from 'react-router-dom'
import SymptomSidebar from '../../components/SymptomSidebar'

export default function Wellness() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Wellness Care</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <img src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/page-content3-chiropractor-near-me-for-wellness-care.jpg" alt="Wellness chiropractic care" className="w-full rounded-lg shadow mb-6" />

            <p className="text-gray-700 leading-relaxed mb-4">Is wellness chiropractic care something that could improve the overall quality of your life? Most people are raised to believe that we are sick because we have symptoms. Have you ever considered sickness without symptoms?</p>
            <p className="text-gray-700 leading-relaxed mb-6">There are a growing number of people that are starting to visit chiropractors even though they feel like they are completely healthy. This decision is more appealing to more people because they are beginning to see the value of being and feeling their best as often as possible.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">The "First" Sign You Need Wellness Care</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Most of us have learned to associate having an illness with outward symptoms. For instance, we don't take a day off work or school unless we are experiencing nausea or a fever, even if we don't feel "right." Research is starting to show us that many of the illnesses people in our society suffer with are directly related to decisions we are making in our lives. These decisions may affect our bodies and produce problems that do not have, what we consider to be, obvious outward symptoms.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">The Body Reacts</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Our body does not just react to unhealthy choices, but it also reacts to healthy choices. If a person eats something that has not been cooked properly then that person will most likely find themselves getting physically ill. Getting ill is rarely an enjoyable experience, but we know and understand that it is the body's way of removing something poisonous or unhealthy, thus helping us stay healthy. The body having such a response is healthy and is proof of the body functioning properly. Health can be defined as the body functioning properly, not just feeling good.</p>

            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-3">Master Control Center</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Everything that occurs in our body throughout the day would not be possible without our nervous system. Your nervous system, and by extension, your entire body, is monitored and controlled by your spine. By protecting the nervous system, your health drastically improves along with everything else in your body.</p>
            <p className="text-gray-700 leading-relaxed mb-6">When something is wrong with your body, oftentimes it is a symptom of a deeper problem rather than an individual concern. By consulting with a chiropractor, you may even be able to find and resolve an issue you didn't even know you have. Our team at Kauffman Chiropractic can help you detect problems before they develop into something more serious as well as help you to maintain your bodily wellness.</p>

            <div className="bg-gray-100 rounded-lg p-5 border-l-4 border-[#2eafc0]">
              <p className="text-gray-700 text-sm leading-relaxed">If you have any questions about our Merrillville or Crown Point locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, please <Link to="/contact" className="text-[#2eafc0] font-bold hover:underline">give us a call</Link>.</p>
            </div>
          </div>
          <SymptomSidebar />
        </div>
      </section>
    </>
  )
}
