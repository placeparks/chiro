import { Link } from 'react-router-dom'
import { FaComments, FaExternalLinkAlt } from 'react-icons/fa'

const review = {
  name: 'Lorraine G.',
  quote:
    '"Thanks to Dr. Kauffman and his wonderful staff, I no longer feel like an arthritic 80 year old woman. I came in with aches and pains all over. I was moving like a turtle. Now, I have more energy. I can sit and stand and walk and sleep without hip pain. Dr. Kauffman\'s treatments have worked wonders. He is knowledgeable, professional, and really cares about his patients."',
}

const locations = [
  {
    marker: '1',
    name: 'Kauffman Chiropractic - Merrillville',
    street: '100 West 84th Drive',
    cityStateZip: 'Merrillville, IN 46410',
    phone: '(219) 736-7363',
    tel: '2197367363',
  },
  {
    marker: '2',
    name: 'Kauffman Chiropractic - Crown Point',
    street: '7620 East 109th Avenue',
    cityStateZip: 'Crown Point, IN 46307',
    phone: '(219) 662-9855',
    tel: '2196629855',
  },
]

export default function ReviewsLocations() {
  return (
    <>
      <section className="kc-reviews-section">
        <div className="kc-reviews-section__header">
          <h2>Trusted Chiropractor: Read Our Reviews</h2>
        </div>

        <div className="kc-reviews-section__offer">
          <Link to="/patients">
            <FaExternalLinkAlt />
            <span>New Patient Special Offer</span>
            <span aria-hidden="true" className="kc-double-arrow">&raquo;</span>
          </Link>
        </div>

        <div className="kc-reviews-section__body">
          <div className="kc-review-card">
            <div className="kc-review-card__icon" aria-hidden="true">
              <FaComments />
            </div>
            <h3>{review.name}</h3>
            <p>{review.quote}</p>
          </div>
        </div>
      </section>

      <section className="kc-home-locations">
        <div className="kc-home-locations__details">
          {locations.map((location) => (
            <div key={location.name} className="kc-location-entry">
              <div className="kc-location-entry__marker">{location.marker}</div>
              <div>
                <h2>{location.name}</h2>
                <p>{location.street}</p>
                <p>{location.cityStateZip}</p>
                <a href={`tel:${location.tel}`}>{location.phone}</a>
              </div>
            </div>
          ))}
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
