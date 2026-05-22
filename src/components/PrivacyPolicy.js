import logoWhite from '../assets/logo-white.png';
import './LegalPage.css';

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="legal-page">

      {/* Top bar */}
      <div className="legal-topbar">
        <button className="legal-topbar-logo" onClick={onBack}>
          <img src={logoWhite} alt="Omegasix Holdings" />
        </button>
        <button className="legal-back-btn" onClick={onBack}>← Back to Home</button>
      </div>

      {/* Hero */}
      <div className="legal-hero">
        <h1>Privacy Policy</h1>
        <p className="legal-hero-meta">Last updated: 22 May 2026</p>
      </div>

      {/* Content */}
      <div className="legal-content">

        <h2>1. Introduction</h2>
        <p>
          Welcome to Omegasix Holdings. We are committed to protecting
          and respecting your privacy. This Privacy Policy explains how we collect, use,
          store, and protect your personal data when you visit our website.
        </p>
        <p>
          This policy is intended to comply with the UK General Data Protection Regulation
          (UK GDPR) and the Data Protection Act 2018.
        </p>

        <hr className="legal-divider" />

        <h2>2. Who We Are</h2>
        <div className="legal-contact-block">
          <p>
            <strong>Omegasix Holdings</strong><br />
            Midlands, UK<br />
            Email: <a href="mailto:admin@omegasixholdings.com">admin@omegasixholdings.com</a>
          </p>
        </div>
        <p>
          If you have any questions about this Privacy Policy or your personal data,
          please contact us using the details above.
        </p>

        <hr className="legal-divider" />

        <h2>3. What Information We Collect</h2>

        <h3>Information you provide directly</h3>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing or delivery address</li>
          <li>Any information submitted through contact forms or account registration</li>
        </ul>

        <h3>Information collected automatically</h3>
        <p>When you use our website, we may automatically collect:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited</li>
          <li>Time spent on pages</li>
          <li>Referring website addresses</li>
        </ul>

        <h3>Cookies and tracking technologies</h3>
        <p>
          We may use cookies and similar technologies to improve website functionality and
          analyse website traffic. For more information, see our Cookie Policy below.
        </p>

        <hr className="legal-divider" />

        <h2>4. How We Use Your Information</h2>
        <p>We use your personal data to:</p>
        <ul>
          <li>Provide and manage our services</li>
          <li>Respond to enquiries</li>
          <li>Process orders or bookings</li>
          <li>Improve our website and services</li>
          <li>Send marketing communications (only where legally permitted)</li>
          <li>Comply with legal obligations</li>
          <li>Detect and prevent fraud or misuse</li>
        </ul>

        <hr className="legal-divider" />

        <h2>5. Legal Basis for Processing</h2>
        <p>Under UK GDPR, we rely on the following lawful bases:</p>
        <ul>
          <li>Your consent</li>
          <li>Performance of a contract</li>
          <li>Compliance with legal obligations</li>
          <li>Legitimate interests (such as improving our services and website security)</li>
        </ul>

        <hr className="legal-divider" />

        <h2>6. Marketing Communications</h2>
        <p>We may send you marketing emails if:</p>
        <ul>
          <li>You have consented; or</li>
          <li>You are an existing customer and applicable laws permit this.</li>
        </ul>
        <p>
          You can unsubscribe at any time by clicking the unsubscribe link in our emails
          or contacting us directly.
        </p>

        <hr className="legal-divider" />

        <h2>7. Sharing Your Information</h2>
        <p>We do not sell your personal data. We may share your information with:</p>
        <ul>
          <li>Payment providers</li>
          <li>Website hosting providers</li>
          <li>IT and security providers</li>
          <li>Professional advisers</li>
          <li>Government authorities where legally required</li>
        </ul>
        <p>All third parties are required to respect the security of your personal data.</p>

        <hr className="legal-divider" />

        <h2>8. International Transfers</h2>
        <p>
          If we transfer your data outside the United Kingdom, we will ensure appropriate
          safeguards are in place in accordance with UK data protection laws.
        </p>

        <hr className="legal-divider" />

        <h2>9. Data Retention</h2>
        <p>
          We only retain personal data for as long as necessary to fulfil the purposes we
          collected it for, including legal, accounting, or reporting requirements.
        </p>

        <hr className="legal-divider" />

        <h2>10. Your Rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Restrict processing</li>
          <li>Object to processing</li>
          <li>Request transfer of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise your rights, contact us at:{' '}
          <a href="mailto:admin@omegasixholdings.com" style={{ color: '#111', fontWeight: 500 }}>
            admin@omegasixholdings.com
          </a>
        </p>
        <p>
          You also have the right to complain to the{' '}
          <strong>UK Information Commissioner's Office (ICO)</strong>.
        </p>

        <hr className="legal-divider" />

        <h2>11. Security</h2>
        <p>
          We take appropriate technical and organisational measures to protect your personal
          data against unauthorised access, loss, misuse, or alteration.
        </p>

        <hr className="legal-divider" />

        <h2>12. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for
          the privacy practices of those websites.
        </p>

        <hr className="legal-divider" />

        <h2>13. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted
          on this page with an updated revision date.
        </p>

        <hr className="legal-divider" />

        <h2>14. Contact Us</h2>
        <p>If you have questions about this Privacy Policy or your personal data, contact:</p>
        <div className="legal-contact-block">
          <p>
            <strong>Omegasix Holdings</strong><br />
            Midlands, UK<br />
            Email: <a href="mailto:admin@omegasixholdings.com">admin@omegasixholdings.com</a>
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="legal-footer">
        <p>&copy; {new Date().getFullYear()} Omegasix Holdings. All rights reserved.</p>
      </div>

    </div>
  );
}
