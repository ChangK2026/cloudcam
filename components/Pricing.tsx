'use client';

// CloudCam doesn't publish pricing — show product comparison instead
const PRODUCTS = [
  {
    model: 'X1N',
    name: 'Light Vehicles',
    desc: 'Ideal for cars, utes, and vans requiring basic fleet monitoring.',
    specs: [
      { label: 'AHD Channels', value: '4 × 1080P' },
      { label: 'IPC Channels', value: '1 × 1080P' },
      { label: 'Storage', value: 'HDD' },
      { label: 'Connectivity', value: '4G/LTE + GPS' },
      { label: 'AI Camera', value: 'Optional' },
      { label: 'Inertia Sensor', value: '3-axis' },
    ],
    cta: 'Get a Quote',
    ctaCls: 'btn-outline',
  },
  {
    model: 'X3N',
    name: 'All-Round',
    desc: 'Best for buses, minivans, and fleets needing inside and outside coverage.',
    featured: true,
    specs: [
      { label: 'AHD Channels', value: '4 × 1080P' },
      { label: 'IPC Channels', value: '4 × 1080P' },
      { label: 'Storage', value: 'HDD' },
      { label: 'Connectivity', value: '4G/LTE + GPS' },
      { label: 'AI Camera', value: '✓ Compatible' },
      { label: 'Inertia Sensor', value: '3-axis' },
    ],
    cta: 'Get a Quote',
    ctaCls: 'btn-primary',
  },
  {
    model: 'X5N',
    name: 'Heavy Vehicles',
    desc: 'Built for trucks, heavy machinery, and large fleet operations.',
    specs: [
      { label: 'AHD Channels', value: '8 × 1080P' },
      { label: 'IPC Channels', value: 'Expandable' },
      { label: 'Storage', value: 'HDD' },
      { label: 'Connectivity', value: '4G/LTE + GPS' },
      { label: 'AI Camera', value: '✓ Full Integration' },
      { label: 'Inertia Sensor', value: '3-axis' },
    ],
    cta: 'Get a Quote',
    ctaCls: 'btn-outline',
  },
];

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Product Comparison</div>
          <h2 className="section-title">Choose the right DVR<br/>for your fleet</h2>
          <p className="section-subtitle">All systems include 1080P HD recording, 4G/LTE live streaming, GPS tracking, and 3-axis inertia sensors. Contact us for pricing.</p>
        </div>

        <div className="pricing-grid">
          {PRODUCTS.map(({ model, name, desc, featured, specs, cta, ctaCls }) => (
            <div key={model} className={`price-card${featured ? ' price-card-featured' : ''}`}>
              {featured && <div className="price-badge">Most Popular</div>}
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: featured ? 'rgba(0,87,255,0.15)' : 'var(--blue-100)',
                color: featured ? '#7EB3FF' : 'var(--blue-600)',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: '0.06em',
                marginBottom: 12,
              }}>{model}</div>
              <h3>{name}</h3>
              <p className="price-desc">{desc}</p>
              <div className="price-amount-wrap">
                <span className="price-custom" style={{ fontSize: 28 }}>Contact for Pricing</span>
              </div>
              <ul className="price-features">
                {specs.map(({ label, value }) => (
                  <li key={label} style={{ justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--gray-600)' }}>{label}</span>
                    <strong style={{ color: 'var(--navy-900)', fontWeight: 600 }}>{value}</strong>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${ctaCls} btn-full`}>{cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
