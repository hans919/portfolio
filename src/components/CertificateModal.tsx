import { useEffect } from 'react'
import './CertificateModal.css'

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  title: string
}

const CertificateModal = ({ isOpen, onClose, imageUrl, title }: CertificateModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="certificate-modal-overlay" onClick={onClose}>
      <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="certificate-modal-close" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="certificate-modal-image-wrapper">
          <img src={imageUrl} alt={title} className="certificate-modal-image" />
        </div>
        <p className="certificate-modal-title">{title}</p>
      </div>
    </div>
  )
}

export default CertificateModal
