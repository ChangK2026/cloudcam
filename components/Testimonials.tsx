const ITEMS = [
  { initials:'MR', name:'Mark Richards', role:'Operations Manager · FleetCo NZ',
    text:'"CloudCam paid for itself within two months after we successfully disputed a fraudulent insurance claim. The footage was crystal clear and the insurer accepted it immediately."' },
  { initials:'SK', name:'Sarah Kim', role:'Fleet Director · KiwiLogistics', featured:true,
    text:'"The real-time GPS and camera combo is a game changer. Our drivers know they\'re being monitored and our near-miss incidents have dropped by 40% in just 6 months."' },
  { initials:'JP', name:'James Patel', role:'Director · BuildRight Construction',
    text:'"Setup was incredibly easy — the CloudCam team installed everything across our 45 vehicles in two days. The NZ-based support team is responsive and actually helpful."' },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Customer Stories</div>
          <h2 className="section-title">Trusted by fleets across New Zealand</h2>
        </div>
        <div className="testi-grid">
          {ITEMS.map(({ initials, name, role, text, featured }) => (
            <div key={name} className={`testi-card${featured?' testi-featured':''}`}>
              <div className="stars">★★★★★</div>
              <p>{text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{initials}</div>
                <div>
                  <span className="testi-name">{name}</span>
                  <span className="testi-role">{role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
