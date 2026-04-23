import Image from 'next/image';

const FEATURE_ROWS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="10" stroke="#1B3C8F" strokeWidth="2"/>
        <circle cx="18" cy="18" r="5" fill="#00AECC"/>
        <circle cx="18" cy="18" r="2" fill="#1B3C8F"/>
        <path d="M4 18H8M28 18H32M18 4V8M18 28V32" stroke="#1B3C8F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 9L12 12M24 24L27 27M27 9L24 12M12 24L9 27" stroke="#00AECC" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI SmartView Driver Safety',
    desc: 'Real-time attention and fatigue detection',
    img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSd80mZ78k5wuN_MtnPkkw8dmZSQqDbCb9dUbiKsFLLnGSfnaeJmr70ucmKXp_MsrcLIuwH8aRQCsCn5e_GAWmjzmncixMvTIAOID9DCUUU8CACAW6zNCnhZA3gkkYcD7t9buEbd7AqXpcEvUpbDY73yXO9VSPGmBWU-8jcPIU37DyEwXMS2QO1ziDHimnCK-ubLLfnwBeWx6KIUFeXWEv_CtoS8z5kZeie=w400',
    imgAlt: 'AI SmartView fatigue detection',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="22" height="16" rx="2.5" stroke="#1B3C8F" strokeWidth="2"/>
        <path d="M26 13L32 11V25L26 23" stroke="#1B3C8F" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="15" cy="16" r="4" stroke="#00AECC" strokeWidth="1.8"/>
        <circle cx="15" cy="16" r="1.5" fill="#00AECC"/>
        <path d="M6 28H20M8 28V30M18 28V30" stroke="#1B3C8F" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="26" r="5" fill="#1B3C8F"/>
        <path d="M26 26L27.5 27.5L30.5 24.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'HD Video and Evidence Centre',
    desc: 'Secured evidence for insurance claims',
    img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SQHf52WLVOe7mzQhm1mrUlqk9eE_GzO_PGTkjnJD2YOtvq8Sw5R6YDe035_OwVxlP3NbVkmBHYJsAHYZHCzEjq064r0hnCg3LFPl_e-m-TH7unsv_Ff9PV-fLU86cptOkGV-OYYIeWM5E7dEXDClGgeDaBjHAo5Tl9_nJss328ZzMlYSi8FzlV9v1fpdfYEERCtAiXqPdHQH-0AuhRPqj9cFK4MtM267cEqGPg=w400',
    imgAlt: 'HD video evidence centre',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="20" r="10" stroke="#1B3C8F" strokeWidth="2"/>
        <path d="M18 14V20L22 23" stroke="#00AECC" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 8C10 8 6 4 2 6" stroke="#1B3C8F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 5C12 5 10 1 6 2" stroke="#1B3C8F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 3C14 3 13 0 9 0" stroke="#1B3C8F" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="26" r="5" stroke="#00AECC" strokeWidth="1.8"/>
        <circle cx="28" cy="26" r="1.5" fill="#00AECC"/>
      </svg>
    ),
    title: 'Real-time Vehicle Monitoring',
    desc: '24/7 status and live streaming',
    img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STEBTLT8ayrbpk-oW4Xw_YJne5N2-MVKf8Tex2SbpH7f6VWE_XJ2sCRzBPoYL0BSHlrCn5rcMaK_NUan5sz3jund7kMymsqMQXWbC270JceMZEYyB8viySfeetiod_ong4-l_Uy0AKR4eMZZLIeuozGpqsi635npuJITDHAeJGi4ox3bTmLwILA=w400',
    imgAlt: 'Real-time vehicle monitoring dashboard',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="8" r="4" stroke="#1B3C8F" strokeWidth="2"/>
        <path d="M18 12V22M14 18H22M15 26L12 32M21 26L24 32" stroke="#1B3C8F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 22L10 18" stroke="#00AECC" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 22L26 18" stroke="#00AECC" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 26L8 22" stroke="#00AECC" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 26L28 22" stroke="#00AECC" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 30L12 28" stroke="#00AECC" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M28 30L24 28" stroke="#00AECC" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'IPD Pedestrian Safety',
    desc: 'Pedestrian and cyclist detection alerts',
    img: 'https://lh3.googleusercontent.com/sitesv/APaQ0ST-9tF7xePkLvFX1Fkfk1UsbmS_U6gk4QrCCSNDpuQQOXdpR_HqDOhkeiG54hai1stlLdqweON4NH6uJeFyGRaPy2EdxtwTWcllxawjcwurkuYQQEGFWGPHRoMCqWTsAFon4VLIbVSjdMyGzDuI93YrVY9SxItFZqQAtqkDs0gGmIvKwGb-vLkuj9IQJsGQGrs5QcNJ_0J6ewwWw3_6QwoEj6dykG75Schm0y4=w400',
    imgAlt: 'IPD pedestrian detection',
  },
];

export default function Benefits() {
  return (
    <section className="benefits section" id="about">
      <div className="container">
        <div className="benefits-grid">
          {/* Left: copy */}
          <div>
            <div className="section-tag">Why CloudCam</div>
            <h2 className="section-title">Safety technology<br/>that makes a difference.</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', maxWidth: 'none' }}>
              Cloud Cam Limited is a New Zealand-based company dedicated to improving driver and road safety through advanced camera systems, AI monitoring, and real-time telematics.
            </p>
          </div>

          {/* Right: feature list card */}
          <div className="benefit-feature-card">
            {FEATURE_ROWS.map(({ icon, title, desc, img, imgAlt }, i) => (
              <div key={title} className={`benefit-feature-row${i < FEATURE_ROWS.length - 1 ? ' benefit-feature-row--divider' : ''}`}>
                <div className="bfr-icon">{icon}</div>
                <div className="bfr-text">
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
                <div className="bfr-img-wrap">
                  <Image src={img} alt={imgAlt} width={120} height={80} style={{ objectFit: 'cover', borderRadius: 8, display: 'block' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
