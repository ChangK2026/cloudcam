'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const PLATFORM_ITEMS = [
  { icon: '📡', title: 'Platform Features',  sub: 'Telematics, GPS tracking & geo-fencing',      href: '#telematics' },
  { icon: '🤖', title: 'AI SmartView',       sub: 'Fatigue, distraction & phone detection',      href: '#ai-vehicles' },
  { icon: '🗂️', title: 'Evidence Centre',    sub: 'Secure, timestamped incident records',        href: '#evidence-centre' },
  { icon: '🎥', title: 'Live Camera Views',  sub: 'Forward, side, rear, cargo & in-cab footage', href: '#camera-views' },
];

const SYSTEMS_ITEMS = [
  { icon: '📷', title: 'CCTV Systems',      sub: 'X1N, X3N & X5N DVR platforms',               href: '#products' },
  { icon: '🔧', title: 'Custom Solutions',  sub: 'Tailored for every vehicle & machine',        href: '#products' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggle = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <nav className="nav container">

        <a href="#" className="nav-logo" onClick={close}>
          <Image src="/logo.png" alt="CloudCam" width={160} height={26} className="nav-logo-img" priority />
        </a>

        <ul className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}>

          {/* About Us */}
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={close}>About Us</a>
          </li>

          {/* Fleet Platform — dropdown */}
          <li className="nav-item">
            <a href="#telematics" className="nav-link" onClick={close}>
              Fleet Platform
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <div className="dropdown">
              {PLATFORM_ITEMS.map(({ icon, title, sub, href }) => (
                <a href={href} key={title} className="dropdown-link" onClick={close}>
                  <span className="dropdown-icon">{icon}</span>
                  <div><strong>{title}</strong><span>{sub}</span></div>
                </a>
              ))}
            </div>
          </li>

          {/* Installations */}
          <li className="nav-item">
            <a href="#installations" className="nav-link" onClick={close}>Installations</a>
          </li>

          {/* Camera Systems — dropdown */}
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={close}>
              Camera Systems
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <div className="dropdown">
              {SYSTEMS_ITEMS.map(({ icon, title, sub, href }) => (
                <a href={href} key={title} className="dropdown-link" onClick={close}>
                  <span className="dropdown-icon">{icon}</span>
                  <div><strong>{title}</strong><span>{sub}</span></div>
                </a>
              ))}
            </div>
          </li>

          {/* Contact */}
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={close}>Contact</a>
          </li>

        </ul>

        <button
          className={`hamburger${menuOpen ? ' hamburger-open' : ''}`}
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>

      </nav>
    </header>
  );
}
