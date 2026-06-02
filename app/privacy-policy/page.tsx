import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — CloudCam',
  description: 'Privacy Policy for Cloud Cam Limited. Learn how we collect, use, and protect your personal information in accordance with the New Zealand Privacy Act 2020.',
};

const SECTIONS = [
  {
    id: 'overview',
    title: '1. Overview',
    content: [
      { type: 'p', text: 'Cloud Cam Limited ("CloudCam", "we", "us", or "our") is committed to protecting the privacy of individuals whose personal information we collect and hold. This Privacy Policy explains how we collect, use, disclose, and safeguard personal information in accordance with the New Zealand Privacy Act 2020. Where applicable, we also observe the principles of the EU General Data Protection Regulation (GDPR) for individuals located in European jurisdictions.' },
      { type: 'p', text: 'By using our products, services, or website (cloudcam.co.nz), you acknowledge that you have read and understood this Privacy Policy.' },
    ],
  },
  {
    id: 'who-we-are',
    title: '2. Who We Are',
    content: [
      { type: 'p', text: 'Cloud Cam Limited is a New Zealand-registered company providing fleet camera systems, AI driver monitoring, GPS telematics, and related services to transport and logistics operators across New Zealand.' },
      { type: 'h', text: 'Registered Address' },
      { type: 'p', text: '39 Ponderosa Drive, Oteha, Auckland 0632, New Zealand' },
      { type: 'h', text: 'Privacy Contact' },
      { type: 'p', text: 'Email: privacy@cloudcam.co.nz' },
      { type: 'p', text: 'Phone: +64 (0)27 328 5916' },
    ],
  },
  {
    id: 'what-we-collect',
    title: '3. Information We Collect',
    content: [
      { type: 'h', text: '3.1 Fleet & Vehicle Data' },
      { type: 'li', text: 'Dashcam video footage from vehicle-mounted cameras (forward-facing, rear, side, in-cab, and cargo cameras)' },
      { type: 'li', text: 'GPS location data and route history, processed via mapping services (including Google Maps)' },
      { type: 'li', text: 'Vehicle speed, acceleration, braking, and cornering data' },
      { type: 'li', text: 'Engine and vehicle telematics data (ignition events, idling, mileage)' },
      { type: 'li', text: 'Geo-fencing zone entry and exit events' },
      { type: 'h', text: '3.2 Driver Behaviour Data (AI SmartView)' },
      { type: 'li', text: 'Fatigue detection indicators (eye closure, head position)' },
      { type: 'li', text: 'Distraction detection (mobile phone use, looking away from road)' },
      { type: 'li', text: 'Seatbelt compliance status' },
      { type: 'li', text: 'Driver identification (where applicable)' },
      { type: 'h', text: '3.3 Incident & Evidence Data' },
      { type: 'li', text: 'Timestamped footage and data triggered by collision detection or manual event marking' },
      { type: 'li', text: 'Evidence Centre recordings retained for dispute resolution and insurance purposes' },
      { type: 'h', text: '3.4 Contact & Account Information' },
      { type: 'li', text: 'Name, email address, phone number, and company details provided via contact form or product enquiries' },
      { type: 'li', text: 'Service and maintenance records associated with installed systems' },
      { type: 'h', text: '3.5 Website Usage Data' },
      { type: 'li', text: 'Browser type, IP address, pages visited, and referral source via standard web analytics (e.g. Google Analytics)' },
    ],
  },
  {
    id: 'how-we-use',
    title: '4. How We Use Your Information',
    content: [
      { type: 'p', text: 'We use the information collected for the following purposes:' },
      { type: 'li', text: 'Fleet safety & compliance: Monitoring driver behaviour to improve road safety and meet operator duty-of-care obligations' },
      { type: 'li', text: 'Incident investigation: Providing timestamped evidence for insurance claims, legal disputes, or regulatory enquiries' },
      { type: 'li', text: 'Service delivery: Installing, maintaining, and supporting CloudCam hardware and software' },
      { type: 'li', text: 'Customer support: Responding to enquiries, technical support requests, and warranty claims' },
      { type: 'li', text: 'Marketing communications: Sending product updates, newsletters, or relevant offers to customers who have opted in (see Section 10)' },
      { type: 'li', text: 'Product improvement: Aggregated and anonymised data may be used to improve AI detection accuracy and platform performance' },
      { type: 'li', text: 'Legal obligations: Complying with applicable New Zealand laws including the Land Transport Act 1998 and Health and Safety at Work Act 2015' },
    ],
  },
  {
    id: 'billing',
    title: '5. Billing & Payment Information',
    content: [
      { type: 'p', text: 'We collect and retain billing and payment information necessary to manage service contracts and comply with financial record-keeping obligations.' },
      { type: 'li', text: 'Business name, billing address, and purchase order details are collected at the time of contracting' },
      { type: 'li', text: 'Payment card data (where applicable) is processed by a PCI-compliant third-party payment provider. CloudCam does not store full card numbers' },
      { type: 'li', text: 'Invoice records, service agreements, and payment history are retained for a minimum of 7 years in accordance with New Zealand financial regulations' },
    ],
  },
  {
    id: 'who-we-share',
    title: '6. Disclosure of Information',
    content: [
      { type: 'p', text: 'We do not sell personal information to third parties. We may share information in the following circumstances:' },
      { type: 'li', text: 'Fleet operators: Vehicle footage and telematics data is accessible to the fleet operator (your employer or the vehicle owner) who contracted CloudCam services' },
      { type: 'li', text: 'Service providers: Trusted third-party providers assisting with cloud storage, software hosting, mapping services, or technical support — all bound by confidentiality obligations' },
      { type: 'li', text: 'Legal requirements: Where required by law, court order, or regulatory authority (e.g. Police, NZTA)' },
      { type: 'li', text: 'Insurance & legal proceedings: Where footage or data is requested as part of a legitimate insurance claim or legal proceeding' },
      { type: 'li', text: 'Business transfers: In the event of a merger, acquisition, or sale, personal information may be transferred as part of that transaction with equivalent privacy protections applied' },
    ],
  },
  {
    id: 'storage',
    title: '7. Data Storage & Retention',
    content: [
      { type: 'h', text: 'On-device storage' },
      { type: 'p', text: 'Dashcam footage is stored on the vehicle\'s DVR unit and overwritten on a rolling basis (typically 30 days or more depending on storage capacity and configuration).' },
      { type: 'h', text: 'Cloud storage' },
      { type: 'p', text: 'Where cloud upload is enabled, footage and telematics data is stored on secure servers. Retention periods are configured by the fleet operator, with the following general guidelines:' },
      { type: 'li', text: 'Standard footage: 30–60 days' },
      { type: 'li', text: 'Extended plan: up to 90 days' },
      { type: 'li', text: 'Flagged incident recordings: retained until resolved or as directed by the operator' },
      { type: 'h', text: 'Contact & billing records' },
      { type: 'p', text: 'Customer and financial records are retained for as long as necessary to provide services, and a minimum of 7 years for financial and contractual records.' },
      { type: 'h', text: 'Storage location' },
      { type: 'p', text: 'Data may be stored and processed in New Zealand or with cloud providers operating in jurisdictions with comparable privacy protections (including Australia and the United States under appropriate safeguards).' },
    ],
  },
  {
    id: 'your-rights',
    title: '8. Your Privacy Rights',
    content: [
      { type: 'p', text: 'Under the New Zealand Privacy Act 2020, you have the right to:' },
      { type: 'li', text: 'Access personal information we hold about you' },
      { type: 'li', text: 'Request correction of any inaccurate personal information' },
      { type: 'li', text: 'Request deletion of personal information, subject to our legal retention obligations' },
      { type: 'li', text: 'Raise a complaint if you believe we have breached the Privacy Act' },
      { type: 'p', text: 'To exercise any of these rights, please contact us at privacy@cloudcam.co.nz. We will respond within 20 working days as required by the Privacy Act 2020.' },
      { type: 'p', text: 'If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner at www.privacy.org.nz or by calling 0800 803 909.' },
    ],
  },
  {
    id: 'driver-notice',
    title: '9. Notice to Drivers',
    content: [
      { type: 'p', text: 'If you are a driver operating a vehicle fitted with a CloudCam system, please be aware:' },
      { type: 'li', text: 'Your vehicle is equipped with cameras that may record video footage inside and outside the vehicle' },
      { type: 'li', text: 'Your location, speed, and driving behaviour are being monitored via GPS and telematics' },
      { type: 'li', text: 'AI-based driver monitoring (where enabled) may detect fatigue, distraction, or phone use' },
      { type: 'li', text: 'This monitoring is carried out by your employer or fleet operator for safety, compliance, and operational purposes' },
      { type: 'li', text: 'Your employer is responsible for informing you of monitoring under the Employment Relations Act 2000 and the Privacy Act 2020' },
      { type: 'p', text: 'For questions about monitoring in your vehicle, please contact your employer or fleet manager directly.' },
    ],
  },
  {
    id: 'marketing',
    title: '10. Marketing Communications',
    content: [
      { type: 'p', text: 'We may use your contact information to send you information about CloudCam products, services, industry updates, or special offers where you have provided consent or where permitted by applicable law.' },
      { type: 'li', text: 'You may opt out of marketing emails at any time by clicking the "Unsubscribe" link in any email we send, or by contacting privacy@cloudcam.co.nz' },
      { type: 'li', text: 'Opting out of marketing communications will not affect your receipt of transactional or service-related communications' },
      { type: 'li', text: 'We do not share your contact details with third-party marketers' },
    ],
  },
  {
    id: 'breach',
    title: '11. Data Breach Notification',
    content: [
      { type: 'p', text: 'In the event of a privacy breach that poses a serious risk of harm, Cloud Cam Limited will comply with its mandatory notification obligations under the New Zealand Privacy Act 2020 (Part 7):' },
      { type: 'li', text: 'We will notify the Office of the Privacy Commissioner as soon as practicable after becoming aware of a notifiable privacy breach' },
      { type: 'li', text: 'Affected individuals will be notified where it is reasonable and practicable to do so' },
      { type: 'li', text: 'Notifications will describe the nature of the breach, the information affected, and the steps being taken to address it' },
      { type: 'p', text: 'If you suspect a security incident involving your CloudCam system or data, please contact privacy@cloudcam.co.nz immediately.' },
    ],
  },
  {
    id: 'security',
    title: '12. Security',
    content: [
      { type: 'p', text: 'We implement appropriate technical and organisational measures to protect personal information against unauthorised access, loss, or disclosure, including:' },
      { type: 'li', text: 'Encrypted data transmission (HTTPS/TLS)' },
      { type: 'li', text: 'Access controls and authentication for cloud platforms' },
      { type: 'li', text: 'Regular security reviews of our systems and third-party providers' },
      { type: 'p', text: 'While we take reasonable steps to protect your information, no system is completely secure. Please report any security concerns to privacy@cloudcam.co.nz.' },
    ],
  },
  {
    id: 'cookies',
    title: '13. Website Cookies & Analytics',
    content: [
      { type: 'p', text: 'Our website (cloudcam.co.nz) uses cookies and similar technologies. These may include:' },
      { type: 'li', text: 'Strictly necessary cookies: Required for core site functionality (session management, form submissions)' },
      { type: 'li', text: 'Analytics cookies: Used to understand how visitors use the site (e.g. Google Analytics — page views, time on site, referral sources). Data is aggregated and anonymised' },
      { type: 'li', text: 'Functional cookies: Remembering preferences such as language or region' },
      { type: 'p', text: 'You can control or disable cookies through your browser settings. Disabling non-essential cookies will not prevent you from using the website.' },
    ],
  },
  {
    id: 'changes',
    title: '14. Changes to This Policy',
    content: [
      { type: 'p', text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The updated policy will be posted on our website with a revised effective date.' },
      { type: 'p', text: 'For material changes that affect how we use your personal information, we will take reasonable steps to notify affected individuals directly.' },
    ],
  },
  {
    id: 'contact',
    title: '15. Contact Us',
    content: [
      { type: 'p', text: 'For any privacy-related enquiries, access requests, or complaints, please contact:' },
      { type: 'h', text: 'Cloud Cam Limited — Privacy Officer' },
      { type: 'p', text: '39 Ponderosa Drive, Oteha, Auckland 0632, New Zealand' },
      { type: 'p', text: 'Email: privacy@cloudcam.co.nz' },
      { type: 'p', text: 'Phone: +64 (0)27 328 5916' },
    ],
  },
];

function renderContent(items: { type: string; text: string }[]) {
  return items.map((item, i) => {
    if (item.type === 'h') return <p key={i} className="pp-bold-heading">{item.text}</p>;
    if (item.type === 'li') return (
      <p key={i} className="pp-bullet">
        <span className="pp-bullet-dot">·</span>
        <span dangerouslySetInnerHTML={{ __html: item.text }} />
      </p>
    );
    return <p key={i} className="pp-line">{item.text}</p>;
  });
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>

        <div className="pp-hero">
          <div className="container">
            <p className="pp-hero-tag">Legal</p>
            <h1 className="pp-hero-title">Privacy Policy</h1>
            <p className="pp-hero-sub">Effective date: 1 June 2025 &nbsp;·&nbsp; Cloud Cam Limited</p>
          </div>
        </div>

        <div className="pp-body">
          <div className="container pp-grid">

            <nav className="pp-toc" aria-label="Table of contents">
              <p className="pp-toc-label">Contents</p>
              <ul>
                {SECTIONS.map(s => (
                  <li key={s.id}>
                    <a href={`#pp-${s.id}`} className="pp-toc-link">{s.title}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="pp-article">
              <div className="pp-card">
                <p className="pp-intro">
                  This Privacy Policy describes how Cloud Cam Limited collects, uses, and protects personal information in connection with our fleet camera systems, telematics platform, and website. We are committed to compliance with the New Zealand Privacy Act 2020 and, where applicable, the EU General Data Protection Regulation (GDPR).
                </p>

                {SECTIONS.map(s => (
                  <section key={s.id} id={`pp-${s.id}`} className="pp-section">
                    <h2 className="pp-section-title">{s.title}</h2>
                    <div className="pp-section-body">
                      {renderContent(s.content)}
                    </div>
                  </section>
                ))}

                <p className="pp-footer-note">
                  Last updated: 1 June 2025 · Cloud Cam Limited · Auckland, New Zealand
                </p>
              </div>
            </article>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
