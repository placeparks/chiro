import { Link } from 'react-router-dom'
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaClock,
  FaExternalLinkAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import girlBackground from '../assets/girl.jpg'
import footerGirl from '../assets/footer-girl2.png'
import crownPointHero2 from '../assets/hero2.png'
import crownPointHero3 from '../assets/heo3.png'
import heroGirl2 from '../assets/hero-girl.png'

const trustedBadge =
  'https://www.chiro.inceptionimages.com/wp-content/uploads/2018/04/trustedchiropractor42818.png'
const verifiedBadge =
  'https://www.chiro.inceptionimages.com/wp-content/uploads/2018/05/inception-review-badge.png'
const facebookUrl = 'https://www.facebook.com/KauffmanChirosMerrillville'
const twitterUrl = 'https://x.com/kauffmanchirop1'
const youtubeUrl = 'https://www.youtube.com/channel/UCzkV2scj41yS59Y8PeTh7lw/videos'

const locationDetails = {
  merrillville: {
    city: 'Merrillville',
    state: 'IN',
    officeName: 'Kauffman Chiropractic - Merrillville',
    heading: 'Chiropractor Merrillville IN',
    addressLine1: '100 West 84th Drive',
    addressLine2: 'Merrillville, IN 46410',
    phone: '(219) 736-7363',
    tel: '2197367363',
    mapTitle: 'Kauffman Chiropractic Merrillville Map',
    mapQuery: 'Kauffman Chiropractic Merrillville 100 West 84th Drive Merrillville IN 46410',
  },
  crownPoint: {
    city: 'Crown Point',
    state: 'IN',
    officeName: 'Kauffman Chiropractic - Crown Point',
    heading: 'Chiropractor Crown Point IN',
    addressLine1: '11055 Broadway, Suite B',
    addressLine2: 'Crown Point, IN 46307',
    phone: '(219) 662-9855',
    tel: '2196629855',
    mapTitle: 'Kauffman Chiropractic Crown Point Map',
    mapQuery: 'Kauffman Chiropractic Crown Point 11055 Broadway Suite B Crown Point IN 46307',
  },
}

const merrillvilleHeroImages = [
  girlBackground,
  heroGirl2,
  'https://www.kauffmanchiros.com/wp-content/uploads/2023/10/Chiropractor-Crown-Point-IN-Robert-Danielle-Kauffman-With-Team-HP-SLIDER.webp',
]

const crownPointHeroImages = [
  'https://www.kauffmanchiros.com/wp-content/uploads/2023/10/Chiropractor-Crown-Point-IN-Robert-Danielle-Kauffman-With-Team-HP-SLIDER.webp',
  crownPointHero2,
  crownPointHero3,
]

const commonSymptoms = [
  { label: 'Headaches', path: '/symptoms/headaches' },
  { label: 'Neck Pain', path: '/symptoms/neck-pain' },
  { label: 'Whiplash', path: '/symptoms/whiplash' },
  { label: 'Back Pain', path: '/symptoms/back-pain' },
  { label: 'Carpal Tunnel', path: '/symptoms/carpal-tunnel' },
  { label: 'Sciatica', path: '/symptoms/sciatica' },
]

const officeHours = [
  ['Monday', '8:00am - 12:00pm', '2:00pm - 6:00pm'],
  ['Tuesday', '8:00am - 12:00pm', '2:00pm - 6:00pm'],
  ['Wednesday', '8:00am - 12:00pm', '2:00pm - 6:00pm'],
  ['Thursday', '8:00am - 12:00pm', '2:00pm - 6:00pm'],
  ['Friday', '8:00am - 12:00pm', ''],
  ['Saturday', 'Closed', ''],
]

export default function LocationDetail({ locationKey = 'merrillville' }) {
  const location = locationDetails[locationKey] ?? locationDetails.merrillville
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`
  const heroImages = locationKey === 'crownPoint' ? crownPointHeroImages : merrillvilleHeroImages

  return (
    <>
      <section className="kc-location-hero">
        <div className="kc-location-hero__slides" aria-hidden="true">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className={`kc-location-hero__slide kc-location-hero__slide--${index + 1}`}
            />
          ))}
        </div>

        <div className="kc-location-hero__shade" />

        <div className="kc-location-hero__inner">
          <div className="kc-location-hero__message">
            <h1>A New Approach To Healthcare</h1>
            <p>
              Celebrating 30 years in practice! At {location.officeName},
              we address the cause of your pain, not just the symptom. Call today!
            </p>
          </div>

          <div className="kc-location-hero__tiles">
            <Link to="/about" className="kc-hero-tile">
              <img
                src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/Danni-White-Box-232x232-meet-the-team.png"
                alt="Meet The Team"
              />
            </Link>
            <Link to="/patients" className="kc-hero-special">
              <img
                src="https://www.chiro.inceptionimages.com/wp-content/uploads/2018/08/Danni-Home-Special-Offery.png"
                alt="New Patient Special"
              />
            </Link>
            <Link to="/testimonials" className="kc-hero-tile">
              <img
                src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/Danni-White-Box-232x232-testimonials.png"
                alt="Testimonials"
              />
            </Link>
          </div>

          <img src={verifiedBadge} alt="Trusted Chiropractor Verified" className="kc-location-verified" />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1325px] gap-12 px-5 py-10 md:grid-cols-[350px_1fr_210px] md:gap-16 md:py-14">
          <aside className="text-center">
            <img
              src="https://www.kauffmanchiros.com/wp-content/uploads/bb-plugin/cache/Robert-and-Danielle-Kauffman-circle.jpg"
              alt="Drs. Robert and Danielle Kauffman"
              className="mx-auto mb-7 h-auto w-[310px] rounded-full"
            />
            <h2 className="mb-3 text-[32px] font-black uppercase tracking-tight text-[#333]">Meet Our Team</h2>
            <p className="mx-auto mb-5 max-w-[270px] text-[24px] leading-normal text-[#555]">
              Drs. Robert & Danielle Kauffman
            </p>
            <div className="mx-auto mb-5 h-px max-w-[300px] bg-gray-300" />
            <p className="mx-auto mb-10 max-w-[300px] text-[24px] leading-9 text-[#555]">
              We are excited that you are considering our office for Chiropractic Care.
            </p>
            <Link
              to="/scheduler"
              className="block bg-[#f8a500] px-5 py-5 text-[27px] font-black uppercase leading-none text-black transition hover:bg-[#e69600]"
            >
              Schedule an Appointment at Our {location.city} Location
            </Link>
          </aside>

          <article>
            <h1 className="mb-6 text-[34px] font-black uppercase leading-tight tracking-tight text-[#333] md:text-[42px] md:leading-none">
              {location.heading}
            </h1>
            <p className="mb-7 text-[18px] leading-8 text-[#555] md:text-[22px] md:leading-9">
              Choosing a health care professional in {location.city}, {location.state} is an important decision, and at
              {location.officeName} we are dedicated to helping you make the most well
              informed decision as possible.
            </p>
            <p className="mb-10 text-[18px] leading-8 text-[#555] md:text-[22px] md:leading-9">
              From explaining how our {location.city} Chiropractors can assist you in alleviating your pain
              to understanding what we do, our goal is to provide you with as much detailed information
              as possible so that you can feel confident in choosing {location.officeName}.
            </p>

            <div className="mb-7 h-px bg-gray-300" />

            <h2 className="mb-1 text-[27px] font-black uppercase leading-tight text-[#333] md:text-[31px]">
              {location.officeName}
            </h2>
            <p className="mb-7 text-[18px] leading-8 text-[#555] md:text-[22px] md:leading-9">
              Chiropractic treatment can have a variety of positive benefits for a wide range of physical
              ailments and conditions, from chronic pain to general discomfort. Many patients who come to
              us simply want help relaxing their muscles and restoring balance to their body.
            </p>
            <p className="text-[18px] leading-8 text-[#555] md:text-[22px] md:leading-9">
              By properly aligning the spine, the human body can meet the high levels of activity that our
              busy lives require, and can work to properly self-heal through alignment.
            </p>
          </article>

          <aside className="hidden md:block">
            <img src={verifiedBadge} alt="Trusted Chiropractor Verified" className="mt-[300px] w-[210px]" />
          </aside>
        </div>
      </section>

      <section className="kc-symptom-showcase">
        <div className="kc-symptom-showcase__inner">
          <h2>Common Symptoms Chiropractic May Help...</h2>
          <div className="kc-symptom-showcase__rule" aria-hidden="true"><span /></div>
          <div className="kc-symptom-showcase__grid">
            <div className="kc-symptom-showcase__list">
              {commonSymptoms.slice(0, 3).map((item) => <SymptomLink key={item.path} {...item} />)}
            </div>
            <img
              src="https://www.chiro.inceptionimages.com/wp-content/uploads/2018/05/cut-out-spine-large.png"
              alt=""
              className="kc-symptom-showcase__spine"
              aria-hidden="true"
            />
            <div className="kc-symptom-showcase__list">
              {commonSymptoms.slice(3).map((item) => <SymptomLink key={item.path} {...item} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1325px] gap-12 px-5 py-10 md:grid-cols-[350px_1fr_210px] md:gap-14 md:py-16">
          <aside className="text-center text-[#555]">
            <FaClock className="mx-auto mb-7 text-[47px] text-[#333]" />
            <h2 className="mb-7 text-[31px] font-medium uppercase tracking-wide">Office Hours</h2>
            <div className="mx-auto max-w-[200px]">
              {officeHours.map(([day, first, second]) => (
                <div key={day} className="border-b border-gray-300 py-2 text-[18px] leading-7">
                  <strong className="block text-[#444]">{day}</strong>
                  <span className="block">{first}</span>
                  {second && <span className="block">{second}</span>}
                </div>
              ))}
            </div>
          </aside>

          <article className="min-w-0 md:border-l md:border-gray-300 md:pl-12">
            <InfoBlock title="Chiropractic Scientifically Explained">
              <p>
                A concise scientific explanation of chiropractic is that adjustments directly affect
                musculoskeletal structures by reducing pain and increasing joint motion.
              </p>
              <p>
                Musculoskeletal structures include ligaments, muscles, joints, joint capsules, and
                surrounding myofascial tissues. Aside from this direct benefit, the autonomic nervous
                system is indirectly affected by the down regulation of the sympathetic nervous system.
              </p>
            </InfoBlock>
            <InfoBlock title="Chiropractic Care And Your Health">
              <p>
                Chiropractic is a profession within the health care field that deals with the
                neuromusculoskeletal system of the human body. A chiropractor will diagnose, as well as
                help prevent, injuries and disorders of the nerves, muscles, and bones.
              </p>
              <p>
                Our patients receive a thorough consultation including history and examination of their
                major complaint. After considering possible causes, a diagnosis is established and a
                treatment plan is created.
              </p>
            </InfoBlock>
          </article>

          <aside className="hidden md:block">
            <img src={verifiedBadge} alt="Trusted Chiropractor Verified" className="mt-[250px] w-[210px]" />
          </aside>
        </div>
      </section>

      <section className="kc-location-reviews">
        <h2>Trusted Chiropractor: Read Our Reviews</h2>
        <Link to="/patients">
          <FaExternalLinkAlt />
          <span>New Patient Special Offer</span>
        </Link>
      </section>

      <section className="kc-location-map" style={{ '--kc-map-bg': `url(${footerGirl})` }}>
        <div className="kc-location-map__inner">
          <div className="kc-location-map__photo" aria-hidden="true" />

          <div className="kc-location-map__content">
            <iframe
              title={location.mapTitle}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_310px] md:items-center">
              <div className="text-white">
                <h2 className="mb-2 text-[27px] font-black">{location.officeName}</h2>
                <p className="text-[21px] leading-8">{location.addressLine1}</p>
                <p className="text-[21px] leading-8">{location.addressLine2}</p>
                <a href={`tel:${location.tel}`} className="text-[21px] font-black text-white hover:text-[#f8a500]">
                  {location.phone}
                </a>
                <div className="mt-7 flex gap-3">
                  <SocialLink href={facebookUrl} label={`${location.officeName} on Facebook`}>
                    <FaFacebookF />
                  </SocialLink>
                  <SocialLink href={twitterUrl} label="Kauffman Chiropractic on X">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href={youtubeUrl} label="Kauffman Chiropractic on YouTube">
                    <FaYoutube />
                  </SocialLink>
                </div>
              </div>

              <img src={trustedBadge} alt="Trusted Chiropractor" className="w-full max-w-[310px]" />
            </div>
          </div>

          <img src={verifiedBadge} alt="Trusted Chiropractor Verified" className="kc-location-map__badge" />
        </div>
      </section>
    </>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#355a9c] transition hover:bg-[#f8a500] hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  )
}

function SymptomLink({ label, path }) {
  return (
    <Link to={path} className="kc-symptom-link">
      <span>{label}</span>
      <span className="kc-symptom-link__arrow" aria-hidden="true">
        <FaArrowRight />
      </span>
    </Link>
  )
}

function InfoBlock({ title, children }) {
  return (
    <section className="relative mb-10 pl-10 last:mb-0 md:pl-14">
      <FaAngleDoubleRight className="absolute left-0 top-1 text-[26px] text-[#333] md:text-[33px]" />
      <h2 className="mb-2 text-[27px] font-black uppercase leading-tight text-[#333] md:mb-1 md:text-[31px]">{title}</h2>
      <div className="space-y-5 text-[18px] leading-8 text-[#333] md:text-[21px] md:leading-9">{children}</div>
    </section>
  )
}
