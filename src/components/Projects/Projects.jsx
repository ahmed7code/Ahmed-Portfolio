import { ExternalLink, Laptop, ShoppingBag, CheckSquare } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import './projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'Personal Portfolio Website',
      description:
        'A modern, responsive developer portfolio built with React.js, featuring a custom Dark/Light theme switcher and clean component architecture.',
      tags: ['React.js', 'CSS3', 'Vite', 'Context API'],
      liveLink: '#',
      githubLink: 'https://github.com',
      icon: <Laptop size={48} />,
    },
    {
      title: 'E-Commerce UI Storefront',
      description:
        'An interactive online store interface with product filtering, shopping cart state management, and responsive mobile layout.',
      tags: ['React.js', 'JavaScript', 'CSS Grid'],
      liveLink: '#',
      githubLink: 'https://github.com',
      icon: <ShoppingBag size={48} />,
    },
    {
      title: 'Task Management App',
      description:
        'A clean productivity web app to organize daily tasks with local storage persistence, priority filters, and smooth animations.',
      tags: ['HTML5', 'CSS3', 'React Hooks'],
      liveLink: '#',
      githubLink: 'https://github.com',
      icon: <CheckSquare size={48} />,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>A selection of my recent front-end work and practice builds</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-banner">
                <div className="project-banner-icon">{project.icon}</div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn primary"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn secondary"
                  >
                    Code <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
