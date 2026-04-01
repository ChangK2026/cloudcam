export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </div>

      {/* Left: Content */}
      <div>
        <div className="hero-badge">
          <span className="badge-dot" />
          New Zealand&apos;s #1 Fleet Camera Platform
        </div>
        <h1 className="hero-title">
          See Every Road.<br />
          Protect Every <span className="text-gradient">Vehicle.</span>
        </h1>
        <p className="hero-subtitle">
          Cloud-based fleet cameras, live GPS tracking, and AI driver safety — all in one powerful platform built for NZ businesses.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary btn-lg">Book a Free Demo</a>
          <a href="#features" className="btn btn-outline btn-lg">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 7.5L13 10L8 12.5V7.5Z" fill="currentColor"/>
            </svg>
            See How It Works
          </a>
        </div>
        <div className="hero-stats">
          {[
            { v: '5,000+', l: 'Vehicles Tracked' },
            { v: '500+',   l: 'NZ Businesses' },
            { v: '99.9%',  l: 'Uptime SLA' },
            { v: '24/7',   l: 'NZ Support' },
          ].map(({ v, l }, i) => (
            <>
              {i > 0 && <div key={`d${i}`} className="hero-stat-divider" />}
              <div key={l} className="hero-stat">
                <strong>{v}</strong>
                <span>{l}</span>
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Right: Dashboard Mockup */}
      <div className="hero-visual">
        <div className="mockup">
          {/* Title bar */}
          <div className="mockup-bar">
            <div className="mockup-dots"><span/><span/><span/></div>
            <span className="mockup-title">CloudCam Dashboard</span>
            <span className="mockup-live"><span className="live-dot"/>LIVE</span>
          </div>
          {/* Body */}
          <div className="mockup-body">
            {/* Sidebar */}
            <div className="mockup-sidebar">
              {[
                { label: 'Fleet', active: true, icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="5" height="5" rx="1" fill="currentColor"/>
                    <rect x="9" y="2" width="5" height="5" rx="1" fill="currentColor"/>
                    <rect x="2" y="9" width="5" height="5" rx="1" fill="currentColor"/>
                    <rect x="9" y="9" width="5" height="5" rx="1" fill="currentColor"/>
                  </svg>
                )},
                { label: 'Map', active: false, icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9 8 14.5 8 14.5C8 14.5 12.5 9 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" stroke="currentColor" strokeWidth="1.3"/>
                    <circle cx="8" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                )},
                { label: 'Reports', active: false, icon: (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3" width="12" height="2" rx="1" fill="currentColor"/>
                    <rect x="2" y="7" width="8" height="2" rx="1" fill="currentColor"/>
                    <rect x="2" y="11" width="10" height="2" rx="1" fill="currentColor"/>
                  </svg>
                )},
              ].map(({ label, active, icon }) => (
                <div key={label} className={`sidebar-item${active ? ' sidebar-active' : ''}`}>
                  {icon}{label}
                </div>
              ))}
            </div>
            {/* Main */}
            <div className="mockup-main">
              <div className="mockup-map">
                <div className="map-grid" />
                {[
                  { cls: 'mv1', icon: '🚚', label: 'VH-001' },
                  { cls: 'mv2', icon: '🚐', label: 'VH-004' },
                  { cls: 'mv3', icon: '🚛', label: 'VH-007' },
                ].map(({ cls, icon, label }) => (
                  <div key={cls} className={`map-vehicle ${cls}`}>
                    <div className="vehicle-icon">{icon}</div>
                    <div className="vehicle-label">{label}</div>
                  </div>
                ))}
                <div className="map-ping mp1" />
                <div className="map-ping mp2" />
              </div>
              <div className="mockup-cards">
                {[
                  { label: 'Active Vehicles', value: '24', sub: '/28', badge: 'online', text: 'Online' },
                  { label: 'Alerts Today',    value: '3',  sub: '',    badge: 'warn',   text: 'Review' },
                  { label: 'Safety Score',    value: '94', sub: '%',   badge: 'good',   text: 'Good' },
                ].map(({ label, value, sub, badge, text }) => (
                  <div key={label} className="stat-card">
                    <span className="stat-card-label">{label}</span>
                    <span className="stat-card-value">{value}<span className="stat-card-sub">{sub}</span></span>
                    <span className={`stat-badge badge-${badge}`}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
