export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <p className="trust-label">Trusted by leading NZ companies</p>
        <div className="trust-logos">
          {['FleetCo NZ','BuildRight','KiwiLogistics','PacificTrans','SouthernHaul','NorthPort'].map(n => (
            <div key={n} className="trust-logo">{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
