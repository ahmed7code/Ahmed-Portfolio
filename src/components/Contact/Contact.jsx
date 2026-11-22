import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // إذا حبيت تفعل الإرسال الحقيقي لإيميلك مستقبلاً:
    // ادخل موقع web3forms.com وحط إيميلك بيعطيك Access Key مجاني حطه هنا بدل YOUR_ACCESS_KEY_HERE
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

    // حالياً بنعرض رسالة نجاح أنيقة للتجربة
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>Have a project in mind or want to collaborate? Let's talk!</p>
        </div>

        <div className="contact-wrapper">
          {/* معلومات التواصل المباشرة */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              I'm currently open to front-end opportunities, freelance projects,
              and tech collaborations. Feel free to drop a message!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h4>Email</h4>
                  <span>ahmed.dev@example.com</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>Location</h4>
                  <span>Jeddah, Saudi Arabia</span>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج المراسلة */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <Send size={18} />
            </button>

            {submitted && (
              <div className="success-msg">
                <CheckCircle2 size={20} />
                <span>Thank you! Your message has been sent.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
