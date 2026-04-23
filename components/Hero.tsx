import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      {/* ── Full-bleed background image ── */}
      <div className="hero-bg-img">
        <Image
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1800&q=80"
          alt="Truck on highway"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          priority
        />
      </div>

      {/* ── Dark gradient overlay ── */}
      <div className="hero-overlay" />

      {/* ── Copy ── */}
      <div className="hero-inner container">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Cloud Cam Limited — Auckland, NZ
          </div>

          <h1 className="hero-title">
            Advanced Safety<br />
            <span className="hero-title-gradient">Camera Systems</span><br />
            for Every Vehicle.
          </h1>

          <p className="hero-subtitle">
            AI-powered dashcams, live 4G/LTE telematics, and intelligent driver monitoring — protecting drivers and roads across New Zealand.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg">Get in Touch</a>
            <a href="#products" className="btn btn-outline-white btn-lg">View Products</a>
          </div>

          <div className="hero-pills">
            {['1080P HD', '4G/LTE Live', 'AI SmartView', 'Pedestrian Detection', 'GPS Tracking'].map(p => (
              <span key={p} className="hero-pill">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
