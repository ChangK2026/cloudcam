'use client';
import { useEffect, useState } from 'react';

const DROPDOWN_ITEMS = [
  { icon: '🚗', title: 'X1N — Light Vehicles',   sub: '4 AHD + 1 IPC channel, 4G/LTE' },
  { icon: '🚐', title: 'X3N — All Round',         sub: '4 AHD + 4 IPC channel, AI ready' },
  { icon: '🚛', title: 'X5N — Heavy Vehicles',    sub: '8 AHD channels, full AI integration' },
  { icon: '🤖', title: 'AI SmartView',            sub: 'Driver behaviour & pedestrian AI' },
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
            <a href="#products" className="nav-link" onClick={close}>
              AI in Vehicles
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <div className="dropdown">
              {DROPDOWN_ITEMS.map(({ icon, title, sub }) => (
                <a href="#products" key={title} className="dropdown-link">
                  <span className="dropdown-icon">{icon}</span>
                  <div><strong>{title}</strong><span>{sub}</span></div>
                </a>
              ))}
            </div>
          </li>
          {[['#products','Products'],['#telematics','Telematics'],['#about','About'],['#contact','Contact']].map(([href,label]) => (
            <li key={href} className="nav-item">
              <a href={href} className="nav-link" onClick={close}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a href="#contact" className="btn btn-ghost">Download</a>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </div>

        {/* Hamburger */}
        <button className={`hamburger${menuOpen ? ' hamburger-open' : ''}`} onClick={toggle} aria-label="Toggle menu">
          <span/><span/><span/>
        </button>
      </nav>
    </header>
  );
}
