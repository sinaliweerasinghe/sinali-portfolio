import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Tools', to: 'tools' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ScrollLink to="hero" smooth={true} duration={500} className="navbar-logo">
          <span className="logo-text">SW</span>
          <span className="logo-dot"></span>
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                activeClass="active"
                spy={true}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="mobile-nav-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="mobile-nav-item">
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
                activeClass="active"
                spy={true}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}