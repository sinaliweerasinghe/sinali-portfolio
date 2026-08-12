import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../utils/constants';
import './Projects.css';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="projects-section" ref={ref}>
      {/* Luxury Decorative Elements - Matching Contact */}
      <div className="projects-decoration">
        <div className="deco-gold-line"></div>
        <div className="deco-gold-line-2"></div>
        <div className="deco-sparkle sparkle-1">✦</div>
        <div className="deco-sparkle sparkle-2">✦</div>
        <div className="deco-sparkle sparkle-3">✦</div>
      </div>

      {/* Red accent floating blobs - Matching Contact */}
      <div className="projects-red-blob projects-red-blob-1"></div>
      <div className="projects-red-blob projects-red-blob-2"></div>
      <div className="projects-red-blob projects-red-blob-3"></div>

      {/* Red accent circles - Matching Contact */}
      <div className="projects-accent-circle projects-accent-circle-1"></div>
      <div className="projects-accent-circle projects-accent-circle-2"></div>

      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="header-badge">
            <span className="badge-line"></span>
            <span className="badge-text">✦ Portfolio</span>
            <span className="badge-line"></span>
          </div>
          
          <h2>
            <span className="gradient-text">My Projects</span>
          </h2>
          
          <p>Showcasing excellence in design & development</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}