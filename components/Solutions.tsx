const PRODUCTS = [
  {
    model: 'X1N',
    name: 'Light Vehicles',
    icon: '🚗',
    color: 'blue',
    desc: 'Purpose-built for cars, utes, and vans. Compact 4+1 channel DVR with full HD recording and cloud connectivity.',
    features: [
      '4 AHD channels (1080P)',
      '1 IPC channel (1080P)',
      'HDD recording',
      '4G/LTE + GPS',
      'AI Camera optional',
      '3-axis inertia sensor',
    ],
    specs: [
      { label: 'AHD Channels', value: '4 × 1080P' },
      { label: 'IPC Channels', value: '1 × 1080P' },
      { label: 'AI Integration', value: 'Optional' },
    ],
    ctaCls: 'btn-outline',
  },
  {
    model: 'X3N',
    name: 'All-Round Coverage',
    icon: '🚐',
    color: 'featured',
    featured: true,
    desc: 'Versatile 4+4 channel system for buses, SUVs, and mid-size fleets requiring comprehensive coverage.',
    features: [
      '4 AHD channels (1080P)',
      '4 IPC channels (1080P)',
      'HDD recording',
      '4G/LTE + GPS',
      'AI camera compatible',
      '3-axis inertia sensor',
    ],
    specs: [
      { label: 'AHD Channels', value: '4 × 1080P' },
      { label: 'IPC Channels', value: '4 × 1080P' },
      { label: 'AI Integration', value: '✓ Compatible' },
    ],
    ctaCls: 'btn-primary',
  },
  {
    model: 'X5N',
    name: 'Heavy Vehicles',
    icon: '🚛',
    color: 'blue',
    desc: 'Enterprise-grade 8-channel DVR for trucks, heavy machinery, and large fleet vehicles with full AI safety.',
    features: [
      '8 AHD channels (1080P)',
      'Expandable IPC channels',
      'HDD recording',
      '4G/LTE + GPS',
      'Full AI integration',
      '3-axis inertia sensor',
    ],
    specs: [
      { label: 'AHD Channels', value: '8 × 1080P' },
      { label: 'IPC Channels', value: 'Expandable' },
      { label: 'AI Integration', value: '✓ Full' },
    ],
    ctaCls: 'btn-outline',
  },
];

export default function Solutions() {
  return (
    <section className="solutions section" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">DVR Camera Systems</div>
          <h2 className="section-title">The right system<br/>for every vehicle</h2>
          <p className="section-subtitle">
            Three purpose-built DVR platforms covering light, medium, and heavy vehicles —
            all with 1080P HD, 4G/LTE, GPS, and 3-axis inertia sensors.
            <br /><span style={{ fontSize: 14, color: 'var(--gray-400)', marginTop: 6, display: 'block' }}>Contact us for pricing.</span>
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map(({ model, name, icon, color, featured, desc, features, specs, ctaCls }) => (
            <div key={model} className={`product-card product-card--${color}`}>
              {featured && <div className="product-popular-badge">Most Popular</div>}
              <div className="product-model-badge">{model}</div>
              <div className="product-icon">{icon}</div>
              <h3>{name}</h3>
              <p className="product-desc">{desc}</p>

              {/* Feature checklist */}
              <ul className="product-specs" style={{ marginBottom: 20 }}>
                {features.map(f => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Spec comparison rows */}
              <div className="product-spec-table">
                {specs.map(({ label, value }) => (
                  <div key={label} className="product-spec-row">
                    <span className="spec-label">{label}</span>
                    <span className="spec-value">{value}</span>
                  </div>
                ))}
                <div className="product-spec-row">
                  <span className="spec-label">Pricing</span>
                  <span className="spec-value spec-value--contact">Contact us</span>
                </div>
              </div>

              <a href="#contact" className={`btn ${ctaCls} btn-full`} style={{ marginTop: 24 }}>Get a Quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
