export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {[
            { v: '1080P', l: 'Full HD Recording' },
            { v: '16',    l: 'Max Camera Channels' },
            { v: '12m',   l: 'Pedestrian Detection Range' },
            { v: '4G/LTE', l: 'Live Streaming Connectivity' },
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
