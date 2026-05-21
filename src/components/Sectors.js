import './Sectors.css';

const sectors = [
  {
    title: 'Real Estate Development',
    desc: 'Residential & commercial development projects',
  },
  {
    title: 'Property Management',
    desc: 'End-to-end portfolio and asset management',
  },
  {
    title: 'Warehousing & Logistics',
    desc: 'Modern storage and distribution facilities',
  },
  {
    title: 'Transportation',
    desc: 'Reliable freight and fleet solutions',
  },
  {
    title: 'Supply Chain Solutions',
    desc: 'Integrated end-to-end supply chain management',
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="sectors">
      <div className="sectors-inner">
        <div className="sectors-header">
          <span className="label">What We Do</span>
          <h2>Our Sectors</h2>
        </div>
        <div className="sectors-grid">
          {sectors.map((s) => (
            <div key={s.title} className="sector-card">
              <div className="card-icon">&#9632;</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
