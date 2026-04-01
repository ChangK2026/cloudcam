const FEATURES = [
  {
    large: true,
    title: 'Live Camera Streaming',
    desc: 'Watch your fleet in real-time from anywhere. Front, rear, and in-cab cameras stream directly to the cloud — no DVR required.',
    list: ['HD live video from any device', 'Multi-channel view up to 8 cameras', 'Instant incident playback'],
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 9C4 7.9 4.9 7 6 7H18L24 11V21C24 22.1 23.1 23 22 23H6C4.9 23 4 22.1 4 21V9Z" stroke="currentColor" strokeWidth="2"/><circle cx="14" cy="15" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'GPS Tracking',
    desc: 'Real-time location of every vehicle on a live map. Track routes, stops, and ETA from your dashboard.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3C9 3 5 7 5 12C5 18.5 14 25 14 25C14 25 23 18.5 23 12C23 7 19 3 14 3Z" stroke="currentColor" strokeWidth="2"/><circle cx="14" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'AI Driver Safety',
    desc: 'Detect harsh braking, speeding, fatigue, and distraction in real-time. Automated coaching reports sent weekly.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L17.5 11H24.5L19 15.5L21 22.5L14 18L7 22.5L9 15.5L3.5 11H10.5L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Trip History & Reports',
    desc: 'Detailed logs of every journey. Export reports for compliance, billing, maintenance, and driver reviews.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M9 6V4M19 6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M4 11H24" stroke="currentColor" strokeWidth="2"/></svg>,
  },
  {
    title: 'Cloud Storage',
    desc: 'All footage is securely stored in the cloud for up to 90 days. Access, download, or share clips for insurance claims.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4C9 4 5 8 5 13C5 18 9 22 14 22C19 22 23 18 23 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M18 4L23 4L23 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 4L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    title: 'Alerts & Notifications',
    desc: 'Instant SMS and email alerts for speeding, geofence breaches, harsh events, and vehicle tampering.',
    icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4L16.5 9.5L22.5 10.5L18.5 14.5L19.5 20.5L14 17.5L8.5 20.5L9.5 14.5L5.5 10.5L11.5 9.5L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>,
  },
];

export default function Features() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Platform Features</div>
          <h2 className="section-title">Everything your fleet needs<br/>in one platform</h2>
          <p className="section-subtitle">From live video to AI-powered safety alerts — CloudCam gives you complete visibility over your fleet, 24/7.</p>
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
