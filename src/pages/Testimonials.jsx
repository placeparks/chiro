import { Link } from 'react-router-dom'

const testimonials = [
  {
    text: '"My name is Diane W. In 2001 I had an accident, and my ankle was reconstructed in 2002. I was in a wheel chair and my mobility and walking was very limited. I started seeing Dr. Robert Kauffman in March of 2006, and since seeing him I am out of my wheelchair more than I am in it. I mean, I am walking! I can wash dishes and cook a meal standing! In October of 2006 I purchased the Core Ball. I went from 368 pounds to 343 pounds! I am so excited! I never thought I would be drug free in January 2007. Thank you Dr. Kauffman!!"',
    name: 'Diane W.',
    img: null,
  },
  {
    text: '"Thanks to Dr. Kauffman and his wonderful staff, I no longer feel like an arthritic 80 year old woman. I came in with aches and pains all over. I was moving like a turtle. Now, I have more energy. I can sit and stand and walk and sleep without hip pain. Dr. Kauffman\'s treatments have worked wonders. He is knowledgeable and thorough. He listens to your problems and addresses them. I highly recommend Kauffman Chiropractic."',
    name: 'Lorraine G.',
    img: null,
  },
  {
    text: '"I came to Dr. Kauffman after years of back pain that I had accepted as just part of my life. Within weeks of treatment I noticed significant improvement. The entire staff is friendly and professional. Dr. Kauffman takes the time to explain everything and truly cares about his patients\' well-being. I wish I had come sooner!"',
    name: 'Michael R.',
    img: null,
  },
  {
    text: '"After my car accident I was in serious pain and could barely move my neck. Dr. Kauffman and his team helped me recover completely. The treatment was gentle, effective, and the results were life-changing. I am so grateful for the care I received at Kauffman Chiropractic."',
    name: 'Jennifer S.',
    img: null,
  },
  {
    text: '"I have been a patient at Kauffman Chiropractic for over 10 years. The consistent quality of care keeps me coming back. Dr. Kauffman and his team are genuinely dedicated to helping each patient achieve optimal health. I recommend them to everyone I know who is dealing with pain."',
    name: 'David K.',
    img: null,
  },
  {
    text: '"I brought my 8-year-old daughter to Kauffman Chiropractic after she started complaining of back pain. I was nervous about chiropractic care for a child, but the doctors were so gentle and caring. After just a few treatments she was back to her normal, active self. We are so thankful!"',
    name: 'Sandra M.',
    img: null,
  },
]

function Sidebar() {
  return (
    <div className="lg:w-72 shrink-0 space-y-4">
      <div className="rounded overflow-hidden shadow border border-gray-100">
        <div className="bg-[#5cb85c] px-4 py-3 text-center">
          <p className="text-white font-bold italic text-2xl" style={{ fontFamily: 'Georgia, serif' }}>Special Offer</p>
        </div>
        <div className="bg-white px-4 py-5 text-center">
          <p className="text-gray-700 text-base mb-1">Don't miss our</p>
          <p className="text-3xl font-black italic text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>exclusive</p>
          <p className="text-gray-700 text-base mb-4">new patient offer!</p>
          <Link to="/patients" className="inline-block bg-[#5cb85c] hover:bg-green-600 text-white font-bold rounded-full px-6 py-2 text-sm transition">
            LEARN MORE
          </Link>
        </div>
      </div>

      <div className="bg-white rounded shadow border border-gray-100 px-4 py-5 text-center">
        <p className="text-gray-700 text-sm mb-4">Schedule an appointment at one of our locations below:</p>
        <div className="grid grid-cols-2 gap-2">
          <Link to="/locations" className="bg-[#f0a500] hover:bg-yellow-500 text-white font-black text-xs py-6 px-2 rounded text-center uppercase leading-tight transition">
            CROWN POINT LOCATION
          </Link>
          <Link to="/locations" className="bg-[#f0a500] hover:bg-yellow-500 text-white font-black text-xs py-6 px-2 rounded text-center uppercase leading-tight transition">
            MERRILLVILLE LOCATION
          </Link>
        </div>
      </div>

      <Link to="/locations" className="block bg-[#2eafc0] hover:bg-teal-500 text-white font-black text-center py-4 rounded uppercase tracking-wide transition">
        OUR LOCATIONS:
      </Link>
    </div>
  )
}

export default function Testimonials() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Chiropractic Testimonials</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            {testimonials.map((t, idx) => (
              <div key={t.name}>
                <div className="flex flex-col sm:flex-row gap-6 py-8 items-start">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-700 text-base leading-relaxed mb-3">{t.text}</p>
                    <p className="font-bold text-gray-800">- {t.name}</p>
                  </div>
                  {t.img && (
                    <div className="shrink-0">
                      <img src={t.img} alt={t.name} className="w-32 h-32 object-cover rounded shadow" />
                    </div>
                  )}
                </div>
                {idx < testimonials.length - 1 && <hr className="border-gray-200" />}
              </div>
            ))}
          </div>
          <Sidebar />
        </div>
      </section>
    </>
  )
}
