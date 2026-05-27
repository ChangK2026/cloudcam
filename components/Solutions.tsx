const VEHICLES = [
  {
    label: 'Cars & Utes',
    icon: (
      <svg width="44" height="28" viewBox="0 0 48 30" fill="none">
        <path d="M4 22h40v4H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M4 22l7-10h26l7 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="13" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="35" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    label: 'Vans & SUVs',
    icon: (
      <svg width="44" height="28" viewBox="0 0 48 30" fill="none">
        <rect x="4" y="12" width="40" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 20h40M18 12v-6h16l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="13" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="35" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    label: 'Heavy Trucks',
    icon: (
      <svg width="52" height="28" viewBox="0 0 56 30" fill="none">
        <rect x="4" y="10" width="30" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="36" y="14" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M36 18l-2-4h14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="24" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="44" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    label: 'Fuel Tankers',
    icon: (
      <svg width="52" height="28" viewBox="0 0 56 30" fill="none">
        <ellipse cx="22" cy="18" rx="18" ry="9" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="40" y="14" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M40 18l-2-4h10l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="26" r="3" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="32" cy="26" r="3" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="46" cy="26" r="3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    label: 'Buses & Coaches',
    icon: (
      <svg width="52" height="28" viewBox="0 0 56 30" fill="none">
        <rect x="4" y="8" width="48" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 20h48M16 8v12M28 8v12M40 8v12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="13" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="43" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    label: 'Heavy Machinery',
    icon: (
      <svg width="44" height="28" viewBox="0 0 48 30" fill="none">
        <rect x="4" y="16" width="24" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 16V10l8-4 4 4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16l16-10 4 6-14 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="24" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    label: 'Ferries & Vessels',
    icon: (
      <svg width="52" height="28" viewBox="0 0 56 30" fill="none">
        <path d="M6 22h44l-4 6H10l-4-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="16" y="14" width="24" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="22" y="6" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M28 4v2M22 10h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Specialised Plant',
    icon: (
      <svg width="52" height="28" viewBox="0 0 56 30" fill="none">
        <rect x="4" y="14" width="28" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M32 20h10l6-8h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M38 12l4-8 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="24" width="28" height="4" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="12" cy="27" r="2" fill="currentColor"/>
        <circle cx="24" cy="27" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section className="solutions section" id="products">
      <div className="container">

        {/* ── Intro split: copy + spec table ── */}
        <div className="products-intro">
          <div className="products-intro-copy">
            <div className="section-tag">CCTV Systems</div>
            <h2 className="section-title">The right system<br/>for every vehicle</h2>
            <p>
              Three purpose-built DVR platforms — X1N, X3N, and X5N — covering light,
              medium, and heavy vehicles. All with 1080P HD recording, 4G/LTE live
              streaming, GPS, and 3-axis inertia sensors as standard.
            </p>
            <a href="#contact" className="btn btn-outline">Contact Us for Pricing →</a>
          </div>
          <div>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Spec</th>
                  <th>X1N</th>
                  <th>X3N</th>
                  <th>X5N</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AHD Channels</td>
                  <td>4 × 1080P</td>
                  <td>4 × 1080P</td>
                  <td>8 × 1080P</td>
                </tr>
                <tr>
                  <td>IPC Channels</td>
                  <td>1 × 1080P</td>
                  <td>4 × 1080P</td>
                  <td>Expandable</td>
                </tr>
                <tr>
                  <td>AI Integration</td>
                  <td>Optional</td>
                  <td>Compatible</td>
                  <td>Full</td>
                </tr>
                <tr>
                  <td>Best For</td>
                  <td>Light vehicles</td>
                  <td>Buses & mid-size</td>
                  <td>Heavy trucks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Custom solutions band ── */}
        <div className="custom-solutions reveal" id="tailored">
          <div className="custom-solutions-header">
            <div className="section-tag section-tag--light">Tailored for Your Fleet</div>
            <h3 className="custom-solutions-title">
              A custom solution for<br/>every vehicle and machine
            </h3>
            <p className="custom-solutions-desc">
              No two fleets are the same. CloudCam supplies and installs purpose-configured
              camera systems for every type of commercial vehicle and machinery — from standard
              cars and utes to heavy haulage, fuel tankers, ferries, and specialist plant
              equipment. Whatever your operation, we build the right system around it.
            </p>
          </div>

          <div className="vehicles-grid">
            {VEHICLES.map(({ label, icon }) => (
              <div key={label} className="vehicle-tile">
                <div className="vehicle-tile-icon">{icon}</div>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="custom-solutions-cta">
            <p>
              Tell us what you need — we'll configure the perfect camera system for your operation.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">Get in Touch →</a>
          </div>
        </div>

      </div>
    </section>
  );
}
