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
  { icon: '🔧', title: 'Custom Solutions',  sub: 'Tailored for every vehicle & machine',        href: '#tailored' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Header shadow on scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /**
   * ARCHITECTURE
   * ─────────────────────────────────────────────────────────────────
   * Hamburger : <label htmlFor="nav-toggle"> — native iOS activation,
   *             100 % confirmed working.  The checkbox fires 'change'
   *             which we use to sync React state.
   *
   * Menu open : .nav-open CLASS (React state) — never depends on
   *             CSS :checked, which iOS doesn't update programmatically.
   *
   * Menu close: setMenuOpen(false)  →  removes .nav-open class  →
   *             display:none.  Also resets cb.checked so the NEXT
   *             hamburger tap toggles correctly.
   * ─────────────────────────────────────────────────────────────────
   */
  useEffect(() => {
    const cb = document.getElementById('nav-toggle') as HTMLInputElement | null;
    if (!cb) return;

    /* Sync React state when native label activates the checkbox */
    const onCbChange = () => setMenuOpen(cb.checked);
    cb.addEventListener('change', onCbChange);

    /* Close menu when a nav link is touched */
    const onTouchStart = (e: TouchEvent) => {
      if (!menuOpen) return;
      if ((e.target as Element).closest('.nav-links')) {
        setTimeout(() => {
          setMenuOpen(false);
          cb.checked = false; // reset property so next hamburger tap opens correctly
        }, 300);
      }
    };
    document.addEventListener('touchstart', onTouchStart, { passive: true });

    return () => {
      cb.removeEventListener('change', onCbChange);
      document.removeEventListener('touchstart', onTouchStart);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <nav className="nav container">

        {/* Hidden checkbox — toggled exclusively by the hamburger label below */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />

        <a href="#" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <Image src="/logo.png" alt="CloudCam" width={160} height={26} className="nav-logo-img" priority />
        </a>

        {/* .nav-open class drives visibility — not CSS :checked */}
        <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          <li className="nav-item">
            <a href="#about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#telematics" className="nav-link">
              Fleet Platform
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <div className="dropdown">
              {PLATFORM_ITEMS.map(({ icon, title, sub, href }) => (
                <a href={href} key={title} className="dropdown-link">
                  <span className="dropdown-icon">{icon}</span>
                  <div><strong>{title}</strong><span>{sub}</span></div>
                </a>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <a href="#installations" className="nav-link">Installations</a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link">
              Camera Systems
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <div className="dropdown">
              {SYSTEMS_ITEMS.map(({ icon, title, sub, href }) => (
                <a href={href} key={title} className="dropdown-link">
                  <span className="dropdown-icon">{icon}</span>
                  <div><strong>{title}</strong><span>{sub}</span></div>
                </a>
              ))}
            </div>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>

        {/* Native label — the only mechanism confirmed to work on iOS */}
        <label
          htmlFor="nav-toggle"
          className={`hamburger${menuOpen ? ' hamburger-open' : ''}`}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </label>

      </nav>
    </header>
  );
}
