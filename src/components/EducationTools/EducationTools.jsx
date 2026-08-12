import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './EducationTools.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError(false);
  }

  function onDocumentLoadError(error) {
    console.error('PDF load error:', error);
    setPdfError(true);
  }

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="edu-container">
        {/* Header - Updated to match other pages */}
        <motion.div
          className="edu-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="edu-header-badge">
            <span className="edu-badge-line"></span>
            <span className="edu-badge-text">✦ My Education</span>
            <span className="edu-badge-line"></span>
          </div>
          <h2>
            <span className="edu-gradient-text">Education & Certificates</span>
          </h2>
          <p>Building a strong foundation for a career in technology</p>
        </motion.div>

        {/* Education Items - 2 Column Grid with animations */}
        <motion.div 
          className="edu-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Education Item 1 - Left */}
          <motion.div 
            className="edu-item-wrapper"
            variants={itemVariants}
          >
            <div className="edu-item highlighted">
              <div className="edu-item-header">
                <span className="edu-year">2026 – 2027</span>
                <span className="edu-badge">🌟</span>
              </div>
              <h3>BSc Hons in Computer Science</h3>
              <p className="edu-institution">University of Bedfordshire</p>
              <p className="edu-description">
                Specializing in advanced computing technologies, software architecture, 
                and research methodologies. Focus on AI and machine learning applications.
              </p>
              <div className="edu-tags">
                <span className="tag-current">Current</span>
                <span className="tag-location">UK</span>
              </div>
            </div>
          </motion.div>

          {/* Education Item 2 - Right */}
          <motion.div 
            className="edu-item-wrapper"
            variants={itemVariants}
          >
            <div className="edu-item">
              <div className="edu-item-header">
                <span className="edu-year">2024 – 2026</span>
                <span className="edu-badge">📘</span>
              </div>
              <h3>Higher Diploma in Information Technology</h3>
              <p className="edu-institution">SLIIT CITY UNI</p>
              <p className="edu-description">
                Comprehensive program covering full-stack development, database management, 
                networking, and software engineering principles.
              </p>
              <div className="edu-tags">
                <span className="tag-progress">In Progress</span>
                <span className="tag-location">Sri Lanka</span>
              </div>
            </div>
          </motion.div>

          {/* Education Item 3 - Left */}
          <motion.div 
            className="edu-item-wrapper"
            variants={itemVariants}
          >
            <div className="edu-item">
              <div className="edu-item-header">
                <span className="edu-year">2023 – 2024</span>
                <span className="edu-badge">📖</span>
              </div>
              <h3>Foundation Certificate in IT</h3>
              <p className="edu-institution">SLIIT CITY UNI</p>
              <p className="edu-description">
                Foundation program covering programming fundamentals, web technologies, 
                and basic computer science concepts.
              </p>
              <div className="edu-tags">
                <span className="tag-completed">Completed</span>
                <span className="tag-location">Sri Lanka</span>
              </div>
            </div>
          </motion.div>

          {/* Education Item 4 - Right */}
          <motion.div 
            className="edu-item-wrapper"
            variants={itemVariants}
          >
            <div className="edu-item">
              <div className="edu-item-header">
                <span className="edu-year">2022 – 2023</span>
                <span className="edu-badge">📝</span>
              </div>
              <h3>G.C.E. Ordinary Level</h3>
              <p className="edu-institution">2022 (2023)</p>
              <p className="edu-description">
                Completed secondary education with a strong foundation in mathematics, 
                sciences, and information technology.
              </p>
              <div className="edu-tags">
                <span className="tag-completed">Completed</span>
                <span className="tag-location">Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certificates Section with animations */}
        <motion.div 
          className="certificates-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="cert-header">
            <h3>📜 Certificates</h3>
          </div>

          <motion.div 
            className="cert-grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Certificate 1 */}
            <motion.div 
              className="cert-item"
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <div className="cert-icon">📄</div>
              <div className="cert-details">
                <h4>Foundation of Project Management</h4>
                <p className="cert-date">2026 Aug – Present</p>
                <span className="cert-description">
                  Learning project management fundamentals including agile methodologies, 
                  risk management, and stakeholder communication.
                </span>
                <button className="cert-btn" disabled>
                  View Certificate →
                </button>
              </div>
            </motion.div>

            {/* Certificate 2 */}
            <motion.div 
              className="cert-item"
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <div className="cert-icon">📄</div>
              <div className="cert-details">
                <h4>Python For Beginners</h4>
                <p className="cert-date">2025 Oct – 2025 Dec</p>
                <span className="cert-description">
                  Gained Python fundamentals including data types, functions, OOP, 
                  and hands-on practice with real-world projects.
                </span>
                <button 
                  className="cert-btn active"
                  onClick={() => setShowPdfModal(true)}
                >
                  View Certificate →
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <div className="pdf-modal-overlay" onClick={() => setShowPdfModal(false)}>
          <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h3>📄 Python For Beginners - Certificate</h3>
              <button className="pdf-modal-close" onClick={() => setShowPdfModal(false)}>
                ✕
              </button>
            </div>
            <div className="pdf-modal-body">
              <Document
                file="/Python_for_Beginners_E-Certificate.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<div className="pdf-loading">Loading PDF...</div>}
                error={<div className="pdf-error-container">
                  <div className="pdf-error-icon">⚠️</div>
                  <p className="pdf-error-text">Failed to load PDF. Please try again.</p>
                  <p className="pdf-error-hint">The PDF file might be corrupted or in an unsupported format.</p>
                  <button 
                    className="pdf-retry-btn"
                    onClick={() => {
                      setPdfError(false);
                      setNumPages(null);
                      setShowPdfModal(false);
                      setTimeout(() => setShowPdfModal(true), 100);
                    }}
                  >
                    Retry
                  </button>
                </div>}
              >
                {numPages && Array.from(new Array(numPages), (el, index) => (
                  <Page 
                    key={`page_${index + 1}`} 
                    pageNumber={index + 1} 
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="pdf-page"
                    width={Math.min(window.innerWidth - 120, 800)}
                  />
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}