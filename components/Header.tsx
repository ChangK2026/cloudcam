'use client';
import { useEffect, useState } from 'react';

const DROPDOWN_ITEMS = [
  { icon: '📹', title: 'Fleet Cameras',  sub: 'Live cloud video streaming' },
  { icon: '📍', title: 'GPS Tracking',   sub: 'Real-time vehicle location' },
  { icon: '🤖', title: 'AI Dashcam',     sub: 'Driver behaviour analytics' },
  { icon: '☁️', title: 'Cloud Storage',  sub: 'Secure footage archive' },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = () => { setMenuOpen(false); document.body.style.overflow = ''; };
  const toggle = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <nav className="nav container">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#0057FF"/>
            <path d="M6 11C6 9.9 6.9 9 8 9H20L26 13V23C26 24.1 25.1 25 24 25H8C6.9 25 6 24.1 6 23V11Z" fill="white" fillOpacity=".15" stroke="white" strokeWidth="1.5"/>
            <circle cx="16" cy="17" r="3.5" fill="white"/>
            <circle cx="16" cy="17" r="1.5" fill="#0057FF"/>
          </svg>
          <span className="logo-text">Cloud<strong>Cam</strong></span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>
          <li className="nav-item">
            <a href="#features" className="nav-link" onClick={close}>
              Solutions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <div className="dropdown">
              {DROPDOWN_ITEMS.map(({ icon, title, sub }) => (
                <a href="#features" key={title} className="dropdown-link">
                  <span className="dropdown-icon">{icon}</span>
                  <div><strong>{title}</strong><span>{sub}</span></div>
                </a>
              ))}
            </div>
          </li>
          {[['#features','Features'],['#pricing','Pricing'],['#about','About'],['#contact','Resources']].map(([href,label]) => (
            <li key={href} className="nav-item">
              <a href={href} className="nav-link" onClick={close}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a href="#" className="btn btn-ghost">Sign In</a>
          <a href="#contact" className="btn btn-primary">Book a Demo</a>
        </div>

        {/* Hamburger */}
        <button className={`hamburger${menuOpen ? ' hamburger-open' : ''}`} onClick={toggle} aria-label="Toggle menu">
          <span/><span/><span/>
        </button>
      </nav>
    </header>
  );
}
