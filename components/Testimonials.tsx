// AI behaviour detection features as highlight cards (no real testimonials on site)
const HIGHLIGHTS = [
  {
    icon: '🚫',
    title: 'Phone Usage Detection',
    desc: 'SmartView AI automatically detects when a driver picks up or uses their phone while driving, triggering an immediate in-cab alert.',
    tag: 'AI SmartView',
    featured: false,
  },
  {
    icon: '😴',
    title: 'Fatigue & Drowsiness Monitoring',
    desc: 'Continuous monitoring for yawning, eye closure, and head nodding. Alerts are issued before drowsiness becomes a serious safety risk on the road.',
    tag: 'AI SmartView',
    featured: true,
  },
  {
    icon: '🚶',
    title: 'Pedestrian Detection',
    desc: 'IPD cameras detect pedestrians — sitting, standing, or cycling — at 0.5 to 12 metres, giving drivers and operators real-time proximity warnings.',
    tag: 'IPD Camera',
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">AI Safety Features</div>
          <h2 className="section-title">Intelligence built into<br/>every camera</h2>
          <p className="section-subtitle">CloudCam&apos;s AI SmartView system monitors up to 16 camera feeds simultaneously, detecting dangerous behaviours before they become incidents.</p>
        </div>
        <div className="testi-grid">
          {HIGHLIGHTS.map(({ icon, title, desc, tag, featured }) => (
            <div key={title} className={`testi-card${featured ? ' testi-featured' : ''}`}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>
              <div style={{ marginBottom: 12 }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 600,
                  background: featured ? 'rgba(0,87,255,0.25)' : 'var(--blue-100)',
                  color: featured ? '#7EB3FF' : 'var(--blue-600)',
                  letterSpacing: '0.04em',
                }}>
                  {tag}
                </span>
              </div>
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                color: featured ? '#fff' : 'var(--navy-900)',
                marginBottom: 12,
                letterSpacing: '-0.02em',
              }}>{title}</h3>
              <p style={{ color: featured ? 'rgba(255,255,255,0.75)' : undefined }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
