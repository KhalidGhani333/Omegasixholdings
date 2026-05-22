import logoWhite from '../assets/logo-white.png';
import './LegalPage.css';

export default function CookiePolicy({ onBack }) {
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
        <h1>Cookie Policy</h1>
        <p className="legal-hero-meta">Last updated: 22 May 2026</p>
      </div>

      {/* Content */}
      <div className="legal-content">

        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit our website.
        </p>

        <hr className="legal-divider" />

        <h2>How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Make the website function properly</li>
          <li>Improve website performance and user experience</li>
          <li>Analyse website traffic</li>
          <li>Remember your preferences</li>
        </ul>

        <hr className="legal-divider" />

        <h2>Types of Cookies We Use</h2>

        <table className="legal-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Essential Cookies</td>
              <td>Required for the website to operate correctly.</td>
            </tr>
            <tr>
              <td>Analytics Cookies</td>
              <td>
                Help us understand how visitors use the website (for example, via Google Analytics).
              </td>
            </tr>
            <tr>
              <td>Functional Cookies</td>
              <td>Remember your settings and preferences.</td>
            </tr>
            <tr>
              <td>Marketing Cookies</td>
              <td>May be used to deliver relevant advertising where applicable.</td>
            </tr>
          </tbody>
        </table>

        <hr className="legal-divider" />

        <h2>Managing Cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Blocking some
          cookies may affect website functionality.
        </p>
        <p>
          For more information about cookies, visit:{' '}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#111', fontWeight: 500 }}
          >
            All About Cookies
          </a>
        </p>

        <hr className="legal-divider" />

        <h2>Contact</h2>
        <p>If you have questions about this Cookie Policy, contact us at:</p>
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
