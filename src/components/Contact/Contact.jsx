import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // 🔥 YOUR EMAILJS CREDENTIALS
  const EMAILJS_SERVICE_ID = 'service_0ta0k4v';
  const EMAILJS_TEMPLATE_ID = 'template_qvcqbd4';
  const EMAILJS_PUBLIC_KEY = 'bY_uW1Bw8PpvKTWjb';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      {/* Red Accent Blobs */}
      <div className="contact-red-blob contact-red-blob-1"></div>
      <div className="contact-red-blob contact-red-blob-2"></div>
      <div className="contact-red-blob contact-red-blob-3"></div>
      
      {/* Red Accent Circles */}
      <div className="contact-accent-circle contact-accent-circle-1"></div>
      <div className="contact-accent-circle contact-accent-circle-2"></div>

      <div className="contact-decoration">
        <div className="contact-gold-line"></div>
        <div className="contact-gold-line-2"></div>
        <div className="contact-sparkle sparkle-1">✦</div>
        <div className="contact-sparkle sparkle-2">✦</div>
      </div>

      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-header-badge">
            <span className="contact-badge-line"></span>
            <span className="contact-badge-text">✦ Get In Touch</span>
            <span className="contact-badge-line"></span>
          </div>
          <h2 className="contact-title">
            <span className="contact-gradient-text">Let's Connect</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Content */}
        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Let's work together</h3>
            <p>
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>sinaliweerasingha@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+94 77 123 4567</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://github.com/sinaliweerasinghe" target="_blank" rel="noopener noreferrer" className="social-link github">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sinaliweerasingha/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
            </div>
            
            {/* Error Message */}
            {error && (
              <div className="form-error">
                <span>⚠️</span> {error}
              </div>
            )}

            {/* Success Message */}
            {submitted && (
              <div className="form-success">
                <span>✅</span> Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <motion.button
              type="submit"
              className="contact-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : submitted ? '✓ Sent Successfully!' : 'Send Message →'}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div 
          className="contact-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="footer-content">
            <div className="footer-divider">
              <span className="footer-line"></span>
              <span className="footer-diamond">◆</span>
              <span className="footer-line"></span>
            </div>
            <p className="footer-text">
              © {new Date().getFullYear()} <span className="footer-name">Sinali Weerasingha</span> — Crafted with <span className="footer-heart">♥</span> and <span className="footer-gold">✦</span>
            </p>
            <div className="footer-bottom-links">
              <a href="#about" className="footer-link">About</a>
              <span className="footer-dot">•</span>
              <a href="#projects" className="footer-link">Projects</a>
              <span className="footer-dot">•</span>
              <a href="#education" className="footer-link">Education</a>
              <span className="footer-dot">•</span>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}