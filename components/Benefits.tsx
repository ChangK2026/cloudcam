// Benefits based on actual CloudCam capabilities
const BENEFITS = [
  {
    cls: 'bi-blue',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="currentColor"/></svg>,
    title: 'Improve Driver & Road Safety',
    desc: 'AI-powered SmartView detects distraction, phone use, fatigue, and drowsiness in real-time — helping drivers stay focused and reduce on-road incidents.',
  },
  {
    cls: 'bi-green',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10L8.5 13.5L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Incident Evidence & Protection',
    desc: 'HD footage and timestamped evidence stored securely in Evidence Centre — giving you irrefutable proof for insurance claims and liability disputes.',
  },
  {
    cls: 'bi-orange',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    title: 'Live Vehicle Monitoring',
    desc: 'Track every vehicle in real-time via web or mobile. Color-coded status indicators, live streaming, snapshot capture, and automated health checks keep you informed 24/7.',
  },
  {
    cls: 'bi-purple',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C6.13 2 3 5.13 3 9C3 14.25 10 21 10 21C10 21 17 14.25 17 9C17 5.13 13.87 2 10 2Z" stroke="currentColor" strokeWidth="1.8"/><circle cx="10" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/></svg>,
    title: 'Pedestrian Safety',
    desc: 'IPD cameras detect pedestrians at 0.5–12m range — identifying sitting, standing, and cycling individuals to trigger immediate in-cab and remote warnings.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits section" id="about">
      <div className="container">
        <div className="benefits-grid">
          {/* Content */}
          <div>
            <div className="section-tag">Why CloudCam</div>
            <h2 className="section-title">Safety technology<br/>that makes a difference.</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', maxWidth: 'none' }}>
              Cloud Cam Limited is a New Zealand-based company dedicated to improving driver and road safety through advanced camera systems, AI monitoring, and real-time telematics.
            </p>
            <div className="benefit-items">
              {BENEFITS.map(({ cls, icon, title, desc }) => (
                <div key={title} className="benefit-item">
                  <div className={`benefit-icon ${cls}`}>{icon}</div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card stack visual */}
          <div>
            <div className="card-stack">
              <div className="bcard bcard-main">
                <div className="bcard-header">
                  <span className="bcard-title">SmartView AI Monitor</span>
                  <span className="bcard-period">Live</span>
                </div>
                <div className="score-wrap">
                  <svg viewBox="0 0 120 60" className="score-arc">
                    <path d="M 10 55 A 50 50 0 0 1 110 55" stroke="#e8ecf0" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <path d="M 10 55 A 50 50 0 0 1 110 55" stroke="url(#g)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="28"/>
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0057FF"/>
                        <stop offset="100%" stopColor="#00C2FF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="score-num">OK</div>
                </div>
                <div className="bcard-metrics">
                  {[['Distraction','None'],['Phone Use','None'],['Fatigue','Alert']].map(([k, v]) => (
                    <div key={k} className="metric">
                      <span>{k}</span>
                      <strong className={v === 'None' ? 'good' : ''} style={v === 'Alert' ? {color:'#F59E0B',fontWeight:700} : {}}>{v}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bcard bcard-alert">
                <span style={{ fontSize: 22 }}>⚠️</span>
                <div>
                  <strong>Fatigue Detected</strong>
                  <span>VH-003 · Yawning alert · Now</span>
                </div>
              </div>

              <div className="bcard bcard-cam">
                <div style={{ position: 'relative' }}>
                  <div className="cam-overlay">
                    <span className="cam-label">X3N · CH1 FRONT</span>
                    <span className="cam-live"><span className="live-dot" /> LIVE</span>
                  </div>
                  <div className="cam-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
