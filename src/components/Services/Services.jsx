import { Layout, Smartphone, Gauge } from 'lucide-react';
import './services.css';

const Services = () => {
  const servicesData = [
    {
      icon: <Layout size={32} />,
      title: 'Web Development',
      description:
        'Building clean, modern, and interactive user interfaces using React.js, HTML5, and CSS3.',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Responsive Design',
      description:
        'Ensuring websites look and perform seamlessly across all devices, from mobile phones to desktops.',
    },
    {
      icon: <Gauge size={32} />,
      title: 'Performance Optimization',
      description:
        'Optimizing web applications for fast loading speeds, smooth animations, and clean code structure.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2>My <span>Services</span></h2>
          <p>What I can build and offer for your next web project</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;