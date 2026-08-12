// components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectPreviewModal from './ProjectPreviewModal';
import './ProjectCard.css';

export default function ProjectCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreviewClick = (e) => {
    e.stopPropagation();
    setShowPreview(true);
  };

  const handleGitHubClick = (e) => {
    e.stopPropagation();
    window.open(project.github, '_blank');
  };

  return (
    <>
      <motion.div
        className="project-card-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`project-card ${isFlipped ? 'flipped' : ''}`}>
          {/* Front of card */}
          <div className="card-front">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              {project.isLive && (
                <span className="live-badge">● Live</span>
              )}
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <span className="project-category">{project.category}</span>
              <p>{project.shortDescription}</p>
              <div className="tech-stack">
                {project.tech.slice(0, 4).map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="tech-tag">+{project.tech.length - 4}</span>
                )}
              </div>
              <div className="card-hint">Hover to flip ↻</div>
            </div>
          </div>

          {/* Back of card */}
          <div className="card-back">
            <h4>✨ Project Details</h4>
            <div className="back-description">
              <p>{project.description}</p>
            </div>
            <div className="highlights">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <span key={i} className="highlight-item">▸ {highlight}</span>
              ))}
            </div>
            <div className="tech-stack-full">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="card-links">
              <button 
                onClick={handleGitHubClick} 
                className="link-btn github"
              >
                <span>📂</span> GitHub
              </button>
              <button 
                onClick={handlePreviewClick} 
                className="link-btn preview"
              >
                <span>🖼️</span> Preview
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Preview Modal */}
      {showPreview && (
        <ProjectPreviewModal 
          project={project} 
          onClose={() => setShowPreview(false)} 
        />
      )}
    </>
  );
}