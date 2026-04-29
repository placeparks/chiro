import { Link } from 'react-router-dom'
import { FaArrowRight, FaComments, FaExternalLinkAlt } from 'react-icons/fa'
import girlBackground from '../assets/girl.jpg'

const commonSymptoms = [
  { label: 'Headaches', path: '/symptoms/headaches' },
  { label: 'Neck Pain', path: '/symptoms/neck-pain' },
  { label: 'Whiplash', path: '/symptoms/whiplash' },
  { label: 'Back Pain', path: '/symptoms/back-pain' },
  { label: 'Carpal Tunnel', path: '/symptoms/carpal-tunnel' },
  { label: 'Sciatica', path: '/symptoms/sciatica' },
]

export default function Home() {
  return (
    <>
      <section className="kc-home-hero">
        <div className="kc-home-hero__media">
          <img
            src="https://www.kauffmanchiros.com/wp-content/uploads/2023/10/Chiropractor-Crown-Point-IN-Robert-Danielle-Kauffman-With-Team-HP-SLIDER.webp"
            alt="Kauffman Chiropractic Team"
            className="kc-home-hero__image"
          />
        </div>

        <div className="kc-home-hero__content">
          <div className="kc-home-hero__message">
            <h1>A New Approach To Healthcare</h1>
            <p>
              Celebrating 30 years in practice! At Kauffman Chiropractic, we address
              the cause of your pain, not just the symptom. Call today!
            </p>
          </div>

          <div className="kc-home-hero__tiles">
            <Link to="/about" className="kc-hero-tile">
              <img
                src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/Danni-White-Box-232x232-meet-the-team.png"
                alt="Meet The Team"
              />
            </Link>
            <Link to="/patients" className="kc-hero-special">
              <img
                src="https://www.chiro.inceptionimages.com/wp-content/uploads/2018/08/Danni-Home-Special-Offery.png"
                alt="New Patient Special - Click Here"
              />
            </Link>
            <Link to="/testimonials" className="kc-hero-tile">
              <img
                src="https://www.chiro.inceptionimages.com/wp-content/uploads/2017/04/Danni-White-Box-232x232-testimonials.png"
                alt="Testimonials"
              />
            </Link>
          </div>

          <img
            src="https://www.chiro.inceptionimages.com/wp-content/uploads/2018/05/inception-review-badge.png"
            alt="Trusted Chiropractor Verified"
            className="kc-trust-badge"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[340px_1fr] md:py-20">
          <aside className="text-center">
            <img
              src="https://www.kauffmanchiros.com/wp-content/uploads/bb-plugin/cache/Robert-and-Danielle-Kauffman-circle.jpg"
              alt="Drs. Robert and Danielle Kauffman"
              className="mx-auto mb-7 h-auto w-[270px] rounded-full"
            />
            <h2 className="mb-3 text-2xl font-black uppercase tracking-tight text-gray-800">Meet Our Team</h2>
            <p className="mx-auto mb-5 max-w-[250px] text-xl leading-relaxed text-gray-600">Drs. Robert & Danielle Kauffman</p>
            <div className="mx-auto mb-5 h-px max-w-[300px] bg-gray-300" />
            <p className="mx-auto mb-8 max-w-[260px] text-xl leading-relaxed text-gray-600">
              We are excited that you are considering our office for Chiropractic Care.
            </p>
            <p className="mb-5 text-lg font-bold leading-relaxed text-gray-700">
              Schedule an appointment at one of our locations below:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/locations" className="bg-[#f0a500] px-3 py-7 text-center text-sm font-black uppercase leading-tight text-white transition hover:bg-yellow-500">
                Crown Point Location
              </Link>
              <Link to="/locations" className="bg-[#f0a500] px-3 py-7 text-center text-sm font-black uppercase leading-tight text-white transition hover:bg-yellow-500">
                Merrillville Location
              </Link>
            </div>
          </aside>

          <div className="relative">
            <h1 className="mb-6 text-4xl font-black uppercase tracking-tight text-gray-800">
              Welcome to Kauffman Chiropractic
            </h1>
            <p className="mb-5 text-xl leading-relaxed text-gray-600">
              On behalf of the doctors of Kauffman Chiropractic, we would like to welcome you to our office. We have been helping the people of our community get well since 1989. We look forward to helping you gain a basic understanding of how our Merrillville chiropractors and also our Crown Point chiropractors help you and your family.
            </p>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              Kauffman Chiropractic has two convenient locations to serve you, in Merrillville or Crown Point. Stop your suffering and start your Chiropractic Care today. Honesty, Integrity, and Professionalism have earned Kauffman Chiropractic its reputation today.
            </p>

            <div className="my-8 h-px bg-gray-200" />

            <h2 className="mb-2 text-2xl font-black uppercase tracking-tight text-gray-800">Chiropractic May Be The Answer</h2>
            <p className="mb-5 text-xl leading-relaxed text-gray-600">
              There are marshmallow like pads between your vertebrae called intervertebral discs. The discs are very tough, but can be damaged. The discs provide for movement in the spine. When discs start to degenerate the spine can become less mobile, and may even start to fuse together.
            </p>
            <p className="mb-5 text-xl leading-relaxed text-gray-600">
              The discs also provide space between the vertebrae. This is important because nerves pass through the spaces that are created by the discs. Discs also act as shock absorbers. When movement occurs, the jelly solution inside the disc has the ability to expand and compress.
            </p>
            <p className="text-xl leading-relaxed text-gray-600">
              If you are struggling with back or neck pain, chiropractic care may be the best treatment option for you. Chiropractic is one of the least invasive and safest options for conditions of the spine and discs.
            </p>
          </div>
        </div>
      </section>

      <section className="kc-symptom-showcase">
        <div className="kc-symptom-showcase__inner">
          <h2>Common Symptoms Chiropractic May Help...</h2>

          <div className="kc-symptom-showcase__rule" aria-hidden="true">
            <span />
          </div>

          <div className="kc-symptom-showcase__grid">
            <div className="kc-symptom-showcase__list">
              {commonSymptoms.slice(0, 3).map((item) => (
                <Link to={item.path} className="kc-symptom-link" key={item.path}>
                  <span>{item.label}</span>
                  <span className="kc-symptom-link__arrow" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </Link>
              ))}
            </div>

            <img
              src="https://www.chiro.inceptionimages.com/wp-content/uploads/2018/05/cut-out-spine-large.png"
              alt=""
              className="kc-symptom-showcase__spine"
              aria-hidden="true"
            />

            <div className="kc-symptom-showcase__list">
              {commonSymptoms.slice(3).map((item) => (
                <Link to={item.path} className="kc-symptom-link" key={item.path}>
                  <span>{item.label}</span>
                  <span className="kc-symptom-link__arrow" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="kc-health-difference"
        style={{ '--kc-health-bg': `url(${girlBackground})` }}
      >
        <div className="kc-health-difference__inner">
          <h2>Working With Kauffman Chiropractic Will Make A Difference In Your Health.</h2>

          <div className="kc-health-difference__columns">
            <article>
              <h3>The Science of Chiropractic Care</h3>
              <p>
                Patients who seek out chiropractic care do so for a variety of reasons, they are seeking help with alleviating back or leg pain caused by an injury or trauma, avoiding and reducing headaches and migraines, reducing the symptoms of carpal tunnel, and a variety of other issues.
              </p>
              <p>
                By aligning the spine and correcting issues with posture, balance, and correcting their proprioception, which affects issues within the inner ear and affects our spatial awareness, chiropractors can help reduce joint pain and soreness in the surrounding muscle and tissue.
              </p>
              <p>
                Because chiropractic care is non-invasive, it is often seen as a preferred alternative to medication or invasive surgery because it can help many patients find solace from their joint and muscle pain.
              </p>
            </article>

            <article>
              <h3>What Is Chiropractic Care?</h3>
              <p>
                Health care professionals who practice chiropractic care focus on the neuromusculoskeletal system of the body, and work to help patients eliminate pain, treat and prevent injuries and disorders of the muscles, bones, and nerves.
              </p>
              <p>
                The primary objective of alleviating these issues is that by correcting nerve interference, by means of adjusting the spine, the body is able to heal itself without invasive procedures and drugs.
              </p>
              <p>
                Each patient's case is different, as our spines are all shaped differently, and our bodies react to various outside stimuli in a variety of ways so it's important to understand that every chiropractic treatment is designed specifically for each patient.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="kc-reviews-section">
        <div className="kc-reviews-section__header">
          <h2>Trusted Chiropractor: Read Our Reviews</h2>
        </div>

        <div className="kc-reviews-section__offer">
          <Link to="/patients">
            <FaExternalLinkAlt />
            <span>New Patient Special Offer</span>
            <FaAngleDoubleRightIcon />
          </Link>
        </div>

        <div className="kc-reviews-section__body">
          <div className="kc-review-card">
            <div className="kc-review-card__icon" aria-hidden="true">
              <FaComments />
            </div>
            <h3>Lorraine G.</h3>
            <p>
              "Thanks to Dr. Kauffman and his wonderful staff, I no longer feel like an arthritic 80 year old woman. I came in with aches and pains all over. I was moving like a turtle. Now, I have more energy. I can sit and stand and walk and sleep without hip pain. Dr. Kauffman's treatments have worked wonders. He is knowledgeable, professional, and really cares about his patients."
            </p>
          </div>
        </div>
      </section>

      <section className="kc-home-locations">
        <div className="kc-home-locations__details">
          <div className="kc-location-entry">
            <div className="kc-location-entry__marker">1</div>
            <div>
              <h2>Kauffman Chiropractic - Merrillville</h2>
              <p>100 West 84th Drive</p>
              <p>Merrillville, IN 46410</p>
              <a href="tel:2197367363">(219) 736-7363</a>
            </div>
          </div>

          <div className="kc-location-entry">
            <div className="kc-location-entry__marker">2</div>
            <div>
              <h2>Kauffman Chiropractic - Crown Point</h2>
              <p>7620 East 109th Avenue</p>
              <p>Crown Point, IN 46307</p>
              <a href="tel:2196629855">(219) 662-9855</a>
            </div>
          </div>
        </div>

        <div className="kc-home-locations__map">
          <iframe
            title="Kauffman Chiropractic Locations"
            src="https://www.google.com/maps?q=Kauffman%20Chiropractic%20Merrillville%20IN%20Kauffman%20Chiropractic%20Crown%20Point%20IN&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </>
  )
}

function FaAngleDoubleRightIcon() {
  return <span aria-hidden="true" className="kc-double-arrow">»</span>
}
