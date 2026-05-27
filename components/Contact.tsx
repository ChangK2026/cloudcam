'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target as HTMLFormElement;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName:  (form.elements.namedItem('lastName')  as HTMLInputElement).value,
      email:     (form.elements.namedItem('email')     as HTMLInputElement).value,
      phone:     (form.elements.namedItem('phone')     as HTMLInputElement).value,
      message:   (form.elements.namedItem('message')   as HTMLInputElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('done');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const isBusy = status === 'sending';

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
                { icon: '📍', text: '39 Ponderosa Drive, Oteha, Auckland 0632, New Zealand' },
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
                  <input name="firstName" type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input name="lastName" type="text" placeholder="Smith" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" placeholder="john@company.co.nz" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input name="phone" type="tel" placeholder="+64 21 000 0000" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <input name="message" type="text" placeholder="Tell us about your fleet..." />
              </div>
              <button
                type="submit"
                disabled={isBusy}
                className="btn btn-full btn-lg"
                style={{
                  background: status === 'done' ? '#10B981' : status === 'error' ? '#EF4444' : 'var(--blue-600)',
                  color: 'white',
                  border: 'none',
                  boxShadow: status === 'done' ? '0 4px 14px rgba(16,185,129,.4)' : '0 4px 14px rgba(0,87,255,.35)',
                  transition: 'all .3s ease',
                  opacity: isBusy ? 0.7 : 1,
                }}
              >
                {status === 'sending' ? 'Sending…' : status === 'done' ? "✓ Message sent! We'll be in touch." : status === 'error' ? '✗ Failed — please try again' : 'Send Message'}
              </button>
              <p className="form-note">We&apos;ll respond within 1 business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
