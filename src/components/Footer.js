import logoWhite from '../assets/logo-white.png';
import './Footer.css';

export default function Footer({ onNavigate }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <button className="fb-logo-btn" onClick={() => scrollTo('home')}>
            <img src={logoWhite} alt="Omega Six Holdings Limited" />
          </button>
          <p>
            A diversified holding company with strategic investments across
            property and logistics sectors, delivering long-term value across
            regional and international markets.
          </p>
        </div>

        {/* Navigate */}
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><button onClick={() => scrollTo('home')}>Home</button></li>
            <li><button onClick={() => scrollTo('about')}>About Us</button></li>
            <li><button onClick={() => scrollTo('sectors')}>Our Sectors</button></li>
            <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <a
            href="mailto:admin@omegasixholdings.com"
            className="footer-email"
          >
            admin@omegasixholdings.com
          </a>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>
              <button onClick={() => onNavigate('privacy')}>Privacy Policy</button>
            </li>
            <li>
              <button onClick={() => onNavigate('cookies')}>Cookie Policy</button>
            </li>
            <li>
              <button onClick={() => onNavigate('terms')}>Terms &amp; Conditions</button>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Omega Six Holdings Limited. All rights reserved.</p>
          <p>Building Value. Creating Legacy.</p>
        </div>
      </div>
    </footer>
  );
}
