import Image from 'next/image';

const AI_FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="17" cy="17" r="5" fill="var(--navy-800)" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 17l1.5 1.5L19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Phone Detection',
    desc: 'Instantly detects mobile phone use while driving and issues an immediate in-cab alert.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="10" rx="5" ry="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M3 10C3 10 7 16 12 16C17 16 21 10 21 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 16v3M9 19h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 6C8 6 6 4 4 5M16 6C16 6 18 4 20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Yawning & Fatigue',
    desc: 'Monitors facial cues in real-time to detect drowsiness before it becomes a road safety risk.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <path d="M3 12h3M18 12h3M12 3v3M12 18v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Driver Distraction',
    desc: 'Detects inattention and loss of focus, triggering warnings the moment a driver looks away.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 18C8 18 7 14 9 11L11 7C11 7 12 5 13 5C14 5 14 6 14 7L13 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 10C13 10 16 9 17 11C18 13 16 15 15 17C14 19 14 21 14 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M5 19C5 19 6 17 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="19" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17.5 6h3M19 4.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Smoking Detection',
    desc: 'AI identifies smoking in the cab and flags violations automatically for fleet policy enforcement.',
  },
];

const EVIDENCE_POINTS = [
  'Captured images with timestamps for every AI-triggered event',
  'Upload records and vehicle data all in one place',
  'Fully accessible online — from any device, anywhere',
];

export default function Testimonials() {
  return (
    <section id="ai-vehicles" className="testimonials section">
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header reveal">
          <div className="section-tag section-tag--light">AI in Vehicles</div>
          <h2 className="section-title">Improving both Driver<br/>and Road Safety</h2>
          <p className="section-subtitle">
            CloudCam&apos;s AI SmartView camera system detects dangerous driver behaviours in real-time —
            reducing incidents before they happen and keeping your fleet compliant and safe.
          </p>
        </div>

        {/* ── AI detection feature cards ── */}
        <div className="ai-features-grid">
          {AI_FEATURES.map(({ icon, title, desc }, i) => (
            <div key={title} className={`ai-feature-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className="ai-feature-icon">{icon}</div>
              <h3 className="ai-feature-title">{title}</h3>
              <p className="ai-feature-desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Evidence Centre — outcome of every AI event ── */}
        <div id="evidence-centre" className="evidence-outcome reveal">
          <div className="evidence-outcome-connector">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v10M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Every detection is automatically recorded in the Evidence Centre</span>
          </div>

          <div className="evidence-layout">
            <div className="evidence-copy">
              <div className="section-tag section-tag--light">Evidence Centre</div>
              <h3 className="evidence-title">Every incident.<br/>Secured and searchable.</h3>
              <p className="evidence-desc">
                All AI-triggered events are stored in a centralised Evidence Centre — capturing images,
                timestamps, upload records, and vehicle data for every incident, fully accessible online.
              </p>
              <ul className="evidence-points">
                {EVIDENCE_POINTS.map((pt) => (
                  <li key={pt}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="rgba(0,174,204,.15)" stroke="#00AECC" strokeWidth="1.2"/>
                      <path d="M5 8l2 2 4-4" stroke="#00AECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ marginTop: 32, alignSelf: 'flex-start' }}>Learn More</a>
            </div>

            <div className="evidence-preview">
              <div className="evidence-window">
                <div className="evidence-window-bar">
                  <span/><span/><span/>
                  <div className="evidence-window-title">Evidence Centre</div>
                </div>
                <Image
                  src="/evidence-centre.jpg"
                  alt="CloudCam Evidence Centre Application"
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
