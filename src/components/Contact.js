import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <span className="label">Get in Touch</span>
          <h2>Let's Start a Conversation</h2>
          <p>
            We welcome enquiries from clients, partners, and stakeholders.
            Reach out to our team and we will respond promptly.
          </p>
        </div>

        <div className="contact-right">
          <div className="contact-item">
            <span className="ci-label">Email</span>
            <a href="mailto:admin@omegasixholdings.com">
              admin@omegasixholdings.com
            </a>
          </div>
          <div className="contact-item">
            <span className="ci-label">Sectors</span>
            <p>Property &nbsp;·&nbsp; Logistics &nbsp;·&nbsp; Supply Chain</p>
          </div>
        </div>
      </div>
    </section>
  );
}
