const BENEFIT_CARDS = [
  {
    number: '01',
    stat: '24 / 7',
    statTag: 'Always Recording',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#00AECC" strokeWidth="1.5"/>
        <path d="M16 8V16L21 21" stroke="#00AECC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="2" fill="#00AECC"/>
      </svg>
    ),
    title: 'Continuous Recording',
    desc: 'Never miss a critical incident. Unlike event-only systems, CloudCam captures everything, always.',
    points: [
      'Full HD footage on every journey',
      'HDD & SSD storage options',
      '1+ months of continuous recording',
    ],
  },
  {
    number: '02',
    stat: '< 30s',
    statTag: 'Alert Response Time',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3C9.4 3 4 8.4 4 15C4 22 16 31 16 31C16 31 28 22 28 15C28 8.4 22.6 3 16 3Z" stroke="#00AECC" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="16" cy="15" r="4" fill="rgba(0,174,204,0.3)" stroke="#00AECC" strokeWidth="1.5"/>
        <circle cx="16" cy="15" r="1.5" fill="#00AECC"/>
      </svg>
    ),
    title: 'Real-Time Alerts',
    desc: 'Instant in-vehicle and remote alarms the moment something needs your attention.',
    points: [
      'In-cab audible and visual alerts',
      'Remote fleet manager notifications',
      'Geo-fence and speed event triggers',
    ],
  },
  {
    number: '03',
    stat: '8 ch',
    statTag: 'Up to 8 Cameras',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="7" height="18" rx="1" fill="rgba(0,174,204,0.25)" stroke="#00AECC" strokeWidth="1.5"/>
        <rect x="13" y="4" width="7" height="20" rx="1" fill="rgba(0,174,204,0.4)" stroke="#00AECC" strokeWidth="1.5"/>
        <rect x="22" y="8" width="7" height="16" rx="1" fill="rgba(0,174,204,0.15)" stroke="#00AECC" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Extended Coverage',
    desc: 'Up to 8-channel HD recording with tamper-resistant storage — far beyond standard dashcams.',
    points: [
      'Up to 8-channel camera coverage',
      'Tamper-resistant HDD storage',
      'Encrypted data transmission',
    ],
  },
];

export default function Benefits() {
  return (
    <section className="benefits" id="why-cloudcam">
      <div className="container">
        <div className="benefits-header">
          <div className="section-tag section-tag--light">Why CloudCam</div>
          <h2 className="benefits-title">Safety technology<br/>that makes a difference.</h2>
          <p className="benefits-subtitle">
            Cloud Cam Limited is a New Zealand-based company dedicated to improving driver and road safety through advanced camera systems, AI monitoring, and real-time telematics.
          </p>
        </div>

        <div className="benefits-cards">
          {BENEFIT_CARDS.map(({ number, stat, statTag, icon, title, desc, points }) => (
            <div key={title} className="benefit-card">
              <div className="benefit-card-number">{number}</div>
              <div className="benefit-card-stat">{stat}</div>
              <div className="benefit-card-stat-tag">{statTag}</div>
              <div className="benefit-card-icon">{icon}</div>
              <h3 className="benefit-card-title">{title}</h3>
              <p className="benefit-card-desc">{desc}</p>
              <ul className="benefit-points">
                {points.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
