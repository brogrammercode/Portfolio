import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-tile version">
        <div className="version-number">v 0.0.1</div>
        <span>LAST UPDATED 2025-06-06</span>
      </div>
      <div className="footer-tile socials">
        <div className="footer-item">Linkedin</div>
        <div className="footer-item">Instagram</div>
        <div className="footer-item">Twitter</div>
      </div>
      <div className="footer-tile email">
        <span>Let's build something together.</span>
        <div className="footer-item">harshsharma55115@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
