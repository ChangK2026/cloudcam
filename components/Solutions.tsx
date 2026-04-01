// Real CloudCam DVR product lineup from cloudcam.co.nz
const PRODUCTS = [
  {
    model: 'X1N',
    name: 'Light Vehicles',
    icon: '🚗',
    color: 'blue',
    specs: [
      '4 AHD channels (1080P)',
      '1 IPC channel (1080P)',
      'HDD recording',
      '3-axis inertia sensor',
      '4G/LTE live monitoring',
      'GPS support',
    ],
    desc: 'Purpose-built for cars, utes, and vans. Compact 4+1 channel DVR with full HD recording and cloud connectivity.',
  },
  {
    model: 'X3N',
    name: 'All-Round Coverage',
    icon: '🚐',
    color: 'featured',
    specs: [
      '4 AHD channels (1080P)',
      '4 IPC channels (1080P)',
      'HDD recording',
      '3-axis inertia sensor',
      '4G/LTE + GPS enabled',
      'AI camera compatible',
    ],
    desc: 'Versatile 4+4 channel system for buses, SUVs, and mid-size fleets requiring comprehensive interior and exterior coverage.',
  },
  {
    model: 'X5N',
    name: 'Heavy Vehicles',
    icon: '🚛',
    color: 'dark',
    specs: [
      '8 AHD channels (1080P)',
      'HDD recording',
      'Full AI integration',
      '3-axis inertia sensor',
      '4G/LTE and GPS',
      'SmartView AI ready',
    ],
    desc: 'Enterprise-grade 8-channel DVR for trucks, heavy machinery, and large fleet vehicles with complete AI safety integration.',
  },
];

export default function Solutions() {
  return (
    <section className="solutions section" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">DVR Camera Systems</div>
          <h2 className="section-title">The right system<br/>for every vehicle</h2>
          <p className="section-subtitle">Three purpose-built DVR platforms covering light, medium, and heavy vehicles — all with 1080P HD, 4G/LTE, and GPS.</p>
        </div>
        <div className="products-grid">
          {PRODUCTS.map(({ model, name, icon, color, specs, desc }) => (
            <div key={model} className={`product-card product-card--${color}`}>
              <div className="product-model-badge">{model}</div>
              <div className="product-icon">{icon}</div>
              <h3>{name}</h3>
              <p className="product-desc">{desc}</p>
              <ul className="product-specs">
                {specs.map(s => (
                  <li key={s}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {s}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-outline btn-full" style={{marginTop:'auto'}}>Get a Quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
