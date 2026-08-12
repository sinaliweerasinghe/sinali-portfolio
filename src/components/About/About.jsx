import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './About.css';
import MyPhoto2 from '../../assets/My2.png?url';

// PDF worker configuration
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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

  // Handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Sinali_Weerasingha.pdf';
    link.download = 'Sinali_Weerasingha_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      {/* Decorative Elements */}
      <div className="about-decoration">
        <div className="about-gold-line"></div>
        <div className="about-gold-line-2"></div>
        <div className="about-sparkle sparkle-1">✦</div>
        <div className="about-sparkle sparkle-2">✦</div>
        <div className="about-sparkle sparkle-3">✦</div>
        <div className="about-red-blob about-red-blob-1"></div>
        <div className="about-red-blob about-red-blob-2"></div>
        <div className="about-red-blob about-red-blob-3"></div>
        <div className="about-accent-circle about-accent-circle-1"></div>
        <div className="about-accent-circle about-accent-circle-2"></div>
      </div>

      <div className="about-container">
        {/* Left Side - Arc Shape Image */}
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="arc-container">
            <div className="arc-shape">
              <img src={MyPhoto2} alt="Sinali Weerasingha" className="about-image" />
            </div>
            {/* Decorative arc lines */}
            <div className="arc-line arc-line-1"></div>
            <div className="arc-line arc-line-2"></div>
            <div className="arc-line arc-line-3"></div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span 
            className="about-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            👋 About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="gradient-text">Creative Developer</span> & Problem Solver
          </motion.h2>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            I'm Sinali Weerasingha, an enthusiastic undergraduate with a passion for 
            full-stack development, UI/UX design, and 3D graphics. I love creating 
            innovative solutions that bridge the gap between design and technology.
          </motion.p>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Currently exploring the intersection of web development and interactive 
            experiences. My goal is to build meaningful applications that make a 
            positive impact on users' lives.
          </motion.p>

          {/* Personal Details & Social Links */}
          <motion.div 
            className="about-details"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="detail-item">
              <span className="detail-label">📍 Location</span>
              <span className="detail-value">Colombo, Sri Lanka</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🎓 Education</span>
              <span className="detail-value">Undergraduate</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">💼 Experience</span>
              <span className="detail-value">Freelance Developer</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📧 Email</span>
              <span className="detail-value">sinaliweerasingha@example.com</span>
            </div>
          </motion.div>

          {/* Social & Action Buttons */}
          <motion.div 
            className="about-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <button className="btn-cv" onClick={() => setShowPdfModal(true)}>
              <span>📄</span> Preview CV
            </button>
            
            <div className="social-links">
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
        </motion.div>
      </div>

      {/* PDF Modal - CV Preview */}
      {showPdfModal && (
        <div className="pdf-modal-overlay" onClick={() => setShowPdfModal(false)}>
          <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h3>📄 Sinali Weerasingha - CV</h3>
              <div className="pdf-modal-actions">
                <button className="pdf-download-btn" onClick={handleDownloadCV}>
                  ⬇️ Download
                </button>
                <button className="pdf-modal-close" onClick={() => setShowPdfModal(false)}>
                  ✕
                </button>
              </div>
            </div>
            <div className="pdf-modal-body">
              {pdfError ? (
                <div className="pdf-error-container">
                  <div className="pdf-error-icon">⚠️</div>
                  <p className="pdf-error-text">Failed to load PDF. Please try again.</p>
                  <p className="pdf-error-hint">Make sure the PDF file exists in the public folder.</p>
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
                </div>
              ) : (
                <Document
                  file="/Sinali_Weerasingha.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={<div className="pdf-loading">Loading CV...</div>}
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
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}