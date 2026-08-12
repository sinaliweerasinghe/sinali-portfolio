import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Hero.css';
import MyPhoto from '../../assets/My.png?url';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        duration: 1.2,
        delay: 0.4,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        delay: 0.6,
      },
    },
  };

  const roleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        delay: 0.8,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6,
        delay: 1.0,
      },
    },
  };

  const portfolioTextVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.08,
      scale: 1,
      transition: {
        duration: 1.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero-section">
      {/* Luxury Decorative Elements */}
      <div className="hero-decoration">
        <div className="hero-gold-line"></div>
        <div className="hero-gold-line-2"></div>
        <div className="hero-sparkle sparkle-1">✦</div>
        <div className="hero-sparkle sparkle-2">✦</div>
        <div className="hero-sparkle sparkle-3">✦</div>
      </div>

      {/* Red accent floating blobs */}
      <div className="hero-red-blob hero-red-blob-1"></div>
      <div className="hero-red-blob hero-red-blob-2"></div>
      <div className="hero-red-blob hero-red-blob-3"></div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Left Side - Text Content */}
          <motion.div className="hero-text" variants={textVariants}>
            <motion.div className="hero-badge" variants={textVariants}>
              <span className="badge-dot"></span>
              <span className="badge-text">✦ Available for Freelance</span>
            </motion.div>

            <motion.h1 className="hero-greeting" variants={textVariants}>
              Hello, I'm
            </motion.h1>

            <motion.div className="hero-name-wrapper" variants={nameVariants}>
              <h2 className="hero-name">
                <span className="name-first">Sinali</span>
                <span className="name-last">Weerasingha</span>
              </h2>
              <div className="name-underline"></div>
            </motion.div>

            <motion.h3 className="hero-role" variants={roleVariants}>
              <span className="role-highlight">Undergraduate</span> 
              <span className="role-divider">|</span> 
              <span>Full-Stack Developer</span>
            </motion.h3>

            <motion.p className="hero-subtitle" variants={subtitleVariants}>
              Passionate about creating innovative digital experiences 
              that bridge design and technology.
            </motion.p>

            <motion.div className="hero-stats" variants={subtitleVariants}>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Commitment</span>
              </div>
            </motion.div>

            <motion.div className="hero-social" variants={subtitleVariants}>
              {/* <a href="https://github.com/sinaliweerasinghe" className="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sinaliweerasingha/" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a> */}
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
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="hero-image-wrapper"
            variants={imageVariants}
          >
            <div className="hero-image-container">
              {/* "PORTFOLIO" Background Text */}
              <motion.div 
                className="portfolio-background"
                variants={portfolioTextVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
              >
                <span>PORTFOLIO</span>
              </motion.div>

              {/* Image */}
              <motion.div 
                className="hero-photo-wrapper"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img src={MyPhoto} alt="Sinali Weerasingha" className="hero-photo" />
                <div className="photo-ring"></div>
                <div className="photo-glow"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="bg-decoration">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
      </div>
    </section>
  );
}