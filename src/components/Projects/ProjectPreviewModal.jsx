// components/ProjectPreviewModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import './ProjectPreviewModal.css';

export default function ProjectPreviewModal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="preview-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="preview-modal-content"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>

          <div className="modal-layout">
            {/* Left Side - Screenshots */}
            <div className="modal-screenshots">
              <div className="screenshot-container">
                {project.screenshots && project.screenshots.length > 0 ? (
                  <>
                    <div className="screenshot-wrapper">
                      <img 
                        src={project.screenshots[currentSlide].src} 
                        alt={project.screenshots[currentSlide].alt}
                        className="screenshot-image"
                      />
                    </div>
                    {project.screenshots.length > 1 && (
                      <>
                        <button className="nav-arrow left" onClick={prevSlide}>
                          ‹
                        </button>
                        <button className="nav-arrow right" onClick={nextSlide}>
                          ›
                        </button>
                        <div className="slide-dots">
                          {project.screenshots.map((_, idx) => (
                            <span
                              key={idx}
                              className={`dot ${idx === currentSlide ? 'active' : ''}`}
                              onClick={() => setCurrentSlide(idx)}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="no-screenshots">
                    <span>📸</span>
                    <p>Screenshots coming soon</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="modal-details">
              <div className="details-header">
                <span className="project-category-badge">{project.category}</span>
                <h3>{project.title}</h3>
              </div>

              <div className="details-description">
                <p>{project.description}</p>
              </div>

              <div className="details-highlights">
                <h4>✨ Key Features</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <span className="highlight-icon">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="details-tech">
                <h4>🛠️ Tech Stack</h4>
                <div className="tech-tags">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="details-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-btn github-btn"
                >
                  <span>📂</span> View Code
                </a>
                {project.isLive && project.demo ? (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn demo-btn"
                  >
                    <span>🚀</span> Live Demo
                  </a>
                ) : (
                  <button className="action-btn demo-btn disabled" disabled>
                    <span>🔒</span> Preview Only
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}