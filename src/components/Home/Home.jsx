import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import './home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h3>Hey There ^-^, It's Me</h3>
        <h1>Ahmed Almaghrabi</h1>
        <h2>
          And I'm a <span>Front-End Developer</span>
        </h2>
        <p>
          I craft responsive, user-friendly, and modern web interfaces using
          HTML, CSS, and React.js. Focused on writing clean code and building
          smooth user experiences.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me <Mail size={18} />
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <FaXTwitter size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
