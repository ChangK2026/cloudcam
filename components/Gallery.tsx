import Image from 'next/image';

const PHOTOS = [
  { src: '/gallery/truck-01.jpg',   alt: 'Side camera mounted on Scania truck A-pillar',       category: 'trucks',      label: 'Heavy Truck' },
  { src: '/gallery/bus-01.jpg',     alt: 'CCTV cameras installed along bus interior ceiling',   category: 'buses',       label: 'Bus Interior' },
  { src: '/gallery/truck-02.jpg',   alt: 'Camera mounted on white Scania cab exterior',         category: 'trucks',      label: 'Heavy Truck' },
  { src: '/gallery/bus-02.jpg',     alt: 'Dome camera installed on public bus ceiling',         category: 'buses',       label: 'Bus Interior' },
  { src: '/gallery/truck-03.jpg',   alt: 'Scania truck with CCTV system installed in workshop', category: 'trucks',      label: 'Heavy Truck' },
  { src: '/gallery/special-01.jpg', alt: 'Camera mounted on coach door frame',                  category: 'specialised', label: 'Specialised' },
  { src: '/gallery/truck-04.jpg',   alt: 'Camera mounted on truck cab corner',                  category: 'trucks',      label: 'Heavy Truck' },
  { src: '/gallery/bus-03.jpg',     alt: 'Mini camera installed inside bus near door',          category: 'buses',       label: 'Bus Interior' },
  { src: '/gallery/truck-05.jpg',   alt: 'MAN TGX truck with multi-camera system installed',   category: 'trucks',      label: 'Heavy Truck' },
  { src: '/gallery/truck-06.jpg',   alt: 'Camera installed on MAN truck A-pillar',             category: 'trucks',      label: 'Heavy Truck' },
  { src: '/gallery/special-02.jpg', alt: 'CCTV cameras installed on crane truck',              category: 'specialised', label: 'Specialised' },
  { src: '/gallery/truck-07.jpg',   alt: 'Front camera bracket installation on Scania G500',   category: 'trucks',      label: 'Heavy Truck' },
];

const FILTERS = [
  { key: 'all',         id: 'gf-all',         label: 'All Vehicles' },
  { key: 'trucks',      id: 'gf-trucks',      label: 'Trucks' },
  { key: 'buses',       id: 'gf-buses',       label: 'Buses' },
  { key: 'specialised', id: 'gf-specialised', label: 'Specialised' },
];

export default function Gallery() {
  return (
    <section className="gallery section" id="installations">

      {/* Hidden radio inputs — CSS-only filter state */}
      {FILTERS.map(f => (
        <input
          key={f.key}
          type="radio"
          name="galfilter"
          id={f.id}
          className="gf-radio"
          defaultChecked={f.key === 'all'}
        />
      ))}

      <div className="container">
        <div className="section-header">
          <div className="section-tag">Real Installations</div>
          <h2 className="section-title">Deployed across<br/>New Zealand fleets</h2>
          <p className="section-subtitle">
            Every installation is carried out by our Auckland-based team — tailored to the vehicle,
            the operator, and the job.
          </p>
        </div>

        <div className="gallery-filters">
          {FILTERS.map(f => (
            <label key={f.key} htmlFor={f.id} className="gallery-filter-btn">
              {f.label}
            </label>
          ))}
        </div>

        <div className="gallery-grid">
          {PHOTOS.map(photo => (
            <div key={photo.src} className={`gallery-item gallery-item--${photo.category}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={700}
                height={525}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div className="gallery-item-label">{photo.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
