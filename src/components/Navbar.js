import { useState, useEffect } from 'react';
import logoWhite from '../assets/logo-white.png';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  const scrollTo = (id) => {
    close();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="nav-logo" onClick={() => scrollTo('home')}>
            <img src={logoWhite} alt="Omega Six Holdings" />
          </button>

          <ul className="nav-links">
            <li><button onClick={() => scrollTo('about')}>About</button></li>
            <li><button onClick={() => scrollTo('sectors')}>Sectors</button></li>
            <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
          </ul>

          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('sectors')}>Sectors</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </div>
      )}
    </>
  );
}
