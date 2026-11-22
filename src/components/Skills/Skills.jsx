import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from 'react-icons/fa6';
import { SiVite} from 'react-icons/si';
import './skills.css';

const Skills = () => {
  const skillsList = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#8b949e' },
    { name: 'Linux', icon: <FaLinux />, color: '#FCC624' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2>
            My <span>Skills</span>
          </h2>
          <p>Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
