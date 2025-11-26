import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useData } from '../../contexts/DataContext'
import './AdminForms.css'

const EditPersonalInfo = () => {
  const { data, updatePersonalInfo } = useData()
  const [formData, setFormData] = useState(data.personalInfo || {
    name: '',
    email: '',
    profilePicture: '',
    resumePdf: '',
    facebook: '',
    github: ''
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (data.personalInfo) {
      setFormData(data.personalInfo)
    }
  }, [data.personalInfo])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, field: 'profilePicture' | 'resumePdf') => {
    const file = event.target.files?.[0]
    if (file) {
      // Check file size - 5MB for images, 10MB for PDFs
      const maxSize = field === 'profilePicture' ? 5 * 1024 * 1024 : 10 * 1024 * 1024
      const maxSizeLabel = field === 'profilePicture' ? '5MB' : '10MB'
      
      if (file.size > maxSize) {
        toast.error(`File size must be less than ${maxSizeLabel}`)
        event.target.value = '' // Reset the input
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setFormData({ ...formData, [field]: result })
        toast.success(`${field === 'profilePicture' ? 'Profile picture' : 'Resume'} uploaded successfully!`)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    try {
      updatePersonalInfo(formData)
      setSaved(true)
      toast.success('Personal information updated successfully!')
      setTimeout(() => setSaved(false), 2000)
    } catch (error) {
      toast.error('Failed to save changes. Please try again.')
    }
  }

  return (
    <div className="admin-form">
      <div className="form-header">
        <h2>Edit Personal Information</h2>
        <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={handleSave}>
          {saved ? '✓ Saved' : 'Save Changes'}
        </button>
      </div>

      <div className="form-section">
        <label>Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="John Doe"
        />
      </div>

      <div className="form-section">
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="form-section">
        <label>Profile Picture URL</label>
        <input
          type="url"
          value={formData.profilePicture}
          onChange={(e) => setFormData({ ...formData, profilePicture: e.target.value })}
          placeholder="https://example.com/profile.jpg"
        />
        <div style={{ marginTop: '8px' }}>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="profilePictureUpload"
            style={{ display: 'none' }}
            onChange={(e) => handleFileUpload(e, 'profilePicture')}
          />
          <button
            type="button"
            onClick={() => document.getElementById('profilePictureUpload')?.click()}
            style={{
              padding: '8px 16px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            Upload Image
          </button>
        </div>
        <small style={{ display: 'block', marginTop: '4px', color: '#6b7280' }}>Enter URL or upload an image file</small>
      </div>

      <div className="form-section">
        <label>Resume PDF Link</label>
        <input
          type="url"
          value={formData.resumePdf}
          onChange={(e) => setFormData({ ...formData, resumePdf: e.target.value })}
          placeholder="https://drive.google.com/file/d/..."
        />
        <div style={{ marginTop: '8px' }}>
          <input
            type="file"
            accept=".pdf"
            id="resumePdfUpload"
            style={{ display: 'none' }}
            onChange={(e) => handleFileUpload(e, 'resumePdf')}
          />
          <button
            type="button"
            onClick={() => document.getElementById('resumePdfUpload')?.click()}
            style={{
              padding: '8px 16px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '16px', height: '16px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            Upload PDF
          </button>
        </div>
        <small style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
          Enter URL or upload a PDF file
        </small>
      </div>

      <div className="form-section">
        <label>Facebook Profile URL</label>
        <input
          type="url"
          value={formData.facebook}
          onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
          placeholder="https://facebook.com/yourprofile"
        />
      </div>

      <div className="form-section">
        <label>GitHub Profile URL</label>
        <input
          type="url"
          value={formData.github}
          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          placeholder="https://github.com/yourusername"
        />
      </div>
    </div>
  )
}

export default EditPersonalInfo
