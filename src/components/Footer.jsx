import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-logo">
          <img src="/icons/nd.jpg" alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat dolor repudiandae iste aut cumque quibusdam consequatur quasi at perferendis laudantium, possimus eaque commodi, quod voluptas odio labore illo totam.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <h4>Social Icons</h4>
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>
      <footer>
        &copy; 2024 <span>Nawaz Danish</span>
      </footer>
    </div>
  );
};

export default Footer;
