const BENEFITS = [
  { cls:'bi-blue',   title:'Lower Insurance Premiums', desc:'Customers report up to 20% savings on fleet insurance with CloudCam footage evidence.' },
  { cls:'bi-green',  title:'Instant Incident Evidence',  desc:'Protect your drivers with irrefutable video evidence for any road incident or insurance dispute.' },
  { cls:'bi-orange', title:'Improve Driver Behaviour',   desc:'AI-powered safety scores and coaching reduce harsh events and fuel consumption.' },
  { cls:'bi-purple', title:'RUC & Compliance Ready',     desc:'Automated mileage logs and reports to simplify NZTA compliance and RUC management.' },
];

export default function Benefits() {
  return (
    <section className="benefits section" id="about">
      <div className="container">
        <div className="benefits-grid">
          {/* Content */}
          <div>
            <div className="section-tag">Why CloudCam</div>
            <h2 className="section-title">Reduce risk. Cut costs.<br/>Stay compliant.</h2>
            <p className="section-subtitle" style={{ textAlign:'left', maxWidth:'none' }}>
              CloudCam helps NZ fleet operators lower insurance premiums, eliminate false claims, and keep drivers accountable — backed by NZ-based support.
            </p>
            <div className="benefit-items">
              {BENEFITS.map(({ cls, title, desc }) => (
                <div key={title} className="benefit-item">
                  <div className={`benefit-icon ${cls}`} />
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
                  <span className="bcard-title">Fleet Safety Score</span>
                  <span className="bcard-period">This Month</span>
                </div>
                <div className="score-wrap">
                  <svg viewBox="0 0 120 60" className="score-arc">
                    <path d="M 10 55 A 50 50 0 0 1 110 55" stroke="#e8ecf0" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    <path d="M 10 55 A 50 50 0 0 1 110 55" stroke="url(#g)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="24"/>
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0057FF"/>
                        <stop offset="100%" stopColor="#00C2FF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="score-num">94</div>
                </div>
                <div className="bcard-metrics">
                  {[['Harsh Events','-18%'],['Speeding','-12%'],['Fuel Use','-9%']].map(([k,v])=>(
                    <div key={k} className="metric">
                      <span>{k}</span><strong className="good">{v}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bcard bcard-alert">
                <span style={{fontSize:22}}>🔔</span>
                <div>
                  <strong>Geofence Alert</strong>
                  <span>VH-012 left zone · 2 min ago</span>
                </div>
              </div>

              <div className="bcard bcard-cam">
                <div style={{position:'relative'}}>
                  <div className="cam-overlay">
                    <span className="cam-label">FRONT CAM · VH-005</span>
                    <span className="cam-live"><span className="live-dot"/> LIVE</span>
                  </div>
                  <div className="cam-image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
