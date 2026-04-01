'use client';
import { useState } from 'react';

export default function Contact() {
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => { setDone(false); (e.target as HTMLFormElement).reset(); }, 4000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <div className="section-tag">Contact Us</div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Get in touch<br/>with our team
            </h2>
            <p>Our Auckland-based team is ready to help you find the right camera system for your fleet. Contact us to discuss your requirements or request a product demonstration.</p>
            <div className="contact-details">
              {[
                { icon: '📍', text: '309 Rosebank Road, Avondale, Auckland 1026, New Zealand' },
                { icon: '📞', text: '+64 (0)27 328 5916' },
                { icon: '✉️', text: 'info@cloudcam.co.nz' },
              ].map(({ icon, text }) => (
                <div key={text} className="contact-item">
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, padding: 20, background: 'var(--blue-50)', borderRadius: 'var(--r-lg)', border: '1px solid var(--blue-100)' }}>
              <p style={{ fontSize: 14, color: 'var(--blue-600)', fontWeight: 600, marginBottom: 8 }}>📥 Software Downloads</p>
              <p style={{ fontSize: 13, color: 'var(--gray-600)', marginBottom: 0 }}>CEIBA2 (Windows) and VPlayer2 are available for download. Contact us for access links.</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-box">
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Smith" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@company.co.nz" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+64 21 000 0000" />
              </div>
              <div className="form-group">
                <label>Product Interest</label>
                <div className="select-wrap">
                  <select defaultValue="">
                    <option value="" disabled>Select a product</option>
                    <option>X1N — Light Vehicles</option>
                    <option>X3N — All Round</option>
                    <option>X5N — Heavy Vehicles</option>
                    <option>AI SmartView</option>
                    <option>IPD Pedestrian Camera</option>
                    <option>Not sure — need advice</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <input type="text" placeholder="Tell us about your fleet..." />
              </div>
              <button
                type="submit"
                disabled={done}
                className="btn btn-full btn-lg"
                style={{
                  background: done ? '#10B981' : 'var(--blue-600)',
                  color: 'white',
                  border: 'none',
                  boxShadow: done ? '0 4px 14px rgba(16,185,129,.4)' : '0 4px 14px rgba(0,87,255,.35)',
                  transition: 'all .3s ease',
                }}
              >
                {done ? '✓ Message sent! We\'ll be in touch.' : 'Send Message'}
              </button>
              <p className="form-note">We&apos;ll respond within 1 business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
