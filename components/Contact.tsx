'use client';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
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
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title" style={{textAlign:'left'}}>Book your free<br/>demo today</h2>
            <p>Our NZ-based team will walk you through the platform, answer your questions, and build a custom plan for your fleet.</p>
            <div className="contact-details">
              {[
                { icon:'📍', text:'Auckland, Wellington, Christchurch' },
                { icon:'📞', text:'0800 CLOUDCAM (0800 256 832)' },
                { icon:'✉️', text:'hello@cloudcam.co.nz' },
              ].map(({ icon, text }) => (
                <div key={text} className="contact-item">
                  <span style={{fontSize:18}}>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
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
                <label>Work Email</label>
                <input type="email" placeholder="john@company.co.nz" required />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" placeholder="Your Company Ltd" required />
              </div>
              <div className="form-group">
                <label>Fleet Size</label>
                <div className="select-wrap">
                  <select required defaultValue="">
                    <option value="" disabled>Select fleet size</option>
                    {['1–5 vehicles','6–20 vehicles','21–50 vehicles','51–100 vehicles','100+ vehicles'].map(o=>(
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+64 21 000 0000" />
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
                {done ? "✓ Demo Booked! We'll be in touch." : 'Book My Free Demo'}
              </button>
              <p className="form-note">No spam, no commitment. We&apos;ll be in touch within 1 business day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
