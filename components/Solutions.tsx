const ITEMS = [
  { icon:'🏗️', title:'Construction & Trades',    desc:'Track your work vehicles, manage job sites, and prove vehicle usage for billing.' },
  { icon:'🚛', title:'Transport & Logistics',    desc:'Full visibility from depot to delivery. Live ETA, route optimisation, and fatigue monitoring.' },
  { icon:'🏢', title:'Corporate Fleets',         desc:'Duty of care compliance, driver safety reporting, and CO₂ tracking for sustainability goals.' },
  { icon:'🚑', title:'Emergency Services',       desc:'High-reliability tracking and video for ambulance, fire, and patrol fleets.' },
  { icon:'🍕', title:'Delivery & Food Service',  desc:'Proof of delivery, driver accountability, and customer ETA notifications.' },
  { icon:'⚡', title:'Utilities & Field Service', desc:'Dispatch optimisation, job tracking, and after-hours vehicle protection.' },
];

export default function Solutions() {
  return (
    <section className="solutions section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Industry Solutions</div>
          <h2 className="section-title">Built for every NZ industry</h2>
          <p className="section-subtitle">Whether you run 3 vehicles or 300, CloudCam scales with your business.</p>
        </div>
        <div className="solutions-grid">
          {ITEMS.map(({ icon, title, desc }) => (
            <div key={title} className="sol-card">
              <div className="sol-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
