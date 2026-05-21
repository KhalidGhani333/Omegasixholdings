import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-glow" />
      <h1 className="hero-headline">
        Building <strong>Value.</strong>
        <br />
        Creating Legacy.
      </h1>
      <p className="hero-sub">Property &nbsp;·&nbsp; Logistics &nbsp;·&nbsp; Supply Chain</p>
      <button className="hero-cta" onClick={() => scrollTo('about')}>
        Discover More
      </button>
      <div className="hero-line" />
    </section>
  );
}
