// Real CloudCam product features based on cloudcam.co.nz
const FEATURES = [
  {
    large: true,
    title: 'Telematics & Live Fleet Management',
    desc: 'Web and phone-based fleet management platform with live video streaming, real-time GPS tracking, and encrypted data transmission for complete fleet visibility.',
    list: [
      'Live video streaming from vehicles',
      'Snapshot image capture',
      'Current location & geo-fencing',
      'Drive history & event logging',
      'Automated health checks',
      'Encrypted data transmission',
    ],
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="5" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M9 20V23M19 20V23M6 23H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="14" cy="12.5" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'AI SmartView — Driver Monitoring',
    desc: 'Multi-camera AI system detecting distraction, phone use, smoking, yawning, fatigue, and drowsiness in real-time.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2"/><path d="M6 24C6 20.134 9.582 17 14 17C18.418 17 22 20.134 22 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M20 8L22 6M22 8L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    title: 'Pedestrian Detection (IPD)',
    desc: '1080P HD camera detecting pedestrians at 0.5–12m range. Recognises sitting, standing, and cycling pedestrians with real-time warning alerts.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="7" r="3" stroke="currentColor" strokeWidth="2"/><path d="M14 10V18M10 13H18M11 24L14 18L17 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Evidence Centre',
    desc: 'Centralised platform for securely storing and managing captured evidence — photos, timestamps, upload records, and vehicle details — all in one place.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="5" y="4" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M9 10H19M9 14H19M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    title: 'CEIBA2 Software',
    desc: 'Windows PC-based management software for reviewing footage, managing fleet data, and generating compliance reports offline.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M10 20V23M18 20V23M7 23H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 12H19M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    title: 'Geo-fencing & Alerts',
    desc: 'Set custom geo-fence zones and receive instant alerts on vehicle entry, exit, and speed events. Color-coded status indicators for real-time fleet overview.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3C9 3 5 7 5 12C5 18.5 14 25 14 25C14 25 23 18.5 23 12C23 7 19 3 14 3Z" stroke="currentColor" strokeWidth="2"/><circle cx="14" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
  },
];

export default function Features() {
  return (
    <section className="features section" id="telematics">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Platform Features</div>
          <h2 className="section-title">Complete fleet safety<br/>in one system</h2>
          <p className="section-subtitle">From live video streaming to AI-powered driver monitoring — CloudCam gives you total visibility and control of your fleet.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map(({ large, title, desc, list, icon }) => (
            <div key={title} className={`feature-card${large ? ' feature-large' : ''}`}>
              <div className="feature-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              {list && (
                <ul className="feature-list">
                  {list.map(item => <li key={item}>{item}</li>)}
                </ul>
              )}
              <a href="#contact" className="feature-link">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
