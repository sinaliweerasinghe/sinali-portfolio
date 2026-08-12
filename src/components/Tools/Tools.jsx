import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Tools.css';

// Real SVG Tool Icons
const toolIcons = {
  "HTML5": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "CSS3": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "JavaScript": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  ),
  "React": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-8.5c2.21 0 4 1.79 4 4 0 1.84-1.23 3.39-2.93 3.86L13 7.16c.06-.22.14-.42.22-.62.37-.16.78-.04 1.06.24.28.28.4.69.24 1.06-.2.48-.62.82-1.09.99-.07.02-.14.03-.21.04L9 12.14V5.5h3z"/>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "Vue.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "TailwindCSS": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "Bootstrap": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "Express.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "NestJS": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "PHP": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.25 0v1.5h2.25v1.5h-3v4.5h3.75v4.5h-6V6h-3V1.5h3V0h-4.5v6h3v3h-4.5v6h-3v-1.5h-2.25v-1.5h3v-4.5h-3.75v-4.5h6v6h3V0h4.5z"/>
    </svg>
  ),
  "MySQL": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 5.373 2 9.5c0 2.835 2.088 5.308 5.088 6.506C7.577 16.13 8 16.755 8 17.5v2.5c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-2.5c0-.745.423-1.37 1.063-1.694C19.824 14.986 22 12.432 22 9.5 22 5.373 17.523 2 12 2z"/>
    </svg>
  ),
  "Figma": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.5 2C6.5 2 5 3.5 5 5.5S6.5 9 8.5 9 12 7.5 12 5.5 10.5 2 8.5 2zm0 4c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z"/>
    </svg>
  ),
  "WordPress": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "SQL (MySQL)": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 5.373 2 9.5c0 2.835 2.088 5.308 5.088 6.506C7.577 16.13 8 16.755 8 17.5v2.5c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-2.5c0-.745.423-1.37 1.063-1.694C19.824 14.986 22 12.432 22 9.5 22 5.373 17.523 2 12 2z"/>
    </svg>
  ),
  "Java": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149zM8.276 15.933s-1.028.761.542.925c2.032.213 3.636.232 6.413-.316 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.211zM12.069 0C12.069 0 6.768 1.375 6.768 5.855c0 1.066.764 2.056 1.74 2.675 1.036.658 2.426.861 2.426.861s-1.36-.391-2.08-1.455c-.718-1.064-.507-2.717 1.111-3.351 2.412-.946 6.363-.729 9.187-.269.186-1.03.103-2.253-.352-3.516C17.865.86 15.587.364 12.069 0z"/>
    </svg>
  ),
  "C++": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "Power BI (basic)": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  "React.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-8.5c2.21 0 4 1.79 4 4 0 1.84-1.23 3.39-2.93 3.86L13 7.16c.06-.22.14-.42.22-.62.37-.16.78-.04 1.06.24.28.28.4.69.24 1.06-.2.48-.62.82-1.09.99-.07.02-.14.03-.21.04L9 12.14V5.5h3z"/>
    </svg>
  ),
};

// Tool data with descriptions
const toolsData = [
  { name: "HTML5", description: "Semantic markup & modern web standards" },
  { name: "CSS3", description: "Advanced styling & responsive design" },
  { name: "JavaScript", description: "Dynamic & interactive web applications" },
  { name: "Next.js", description: "React framework for production" },
  { name: "Bootstrap", description: "Responsive front-end framework" },
  { name: "Node.js", description: "JavaScript runtime environment" },
  { name: "Express.js", description: "Fast & minimalist web framework" },
  { name: "NestJS", description: "Scalable Node.js backend framework" },
  { name: "PHP", description: "Server-side scripting language" },
  { name: "Python", description: "Versatile backend development" },
  { name: "MySQL", description: "Relational database management" },
  { name: "Figma", description: "Collaborative design & prototyping" },
  { name: "WordPress", description: "Content management system" },
  { name: "SQL (MySQL)", description: "Structured Query Language for databases" },
  { name: "Java", description: "Object-oriented programming language" },
  { name: "C++", description: "High-performance programming language" },
  { name: "Power BI (basic)", description: "Data visualization & dashboards" },
  { name: "React.js", description: "Component-based UI library" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      duration: 0.5,
    },
  },
};

export default function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="tools" className="tools-section" ref={ref}>
      {/* Decorative Elements */}
      <div className="tools-decoration">
        <div className="tools-gold-line"></div>
        <div className="tools-gold-line-2"></div>
        <div className="tools-sparkle sparkle-1">✦</div>
        <div className="tools-sparkle sparkle-2">✦</div>
        <div className="tools-sparkle sparkle-3">✦</div>
      </div>

      <div className="tools-container">
        {/* Header */}
        <motion.div
          className="tools-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="tools-header-badge">
            <span className="tools-badge-line"></span>
            <span className="tools-badge-text">✦ Essential Tools I use</span>
            <span className="tools-badge-line"></span>
          </div>
          <h2 className="tools-title">
            <span className="tools-gradient-text">Tools & Technologies</span>
          </h2>
          <p className="tools-subtitle">
            Discover the powerful tools and technologies I use to create exceptional, 
            high-performing websites & applications.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="tools-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {toolsData.map((tool) => (
            <motion.div
              key={tool.name}
              className="tools-card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.2, type: 'spring', stiffness: 300 }
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="tools-accent-line"></div>
              <div className="tools-red-dot"></div>
              <div className="tools-card-icon">
                {toolIcons[tool.name] || (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                )}
              </div>
              <h3 className="tools-card-name">{tool.name}</h3>
              <p className="tools-card-description">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}