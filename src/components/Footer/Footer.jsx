import "./Footer.css";
import footerData from "./footerData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section version">
        <span className="version-badge">{footerData.version.number}</span>
        <span className="version-date">
          Last updated {footerData.version.lastUpdated}
        </span>
      </div>

      <div className="footer-section socials">
        {footerData.socials.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="footer-section contact">
        <span className="footer-heading">{footerData.contact.prompt}</span>
        <a href={`mailto:${footerData.contact.email}`} className="footer-email">
          {footerData.contact.email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
