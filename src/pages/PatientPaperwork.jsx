import { Link } from 'react-router-dom'
import { FaFilePdf, FaPhone } from 'react-icons/fa'
import ReviewsLocations from '../components/ReviewsLocations'

const forms = [
  {
    title: 'Welcome Form',
    href: 'https://www.kauffmanchiros.com/wp-content/uploads/2019/12/casehistoryform.pdf',
  },
  {
    title: 'Pain Form',
    href: 'https://www.kauffmanchiros.com/wp-content/uploads/2019/12/Pain-Form.pdf',
  },
  {
    title: 'Privacy Form',
    href: 'https://www.kauffmanchiros.com/wp-content/uploads/2019/12/Privacy-Form.pdf',
  },
  {
    title: 'Patient Consent Form',
    href: 'https://www.kauffmanchiros.com/wp-content/uploads/2019/12/Patient-Consent-Form.pdf',
  },
  {
    title: "Doctor's Lien Form",
    href: 'https://www.kauffmanchiros.com/wp-content/uploads/2019/12/doctors-lien.pdf',
  },
]

const insuranceColumns = [
  [
    'Aetna',
    'Anthem / Blue Cross Blue Shield',
    'Blue Cross Blue Shield of Illinois',
    'BC EmergIS',
    'Beech Street',
    'CCN',
    'Cigna',
    'First Health Network',
    'HFN',
  ],
  [
    'Humana',
    'Indiana Health Network (IHN)',
    'Multiplan',
    'Private Health Care Systems (PHCS)',
    'Sagamore',
    'Unicare',
    'United Health Care',
    'Medicare',
    'Indiana Medicaid and many more!',
  ],
]

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

export default function PatientPaperwork() {
  return (
    <>
      <section className="bg-gray-100 border-b py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-black text-gray-800 tracking-tight uppercase">
            New Patient Paperwork
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            <p className="text-gray-700 leading-relaxed mb-4">
              Kauffman Chiropractic offers our patient form(s) online so they can be completed in the
              convenience of your own home or office.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mb-10 ml-2">
              <li>All forms are PDF files. You will need Adobe Reader to view them.</li>
              <li>
                If you do not already have Adobe Reader installed on your computer,{' '}
                <a
                  href="https://get.adobe.com/reader/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#2eafc0] font-bold hover:underline"
                >
                  Click Here
                </a>{' '}
                to download.
              </li>
              <li>Download the necessary form(s), print them out and fill in the required information.</li>
              <li>Bring the necessary form(s) to your appointment.</li>
            </ul>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight mb-6">
                Kauffman Chiropractic is a preferred provider for the following insurance companies:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                {insuranceColumns.map((items) => (
                  <ul key={items[0]} className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {forms.map((form) => (
                <div key={form.title} className="text-center">
                  <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-gray-800">
                    {form.title}
                  </h3>
                  <a
                    href={form.href}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="inline-flex w-full items-center justify-center gap-3 bg-[#34a1b2] px-6 py-4 text-[17px] font-bold uppercase leading-none text-white transition hover:bg-[#238494]"
                  >
                    <FaFilePdf className="text-[24px]" />
                    <span>Click To Download</span>
                  </a>
                </div>
              ))}
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
