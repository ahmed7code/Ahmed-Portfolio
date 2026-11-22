import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { ArrowUp } from 'lucide-react';
import './footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            Ahmed<span>.Dev</span>
          </a>
          <p>© {new Date().getFullYear()} Ahmed Almaghrabi. All rights reserved.</p>
        </div>

        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
            <FaXTwitter size={20} />
          </a>
        </div>

        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Back to top">
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
