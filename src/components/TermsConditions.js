import logoWhite from '../assets/logo-white.png';
import './LegalPage.css';

export default function TermsConditions({ onBack }) {
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
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-hero-meta">Last updated: 22 May 2026</p>
      </div>

      {/* Content */}
      <div className="legal-content">

        <h2>1. Introduction</h2>
        <p>
          These Terms &amp; Conditions govern your use of the Omegasix Holdings website.
        </p>
        <p>
          By using this website, you agree to these terms. If you do not agree, please do
          not use the website.
        </p>

        <hr className="legal-divider" />

        <h2>2. Use of Website</h2>
        <p>You agree to use this website lawfully and not:</p>
        <ul>
          <li>Misuse or disrupt the website</li>
          <li>Attempt unauthorised access</li>
          <li>Upload harmful or illegal material</li>
        </ul>
        <p>We may suspend or terminate access if these terms are breached.</p>

        <hr className="legal-divider" />

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and branding,
          belongs to Omegasix Holdings unless otherwise stated. You may not reproduce
          or distribute content without permission.
        </p>

        <hr className="legal-divider" />

        <h2>4. Accuracy of Information</h2>
        <p>
          We aim to keep information accurate and up to date but do not guarantee
          completeness or accuracy.
        </p>

        <hr className="legal-divider" />

        <h2>5. External Links</h2>
        <p>
          This website may contain links to third-party websites. We are not responsible
          for their content or practices.
        </p>

        <hr className="legal-divider" />

        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Omegasix Holdings shall not be liable
          for any loss or damage arising from use of this website.
        </p>

        <hr className="legal-divider" />

        <h2>7. Privacy</h2>
        <p>
          Your use of this website is also governed by our <strong>Privacy Policy</strong>{' '}
          and <strong>Cookie Policy</strong> above.
        </p>

        <hr className="legal-divider" />

        <h2>8. Changes to These Terms</h2>
        <p>
          We may update these Terms &amp; Conditions at any time. Continued use of the
          website means you accept any updates.
        </p>

        <hr className="legal-divider" />

        <h2>9. Governing Law</h2>
        <p>
          These terms are governed by the laws of <strong>England and Wales</strong>.
        </p>

        <hr className="legal-divider" />

        <h2>10. Contact</h2>
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
