export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <p className="trust-label">Key capabilities</p>
        <div className="trust-logos">
          {['1080P HD Cameras','4G/LTE Streaming','AI Driver Monitoring','Pedestrian Detection','GPS Tracking','Evidence Centre'].map(n => (
            <div key={n} className="trust-logo">{n}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
