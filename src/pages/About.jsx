import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus, FaMinus } from 'react-icons/fa'

const BASE = 'https://www.kauffmanchiros.com/wp-content/uploads/bb-plugin/cache/'

const team = [
  {
    role: 'FOUNDERS',
    name: 'ROBERT & DANIELLE KAUFFMAN D.C.',
    location: null,
    img: BASE + 'Robert-and-Danielle-Kauffman-circle.jpg',
    bio: null,
    accordion: [
      {
        label: 'ABOUT DR. ROBERT KAUFFMAN',
        text: 'Dr. Robert Kauffman co-founded Kauffman Chiropractic and has been serving Northwest Indiana since 1989. With decades of experience, Dr. Robert has helped thousands of patients achieve lasting pain relief and improved quality of life through expert chiropractic care.',
      },
      {
        label: 'ABOUT DR. DANIELLE KAUFFMAN',
        text: 'Dr. Danielle Kauffman co-founded Kauffman Chiropractic alongside her husband Dr. Robert. Her compassionate approach and clinical expertise have made her a beloved figure among patients and staff alike. She specializes in family and wellness chiropractic care.',
      },
    ],
  },
  {
    role: 'CHIROPRACTOR',
    name: 'MICHAEL KAUFFMAN D.C.',
    location: 'CROWN POINT LOCATION',
    img: BASE + 'Chiropractor-Merrillville-IN-Michael-Kauffman-About-Us-2022-circle.jpg',
    bio: 'Dr. Michael Kauffman was born in October of 1993 and is the youngest of the three Kauffman siblings, all chiropractors. He attended Indiana University Bloomington and graduated Palmer college of chiropractic in 2018. In his free time he enjoys playing classical guitar, along with basketball and golf. He is past Vice President of Delta Delta Pi professional chiropractic fraternity.',
  },
  {
    role: 'CHIROPRACTOR',
    name: 'NICHOLAS KAUFFMAN D.C.',
    location: 'MERRILLVILLE LOCATION',
    img: BASE + 'Chiropractor-Merrillville-IN-Nicholas-Kauffman-circle.jpg',
    bio: 'Dr. Kauffman was born in Davenport, IA in 1989 to Robert & Danielle. Dr. Nick later returned to IA to graduate in 2014 and join the family practice. Following in the footsteps of his parents, Dr. Nick enjoys learning about the human body and promoting spinal healthcare. However has been immersed in the profession since childhood. Hobbies include building computers, fishing, long boarding, and reading.',
  },
  {
    role: 'CHIROPRACTOR',
    name: 'KELSI DIMITT D.C.',
    location: 'CROWN POINT LOCATION',
    img: BASE + 'Chiropractor-Crown-Point-IN-Kelsi-Dimitt-3-circle.jpg',
    bio: 'Dr. Dimitt is a native of Tippecanoe County. She was introduced to chiropractic while attending Purdue University. During those college years, she decided to attend Logan University where she fell in love with the results of chiropractic care after her very first adjustment. She graduated from Purdue with a Neurobiology and Physiology Degree and was accepted to Logan University to receive her Bachelors in Human Biology and her Doctor of Chiropractic Degree.',
  },
  {
    role: 'CHIROPRACTOR',
    name: 'KRISTINA KAUFFMAN D.C.',
    location: 'CROWN POINT LOCATION',
    img: BASE + 'Chiropractor-Crown-Point-IN-Kristina-Kauffman-circle.jpg',
    bio: 'Dr. Kristina Kauffman is the second of 3 children to Robert and Danielle Kauffman. She grew up in the middle of 2 brothers, having an active athletic life from a young age. While attending Andrean High School, she lettered in tennis, track and basketball and excelled academically.',
  },
  {
    role: 'CHIROPRACTOR',
    name: 'ANDREW SUTCLIFFE D.C.',
    location: 'MERRILLVILLE LOCATION',
    img: BASE + 'Chiropractor-Merrillville-IN-Andrew-Sutcliffe-circle.jpg',
    bio: 'Dr. Andrew Sutcliffe hails from the western Chicago suburbs. He received his Bachelors degree in biological sciences from the University of Illinois Chicago prior to attending Palmer College of Chiropractic. Dr. Andrew graduated from Palmer with high honors and was elected the President of Delta Delta Pi professional chiropractic fraternity, in which he served for one year. Outside of the clinic, he enjoys watching sports, playing golf, fishing, and snowboarding.',
  },
  {
    role: 'CHIROPRACTOR',
    name: 'MALLORY LEHMAN D.C.',
    location: 'CROWN POINT LOCATION',
    img: BASE + 'Chiropractor-Crown-Point-IN-Mallory-Lehman-Meet-The-Team-circle.jpg',
    bio: "Dr. Mallory Lehman is originally from Columbiana, Ohio. In 2016, she started her studies in pre-medicine at Youngstown State University. After learning about chiropractic, she decided to continue her education at Palmer College of Chiropractic where she received both her bachelor's degree and her doctorate of chiropractic degree. In her free time, she enjoys cooking, baking, and spending time with her friends and family.",
  },
  {
    role: 'CHIROPRACTOR',
    name: 'TRACEY CURTIS D.C.',
    location: 'CROWN POINT LOCATION',
    img: BASE + 'Chiropractor-Crown-Point-IN-Tracey-Curtis-circle.jpg',
    bio: "Dr. Tracey has been a chiropractic patient nearly all of her life, as her family discovered the health benefits early on. She received her Bachelor's degree from George Fox University in Oregon and worked in education and social services prior to attending Palmer College of Chiropractic. When not with patients she enjoys the outdoors, live music and spending time with her family and pets.",
  },
  {
    role: 'CHIROPRACTIC ASSISTANT',
    name: 'MIRIAM ORTEGA',
    location: 'CROWN POINT LOCATION',
    img: BASE + 'Miriam-circle.jpg',
    bio: 'Miriam is the Rehab Therapist for the office in Crown Point. She graduated from Everest College as a Massage Therapist and has been working with Kauffman Chiropractic since August 2007. She loves working in wellness and truly believes in chiropractic care. Since she started treatment, she has been pain free! She loves working with patients and seeing them progress. Miriam also enjoys being part of the Kauffman Chiropractic Team.',
  },
  {
    role: 'CHIROPRACTIC ASSISTANT',
    name: 'REBECCA MIHALIK',
    location: 'CROWN POINT & MERRILLVILLE LOCATIONS',
    img: BASE + 'Rebecca-Mihalek-circle.jpg',
    bio: 'Rebecca has been working with Kauffman Chiropractic since May 2009 doing marketing and events. She currently helps both locations with the insurance and billing. She is new to chiropractic. Rebecca believes in chiropractic care since she became a client in February 2009. She has a bachelors in Business Management and has 11 years of experience of doing billing for multiple types of businesses.',
  },
  {
    role: 'CHIROPRACTIC ASSISTANT & MASSAGE THERAPIST',
    name: 'DIANNA MITROVIC',
    location: 'MERRILLVILLE LOCATION',
    img: BASE + 'Chiropractic-Merrillville-IN-Dianna-Mitrovic-Massage-Therapist-3-circle.jpg',
    bio: 'Dianna graduated from Everest College as a massage therapist. She has been at Kauffman Chiropractic as a chiropractic assistant since April of 2011. She gets adjusted to find out it works wonders. She used to get bad knee and neck pain but now has no pain!',
  },
  {
    role: 'CHIROPRACTIC ASSISTANT & MASSAGE THERAPIST',
    name: 'ASHLEY CHAJA',
    location: 'MERRILLVILLE LOCATION',
    img: BASE + 'Chiropractic-Merrillville-IN-Ashley-Meet-The-Team-circle.jpg',
    bio: 'Ashley graduated from Everest College in October 2010 as a Massage Therapist. She has been with the team at Kauffman Chiropractic since August 2011. Patient care is her #1 priority. She loves seeing patients get back to their daily activities pain free!',
  },
  {
    role: 'CHIROPRACTIC ASSISTANT',
    name: 'NICOLETTE STAVRAKIS',
    location: 'MERRILLVILLE LOCATION',
    img: BASE + 'Chiropractic-Merrillville-IN-Nicolette-Stavrakis-Chiropractic-Assistant-circle.jpg',
    bio: 'My name is Nicolette. I currently live in Portage, IN. I am a chiropractic assistant here at Kauffman Chiropractic. The thing I love most about working here is the amazing people you meet. Knowing that what we do truly helps them and helps them to stay well is even better!',
  },
]

function AccordionItem({ label, text }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-bold text-gray-700 hover:bg-gray-50 transition"
      >
        <span className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center text-gray-500 shrink-0">
          {open ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
        </span>
        {label}
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
          <p className="pt-3">{text}</p>
        </div>
      )}
    </div>
  )
}

export default function About() {
  return (
    <>
      {/* Header bar matching original dark style */}
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">MEET THE TEAM</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Main team list */}
          <div className="flex-1 min-w-0">
            {team.map((member, idx) => (
              <div key={member.name}>
                <div className="flex flex-col sm:flex-row gap-6 py-8 items-start">
                  {/* Circular photo */}
                  <div className="shrink-0 mx-auto sm:mx-0">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-44 h-44 rounded-full object-cover shadow"
                      onError={e => { e.target.style.display = 'none' }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{member.role}</p>
                    <h2 className="text-xl font-black text-gray-800 uppercase mb-1">{member.name}</h2>
                    {member.location && (
                      <p className="text-[#2eafc0] font-bold text-sm uppercase tracking-wide mb-3">{member.location}</p>
                    )}
                    {member.accordion ? (
                      <div className="space-y-2 mt-3">
                        {member.accordion.map(a => (
                          <AccordionItem key={a.label} label={a.label} text={a.text} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    )}
                  </div>
                </div>
                {idx < team.length - 1 && <hr className="border-gray-200" />}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:w-72 shrink-0 space-y-4">
            {/* Special Offer */}
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

            {/* Schedule */}
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

            {/* Our Locations */}
            <Link to="/locations" className="block bg-[#2eafc0] hover:bg-teal-500 text-white font-black text-center py-4 rounded uppercase tracking-wide transition">
              OUR LOCATIONS:
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
