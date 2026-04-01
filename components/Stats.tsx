export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {[
            { v:'5,000+', l:'Vehicles Monitored' },
            { v:'500+',   l:'NZ Businesses Served' },
            { v:'40M+',   l:'km Tracked Per Month' },
            { v:'20%',    l:'Average Insurance Savings' },
          ].map(({ v, l }) => (
            <div key={l} className="stats-item">
              <div className="stats-number">{v}</div>
              <div className="stats-label">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
