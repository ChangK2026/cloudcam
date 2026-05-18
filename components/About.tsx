import Image from 'next/image';

const INDUSTRIES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="11" width="18" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="15.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
    label: 'Freight & Logistics',
    desc: 'Long-haul and regional freight operators with large mixed fleets',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="1" y="7" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17 10l4 2-4 2V10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 7V5a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Passenger Transport',
    desc: 'Bus and coach operators running scheduled and charter services',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <ellipse cx="11" cy="15" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 15V9l8-6 8 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 20v-5h6v5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Fuel Distribution',
    desc: 'Tanker fleets with strict compliance and safety requirements',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17L11 5l8 12H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 9v4M11 14.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Traffic Management',
    desc: 'Roadside safety operators with vehicles in high-risk environments',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="12" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="8" width="8" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 12V7M16 8V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Heavy Construction',
    desc: 'Crane trucks and specialist machinery operating on complex sites',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 17h14M4 17l2-8h10l2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 9V6a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Commercial Vehicles',
    desc: 'Delivery vans, service vehicles and light commercial fleets',
  },
];

const STRENGTHS = [
  'Auckland-based team — nationwide installation & support',
  'Long-term partnerships with some of New Zealand\'s largest fleet operators',
  'Proven across trucks, buses, tankers, coaches & heavy machinery',
  'End-to-end service — supply, installation, training & ongoing support',
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-header">
          <div className="section-tag">About CloudCam</div>
          <h2 className="section-title">The fleet camera specialists<br/>New Zealand operators trust</h2>
          <p className="section-subtitle">
            Cloud Cam Limited is a New Zealand-based specialist in fleet camera systems,
            AI driver monitoring, and telematics — serving some of the country's largest
            and most demanding fleet operators across multiple industries.
          </p>
        </div>

        <div className="about-industries">
          {INDUSTRIES.map(({ icon, label, desc }) => (
            <div key={label} className="about-industry-card">
              <div className="about-industry-icon">{icon}</div>
              <div className="about-industry-label">{label}</div>
              <div className="about-industry-desc">{desc}</div>
            </div>
          ))}
        </div>

        <div className="about-bottom">
          <div className="about-bottom-text">
            <div className="about-statement">
              <h3 className="about-statement-title">Built on experience. Backed by results.</h3>
              <p className="about-statement-body">
                Our client relationships span years, not months. When New Zealand's leading freight,
                logistics, and transport companies need camera systems they can rely on, they come to
                CloudCam — and they stay. That trust is earned through reliable hardware, expert
                installation, and a level of service that large-scale operators depend on every day.
              </p>
            </div>
            <ul className="about-strengths">
              {STRENGTHS.map(text => (
                <li key={text} className="about-strength-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="rgba(27,60,143,.1)" stroke="var(--blue-600)" strokeWidth="1.2"/>
                    <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="var(--blue-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-photo-collage reveal reveal-delay-2">
            <div className="about-photo-main">
              <Image
                src="/images/install-workshop.jpeg"
                alt="CloudCam installation — heavy truck in workshop"
                width={800}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="about-photo-secondary">
              <Image
                src="/images/install-camera.jpeg"
                alt="CloudCam camera mounted on truck cab"
                width={800}
                height={500}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="about-photo-badge">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7a6 6 0 1012 0A6 6 0 001 7z" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                Auckland-based installation team
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
