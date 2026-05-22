import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sectors from './components/Sectors';
import MissionStrip from './components/MissionStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsConditions from './components/TermsConditions';

function App() {
  const [page, setPage] = useState('home');

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (page === 'privacy')  return <PrivacyPolicy   onBack={() => navigate('home')} />;
  if (page === 'cookies')  return <CookiePolicy    onBack={() => navigate('home')} />;
  if (page === 'terms')    return <TermsConditions onBack={() => navigate('home')} />;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Sectors />
      <MissionStrip />
      <Contact />
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
