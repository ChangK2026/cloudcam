'use client';
import { type MouseEvent, useEffect, useState } from 'react';
import Image from 'next/image';

const PLATFORM_ITEMS = [
  { icon: '📡', title: 'Platform Features',  sub: 'Telematics, GPS tracking & geo-fencing',      href: '#telematics' },
  { icon: '🤖', title: 'AI SmartView',       sub: 'Fatigue, distraction & phone detection',      href: '#ai-vehicles' },
  { icon: '🗂️', title: 'Evidence Centre',    sub: 'Secure, timestamped incident records',        href: '#evidence-centre' },
  { icon: '🎥', title: 'Live Camera Views',  sub: 'Forward, side, rear, cargo & in-cab footage', href: '#camera-views' },
];

const SYSTEMS_ITEMS = [
  { icon: '📷', title: 'CCTV Systems',      sub: 'X1N, X3N & X5N DVR platforms',               href: '#products' },
  { icon: '🔧', title: 'Custom Solutions',  sub: 'Tailored for every vehicle & machine',        href: '#tailored' },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  const getHeaderOffset = (hash = '') => {
    const header = document.querySelector('.header');
    const height = header?.getBoundingClientRect().height ?? 72;
    if (window.innerWidth > 900) {
      if (hash === '#tailored') return height + 10;
      return height - 3;
    }
    return height - 10;
  };

  const scrollToHash = (hash: string) => {
    const id = hash.replace(/^#/, '');
    const target = document.getElementById(id);
    if (!target) return;

    const offset = getHeaderOffset(hash);
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
    window.history.pushState(null, '', hash);
  };

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMenuOpen(false);

    requestAnimationFrame(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
      } else {
        scrollToHash(href);
      }
    });
  };

  /* Header shadow on scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);


  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <nav className="nav container">

        <a href="#" className="nav-logo" onClick={(event) => handleNavLinkClick(event, '#')}>
          <Image src="/logo.png" alt="CloudCam" width={160} height={26} className="nav-logo-img" priority />
        </a>

        {/* .nav-open class drives visibility — not CSS :checked */}
        <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(event) => handleNavLinkClick(event, '#about')}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#telematics" className="nav-link" onClick={(event) => handleNavLinkClick(event, '#telematics')}>
              Fleet Platform
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <div className="dropdown">
              {PLATFORM_ITEMS.map(({ icon, title, sub, href }) => (
                <a href={href} key={title} className="dropdown-link" onClick={(event) => handleNavLinkClick(event, href)}>
                  <span className="dropdown-icon">{icon}</span>
                  <div><strong>{title}</strong><span>{sub}</span></div>
                </a>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <a href="#installations" className="nav-link" onClick={(event) => handleNavLinkClick(event, '#installations')}>Installations</a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={(event) => handleNavLinkClick(event, '#products')}>
              Camera Systems
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <div className="dropdown">
              {SYSTEMS_ITEMS.map(({ icon, title, sub, href }) => (
                <a href={href} key={title} className="dropdown-link" onClick={(event) => handleNavLinkClick(event, href)}>
                  <span className="dropdown-icon">{icon}</span>
                  <div><strong>{title}</strong><span>{sub}</span></div>
                </a>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(event) => handleNavLinkClick(event, '#contact')}>Contact</a>
          </li>
        </ul>

        <button
          type="button"
          className={`hamburger${menuOpen ? ' hamburger-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(prev => !prev)}
          onTouchEnd={(e) => { e.preventDefault(); setMenuOpen(prev => !prev); }}
        >
          <span/><span/><span/>
        </button>

      </nav>
    </header>
  );
}
