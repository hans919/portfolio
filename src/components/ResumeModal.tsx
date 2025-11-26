import { useState } from 'react'
import './ResumeModal.css'
import { useData } from '../contexts/DataContext'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const { data } = useData()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 2

  if (!isOpen) return null

  const handleDownload = () => {
    const resumeUrl = data.personalInfo?.resumePdf || '/IT 425-FINAL EXAM.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = `${data.personalInfo?.name || 'Resume'}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3 className="resume-title">Resume</h3>
          <button className="resume-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="resume-viewer">
          <iframe
            src={`${data.personalInfo?.resumePdf || '/IT 425-FINAL EXAM.pdf'}#page=${currentPage}`}
            title="Resume"
            className="resume-iframe"
          />
        </div>
        <div className="resume-modal-footer">
          <button
            className="resume-nav-btn"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          <span className="resume-page-info">
            {currentPage} of {totalPages}
          </span>
          <button
            className="resume-nav-btn"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
          <button className="resume-download-btn" onClick={handleDownload}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResumeModal
