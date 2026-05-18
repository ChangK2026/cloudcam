'use client';
import Image from 'next/image';

const FEATURES = [
  {
    title: 'Telematics & Live Fleet Management',
    desc: 'Web and phone-based fleet management with live video streaming, real-time GPS tracking, and encrypted data transmission.',
    icon: <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><rect x="3" y="5" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M9 20V23M19 20V23M6 23H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="14" cy="12.5" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
    bullets: ['Live video & GPS tracking', 'Web & mobile platform', 'Encrypted data transfer'],
    href: '#telematics-detail',
  },
  {
    title: 'AI SmartView — Driver Monitoring',
    desc: 'Multi-camera AI system detecting distraction, phone use, smoking, yawning, and drowsiness in real-time.',
    icon: <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2"/><path d="M6 24C6 20.134 9.582 17 14 17C18.418 17 22 20.134 22 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M20 8L22 6M22 8L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
    bullets: ['Infrared eye tracking', 'Works through sunglasses', 'Instant in-cab alerts'],
    href: '#ai-vehicles',
  },
  {
    title: 'Geo-fencing & Alerts',
    desc: 'Set custom geo-fence zones and receive instant alerts on vehicle entry, exit, and speed events.',
    icon: <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><path d="M14 3C9 3 5 7 5 12C5 18.5 14 25 14 25C14 25 23 18.5 23 12C23 7 19 3 14 3Z" stroke="currentColor" strokeWidth="2"/><circle cx="14" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
    bullets: ['Custom zone boundaries', 'Speed & behaviour alerts', 'Color-coded dashboard'],
    href: '#telematics-detail',
  },
  {
    title: 'Evidence Centre',
    desc: 'Centralised platform for securely storing and managing captured evidence — photos, timestamps, and vehicle data.',
    icon: <svg width="32" height="32" viewBox="0 0 28 28" fill="none"><rect x="5" y="4" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M9 10H19M9 14H19M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
    bullets: ['Timestamped event captures', 'Secure cloud storage', 'Accessible from any device'],
    href: '#evidence-centre',
  },
];

export default function Features() {
  return (
    <section className="features section" id="telematics">
      <div className="container">

        <div className="features-intro-layout">
          <div className="features-intro-copy">
            <div className="section-tag">Platform Features</div>
            <h2 className="section-title">Complete fleet safety<br/>in one system</h2>
            <p className="features-intro-desc">
              From live video streaming to AI-powered driver monitoring — CloudCam gives you total visibility and control of your fleet, all from a single unified platform.
            </p>
            <div className="features-stat-strip">
              <div className="feat-stat">
                <span className="feat-stat-num">1080P</span>
                <span className="feat-stat-label">Full HD Recording</span>
              </div>
              <div className="feat-stat">
                <span className="feat-stat-num">4G</span>
                <span className="feat-stat-label">Live Streaming</span>
              </div>
              <div className="feat-stat">
                <span className="feat-stat-num">1mo+</span>
                <span className="feat-stat-label">Storage Capacity</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: 32, alignSelf: 'flex-start' }}>
              Request a Demo →
            </a>
          </div>

          <div className="features-grid">
            {FEATURES.map(({ title, desc, icon, bullets, href }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="feature-bullets">
                  {bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <a href={href} className="feature-link">Learn more →</a>
              </div>
            ))}
          </div>
        </div>

        <div id="telematics-detail" className="telematics-detail">

          {/* ── Platform split: copy + live-view screenshot ── */}
          <div className="platform-split">
            <div className="platform-copy reveal">
              <div className="section-tag">Fleet Management Software</div>
              <h2 className="section-title">Web-Based Fleet<br/>Management Platform</h2>
              <p className="platform-lead">
                A unified telematics system delivering live video, real-time GPS tracking,
                and intelligent alerts — accessible from any web browser or mobile device.
              </p>
              <ul className="platform-feature-list">
                {[
                  'Live multi-camera view for all vehicles',
                  'Real-time GPS tracking on NZ road maps',
                  'Geo-fencing, speed & behaviour alerts',
                  'Playback, evidence export & reporting',
                  'Web & mobile access, anywhere',
                ].map(item => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="rgba(27,60,143,.1)" stroke="var(--blue-600)" strokeWidth="1.2"/>
                      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="var(--blue-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ marginTop: 32, alignSelf: 'flex-start' }}>
                Request a Demo →
              </a>
            </div>

            <div className="platform-visual reveal reveal-delay-2">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="browser-dots"><span/><span/><span/></div>
                  <span className="browser-url">fleet.cloudcam.co.nz</span>
                  <span className="browser-live-badge">
                    <span className="browser-live-dot"/>LIVE
                  </span>
                </div>
                <div className="browser-screen">
                  <Image
                    src="/images/sw-live-view.png"
                    alt="CloudCam Fleet Platform — Live View"
                    width={960}
                    height={640}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
              <p className="platform-visual-caption">
                Live fleet dashboard — real-time GPS tracking &amp; multi-camera view
              </p>
            </div>
          </div>

          {/* ── Playback row + capability cards ── */}
          <div className="platform-secondary reveal">
            <div className="platform-secondary-screen">
              <div className="browser-frame browser-frame--sm">
                <div className="browser-bar">
                  <div className="browser-dots"><span/><span/><span/></div>
                  <span className="browser-url">Playback &amp; Evidence Review</span>
                </div>
                <div className="browser-screen">
                  <Image
                    src="/images/sw-playback.png"
                    alt="CloudCam Fleet Platform — Playback View"
                    width={800}
                    height={520}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
            <div className="platform-secondary-copy">
              <h3>Advanced Playback &amp; Evidence Review</h3>
              <p>
                Review footage from any date, sync multi-channel video with GPS and speed data,
                and export timestamped evidence clips for insurance, compliance, or legal use.
              </p>
              <ul className="platform-feature-list platform-feature-list--sm">
                {[
                  'Multi-channel synchronized playback',
                  'Speed, G-force & GPS data overlay',
                  'One-click evidence export',
                  'Secure cloud storage & audit trail',
                ].map(item => (
                  <li key={item}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" fill="rgba(27,60,143,.1)" stroke="var(--blue-600)" strokeWidth="1.2"/>
                      <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="var(--blue-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── 3 capability cards ── */}
          <div className="platform-caps">
            {[
              {
                title: 'Real-Time Fleet Visibility',
                desc: 'Monitor all vehicles live from a single web dashboard — GPS location, speed, and on-demand video feeds for every vehicle in your fleet.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <rect x="3" y="5" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="14" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M9 20V23M19 20V23M6 23H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: 'Geo-Fencing & Smart Alerts',
                desc: 'Define custom zones and receive instant push notifications for entry, exit, speed events, and driver behaviour — act before issues escalate.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3C9 3 5 7 5 12C5 18.5 14 25 14 25C14 25 23 18.5 23 12C23 7 19 3 14 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                    <circle cx="14" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
                  </svg>
                ),
              },
              {
                title: 'Evidence & Compliance',
                desc: 'Securely store timestamped footage, GPS tracks, and event logs — always ready for insurance claims, regulatory audits, or legal proceedings.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <rect x="5" y="4" width="18" height="20" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                    <path d="M9 10H19M9 14H19M9 18H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map(({ title, desc, icon }, i) => (
              <div key={title} className={`platform-cap reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
                <div className="platform-cap-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
