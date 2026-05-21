import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-left">
          <span className="label">Who We Are</span>
          <h2>
            A Diversified <em>Holdings</em>
            <br />
            Company
          </h2>
          <div className="about-divider" />
        </div>
        <div className="about-right">
          <p>
            Omega Six is a diversified holding company with strategic investments
            across the property and logistics sectors. We oversee a dynamic
            portfolio of businesses focused on real estate development, property
            management, warehousing, transportation, and supply chain solutions.
          </p>
          <p>
            Our mission is to create long-term value through operational
            excellence, innovation, and sustainable growth. By combining industry
            expertise with strong partnerships, we deliver reliable services and
            scalable opportunities across regional and international markets.
          </p>
          <p>
            With a commitment to quality, efficiency, and customer satisfaction,
            our group continues to expand its presence while supporting economic
            growth and building lasting value for clients, partners, and
            stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
