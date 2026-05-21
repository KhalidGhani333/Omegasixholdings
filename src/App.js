import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Sectors from './components/Sectors';
import MissionStrip from './components/MissionStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Sectors />
      <MissionStrip />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
