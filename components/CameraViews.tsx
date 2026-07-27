import Image from 'next/image';

const VIEWS = {
  front:  {
    label: 'Forward Facing',
    id: 'cv-front',
    desc: 'Forward-facing cameras capture the full road ahead — documenting hazards, near-misses, and incidents as they happen.',
    images: [
      { src: '/footage/front-a.jpg',  caption: 'Auckland motorway — multi-lane approach' },
      { src: '/footage/front-b.jpg',  caption: 'Urban road — intersection and traffic' },
    ],
  },
  side:   {
    label: 'Side',
    id: 'cv-side',
    desc: 'Full visibility along both sides of the vehicle — essential for lane changes, cyclists, and kerbside incidents.',
    images: [
      { src: '/footage/side-a.jpg',     caption: 'LH side — open highway at 69 km/h' },
      { src: '/footage/side-b-v2.jpg',  caption: 'LH side — quarry and worksite environment' },
    ],
  },
  rear:   {
    label: 'Rear',
    id: 'cv-rear',
    desc: 'Rear-facing cameras document following traffic, reversing manoeuvres, and loading bay activity.',
    images: [
      { src: '/footage/rear-a.jpg',    caption: 'Motorway — following traffic at 77 km/h' },
      { src: '/footage/rear-b-v2.jpg', caption: 'Rural roadworks — stationary at traffic control' },
    ],
  },
  cargo:  {
    label: 'Cargo',
    id: 'cv-cargo',
    desc: 'Internal cargo cameras verify load security, document condition at pickup and delivery, and deter theft.',
    images: [
      { src: '/footage/cargo-a-v2.jpg', caption: 'Load monitoring — freight at depot' },
      { src: '/footage/cargo-b-v3.jpg', caption: 'IBC containers in transit — 47 km/h' },
    ],
  },
  deck:   {
    label: 'Deck',
    id: 'cv-deck',
    desc: 'Deck cameras monitor the load from above — verifying strap security, load shift, and condition throughout the journey.',
    images: [
      { src: '/footage/deck-a-mosaic-final.jpg', caption: 'Flatbed deck — building materials in transit, 34 km/h' },
      { src: '/footage/deck-b-mosaic-15.jpg',    caption: 'Deck view — crane truck navigating urban streets, 28 km/h' },
    ],
  },
  incab:  {
    label: 'In-Cab',
    id: 'cv-incab',
    desc: 'Monitor driver behaviour, fatigue, and compliance in real-time. The AI SmartView camera tracks eye movement and alertness — even through sunglasses — triggering in-cab alerts the moment a risk is detected.',
    images: [
      { src: '/footage/incab-a-v2.jpg', caption: 'In-cab overview — driver position monitoring, 73 km/h' },
      { src: '/footage/incab-b-v3.jpg', caption: 'AI SmartView — infrared eye tracking active, 66 km/h', tag: 'AI-Driver' },
    ],
  },
};

const TABS = ['front', 'side', 'rear', 'cargo', 'deck', 'incab'] as const;
type ViewKey = typeof TABS[number];

export default function CameraViews() {
  return (
    <section className="footage section" id="camera-views">

      {/* Hidden radio inputs — CSS-only tab state */}
      {TABS.map(key => (
        <input
          key={key}
          type="radio"
          name="camview"
          id={VIEWS[key].id}
          className="cv-radio"
          defaultChecked={key === 'front'}
        />
      ))}

      <div className="container">

        <div className="section-header">
          <div className="footage-live-badge footage-live-badge--tag">
            <span className="footage-live-dot" />
            LIVE CAMERA VIEWS
          </div>
          <h2 className="section-title">See what your<br/>fleet sees</h2>
          <p className="section-subtitle footage-subtitle">
            Every camera position records in full HD with timestamped overlays — fleet ID,
            speed, date, and camera label — giving you irrefutable evidence for every incident.
          </p>

          <div className="footage-stats-bar">
            <div className="footage-stat-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M4 11v1.5M10 11v1.5M2.5 11h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              1080P Full HD
            </div>
            <div className="footage-stat-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              4G Live Streaming
            </div>
            <div className="footage-stat-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5C4.5 1.5 2.5 3.5 2.5 6c0 3.3 4.5 6.5 4.5 6.5S11.5 9.3 11.5 6c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.3"/>
                <circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              GPS Timestamped
            </div>
            <div className="footage-stat-item">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1.5" y="4" width="5" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M6.5 6.5l3-2.5v5l-3-2.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M11 5.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M12.5 4.5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Multiple Camera Positions
            </div>
          </div>
        </div>

        {/* Tab labels */}
        <div className="footage-tabs">
          {TABS.map(key => (
            <label key={key} htmlFor={VIEWS[key].id} className="footage-tab-btn">
              {VIEWS[key].label}
            </label>
          ))}
        </div>

        {/* Panels — shown/hidden via CSS :checked selector */}
        <div className="footage-panels">
          {TABS.map(key => {
            const view = VIEWS[key as ViewKey];
            return (
              <div key={key} className={`footage-panel cv-panel-${key}`}>
                <p className="footage-panel-desc">{view.desc}</p>
                <div className="footage-grid">
                  {view.images.map(img => (
                    <div key={img.src} className="footage-item">
                      <div className="footage-item-inner">
                        <span className="footage-cam-tag">{img.tag ?? view.label}</span>
                        <Image
                          src={img.src}
                          alt={img.caption}
                          width={960}
                          height={540}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                      <div className="footage-item-caption">
                        <span className="footage-caption-dot" />
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
