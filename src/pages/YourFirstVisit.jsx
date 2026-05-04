import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'
import ReviewsLocations from '../components/ReviewsLocations'

const sidebarLocations = [
  {
    name: 'Merrillville',
    phone: '(219) 736-7363',
    tel: '2197367363',
    path: '/merrillville',
  },
  {
    name: 'Crown Point',
    phone: '(219) 662-9855',
    tel: '2196629855',
    path: '/crown-point',
  },
]

function Section({ title, children, image, alt }) {
  return (
    <div className="border-t border-gray-200 pt-8 mb-10">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight mb-4">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{children}</p>
        </div>
        {image && (
          <img
            src={image}
            alt={alt}
            className="w-56 h-56 rounded-full object-cover shadow shrink-0"
          />
        )}
      </div>
    </div>
  )
}

export default function YourFirstVisit() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">Your First Visit</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <img
              src="https://www.kauffmanchiros.com/wp-content/uploads/2019/12/chiropractor-education-spine.jpg"
              alt="Chiropractic Merrillville IN Chiropractor Education Patient"
              className="w-full rounded-lg shadow mb-8"
            />

            <p className="text-gray-700 leading-relaxed mb-10">
              If you are interested in receiving chiropractic care, our experienced team is excited to help you achieve your wellness goals. If you have any questions about our{' '}
              <Link to="/merrillville" className="text-[#2eafc0] font-bold hover:underline">Merrillville</Link> or{' '}
              <Link to="/crown-point" className="text-[#2eafc0] font-bold hover:underline">Crown Point</Link>{' '}
              locations, or would like to learn more about chiropractic care at Kauffman Chiropractic, our experienced chiropractic team at Kauffman Chiropractic is here to help.
            </p>

            <Section
              title="Consultation"
              image="https://www.kauffmanchiros.com/wp-content/uploads/bb-plugin/cache/Chiropractic-Merrillville-IN-Receptionist-Desk-circle-5f035ec8e682b9e68b6b8ec7378f9219-5df7ce63a5a2e.jpg"
              alt="Receptionist Desk"
            >
              On your first visit to our office, you will be greeted by our front desk with a smile. You will be asked to fill out our required{' '}
              <Link to="/patients/paperwork" className="text-[#2eafc0] font-bold hover:underline">forms</Link> which will help us gain information about your condition. Our doctors will talk with you about your condition. They will determine if chiropractic care can be a benefit to you. If the doctors cannot help you, they will refer you to a doctor who may be able to help.
            </Section>

            <Section
              title="Examination"
              image="https://www.kauffmanchiros.com/wp-content/uploads/bb-plugin/cache/try-circle-c8c6847c5a521ae77c9729c91de726c5-5df7ce8cd0b48.jpg"
              alt="Examination"
            >
              After a complete consultation, the doctor will perform a thorough chiropractic, neurologic, orthopedic and physical examination. This enables the doctor to gain valuable information regarding your condition. At this point, the doctor will determine if x-rays or other diagnostic tests are necessary.
            </Section>

            <Section
              title="X-Ray"
              image="https://www.kauffmanchiros.com/wp-content/uploads/bb-plugin/cache/Chiropractor-Crown-Point-IN-Danielle-Kauffman-with-Patient-circle-333343eec890d46dfc6d9697da7f0193-5df7ceeed897b.jpg"
              alt="Danielle Kauffman with Patient"
            >
              X-ray is generally required to obtain a complete evaluation of a patient, and for your convenience, are taken in our office. X-rays are performed standing to determine the structure and alignment of the spine in weight bearing. Rest assured, our x-ray equipment is state-of-the-art in imaging.
            </Section>

            <div className="border-t border-gray-200 pt-8 mb-10">
              <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight mb-4">Report of Findings</h2>
              <p className="text-gray-700 leading-relaxed">
                Once we have gathered all your information from the consultation, examination, and x-ray, you will be scheduled for a follow up appointment. The doctor will thoroughly review all the findings to determine treatment recommendations, and will discuss them with you on your next visit.
              </p>
            </div>

            <Section
              title="Treatment"
              image="https://www.kauffmanchiros.com/wp-content/uploads/bb-plugin/cache/Chiropractic-Crown-Point-IN-Exersice-Ball-circle-c2914f33c67929086f58dea16dbc7acf-5df7cf50026ba.jpg"
              alt="Exercise Ball Treatment"
            >
              Your treatment plan will be designed for your individual needs. Our gentle adjustments effectively eliminate your pain and restore alignment and flexibility to your spine. We also incorporate physical therapy and rehabilitative exercises to strengthen your spine and to prevent future recurrences.
            </Section>

            <div className="border-t border-gray-200 pt-8 mt-4">
              <a
                href="https://visitor.r20.constantcontact.com/manage/optin/ea?v=001MV7eEgn-X0pQhC_V11Jj1tYabum-_sxq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#2eafc0] text-[#2eafc0] hover:bg-[#2eafc0] hover:text-white font-bold uppercase tracking-wide px-8 py-4 rounded transition"
              >
                Click Here To Join Our Mailing List
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[340px] shrink-0">
            <Link to="/special" className="mx-auto mb-12 block w-full max-w-[313px]">
              <img
                src="http://chiro.inceptionimages.com/wp-content/uploads/2018/12/Special-Offer_green.png"
                alt="New patient special offer"
                className="w-full"
              />
            </Link>

            <div className="mb-10 text-center">
              <p className="mx-auto mb-5 max-w-[330px] text-[17px] font-bold leading-7 text-[#333]">
                Schedule an appointment at one of our locations below:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/scheduler/crown-point"
                  className="flex min-h-[130px] items-center justify-center bg-[#f8a500] px-3 text-center text-[16px] font-bold uppercase leading-tight text-black transition hover:bg-[#e69600]"
                >
                  Crown Point Location
                </Link>
                <Link
                  to="/scheduler/merrillville"
                  className="flex min-h-[130px] items-center justify-center bg-[#f8a500] px-3 text-center text-[16px] font-bold uppercase leading-tight text-black transition hover:bg-[#e69600]"
                >
                  Merrillville Location
                </Link>
              </div>
            </div>

            <div className="mb-11 bg-[#34a1b2] px-8 py-8 text-center text-[20px] font-bold uppercase text-white">
              Our Locations:
            </div>

            {sidebarLocations.map((location) => (
              <div
                key={location.name}
                className="mx-auto mb-12 max-w-[310px] border-b border-[#d0d0d0] pb-12 text-center last:mb-0 last:border-b-0"
              >
                <h3 className="mb-1 text-[22px] font-bold leading-none text-[#333]">{location.name}</h3>
                <a
                  href={`tel:${location.tel}`}
                  className="text-[18px] font-bold leading-none text-[#2f9db2] hover:text-[#217f8f]"
                >
                  {location.phone}
                </a>
                <Link
                  to={location.path}
                  className="mt-8 inline-flex min-w-[230px] items-center justify-center border-2 border-[#2f9db2] px-5 py-3 text-[15px] font-bold uppercase text-[#2f9db2] transition hover:bg-[#2f9db2] hover:text-white"
                >
                  <FaPhone className="mr-2 text-[15px]" />
                  Location Details
                </Link>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <ReviewsLocations />
    </>
  )
}
