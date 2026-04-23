const AI_FEATURES = [
  {
    icon: '📵',
    title: 'Phone Detection',
    desc: 'AI SmartView instantly detects when a driver picks up or uses a mobile phone while driving and issues an immediate in-cab alert to prevent distracted driving.',
    tag: 'AI SmartView',
    featured: false,
  },
  {
    icon: '😴',
    title: 'Yawning & Fatigue Detection',
    desc: 'Continuous facial monitoring detects yawning and signs of drowsiness in real-time, alerting drivers and fleet managers before fatigue becomes a road safety risk.',
    tag: 'AI SmartView',
    featured: true,
  },
  {
    icon: '👁️',
    title: 'Driver Distraction',
    desc: 'SmartView monitors driver attention and detects distracted behaviour — looking away from the road, inattention, and loss of focus — triggering warnings immediately.',
    tag: 'AI SmartView',
    featured: false,
  },
  {
    icon: '🚬',
    title: 'Smoking Detection',
    desc: 'The AI camera identifies smoking behaviour in the cab and flags violations automatically, helping fleet operators enforce no-smoking policies across their fleet.',
    tag: 'AI SmartView',
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">AI in Vehicles</div>
          <h2 className="section-title">Improving both Driver<br/>and Road Safety</h2>
          <p className="section-subtitle">
            CloudCam&apos;s AI SmartView camera system detects dangerous driver behaviours in real-time —
            reducing incidents before they happen and keeping your fleet compliant and safe.
          </p>
        </div>

        <div className="ai-features-grid">
          {AI_FEATURES.map(({ icon, title, desc, tag, featured }) => (
            <div key={title} className={`testi-card${featured ? ' testi-featured' : ''}`}>
              <div style={{ fontSize: 38, marginBottom: 14 }}>{icon}</div>
              <div style={{ marginBottom: 12 }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 600,
                  background: featured ? 'rgba(27,60,143,0.25)' : 'var(--blue-100)',
                  color: featured ? '#7EB3FF' : 'var(--blue-600)',
                  letterSpacing: '0.04em',
                }}>
                  {tag}
                </span>
              </div>
              <h3 style={{
                fontSize: 19,
                fontWeight: 700,
                color: featured ? '#fff' : 'var(--navy-900)',
                marginBottom: 10,
                letterSpacing: '-0.02em',
              }}>{title}</h3>
              <p style={{ fontSize: 14, color: featured ? 'rgba(255,255,255,0.75)' : undefined }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Evidence Centre callout */}
        <div className="ai-evidence-bar">
          <div className="ai-evidence-icon">🗂️</div>
          <div className="ai-evidence-text">
            <strong>Evidence Centre</strong>
            <span>All AI-triggered events are stored in a centralised Evidence Centre — capturing images, timestamps, upload records, and vehicle data for every incident, fully accessible online.</span>
          </div>
          <a href="#contact" className="btn btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  );
}
