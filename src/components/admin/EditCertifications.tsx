import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useData } from '../../contexts/DataContext'
import ConfirmModal from './ConfirmModal'
import './AdminForms.css'

interface Certification {
  title: string
  description: string
  link: string
}

const EditCertifications = () => {
  const { data, updateCertifications } = useData()
  const [certifications, setCertifications] = useState<Certification[]>(data.certifications)
  const [saved, setSaved] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<{ isOpen: boolean; index: number; name: string }>({
    isOpen: false,
    index: -1,
    name: ''
  })

  useEffect(() => {
    setCertifications(data.certifications)
  }, [data.certifications])

  const handleSave = () => {
    try {
      updateCertifications(certifications)
      setSaved(true)
      toast.success('Certifications updated successfully!')
      setTimeout(() => setSaved(false), 2000)
    } catch (error) {
      toast.error('Failed to save changes. Please try again.')
    }
  }

  const addCertification = () => {
    setCertifications([...certifications, { title: '', description: '', link: '#' }])
  }

  const removeCertification = (index: number) => {
    const certTitle = certifications[index].title || 'this certification'
    setConfirmDelete({ isOpen: true, index, name: certTitle })
  }

  const handleConfirmDelete = () => {
    const newCertifications = certifications.filter((_, i) => i !== confirmDelete.index)
    setCertifications(newCertifications)
    updateCertifications(newCertifications)
    toast.success(`${confirmDelete.name} deleted successfully!`)
    setConfirmDelete({ isOpen: false, index: -1, name: '' })
  }

  const updateItem = (index: number, field: keyof Certification, value: string) => {
    const updated = [...certifications]
    updated[index] = { ...updated[index], [field]: value }
    setCertifications(updated)
  }

  return (
    <div className="admin-form">
      <ConfirmModal
        isOpen={confirmDelete.isOpen}
        title="Delete Certification"
        message={`Are you sure you want to delete "${confirmDelete.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmDelete({ isOpen: false, index: -1, name: '' })}
      />
      <div className="form-header">
        <h2>Edit Certifications</h2>
        <div className="header-actions">
          <button className="add-btn" onClick={addCertification}>+ Add Certification</button>
          <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={handleSave}>
            {saved ? '✓ Saved' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="items-list">
        {certifications.map((cert, index) => (
          <div key={index} className="list-item">
            <div className="item-header">
              <h3>Certification {index + 1}</h3>
              <button onClick={() => removeCertification(index)} className="remove-btn">Delete</button>
            </div>
            <div className="item-form">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={cert.title}
                  onChange={(e) => updateItem(index, 'title', e.target.value)}
                  placeholder="Certification title"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={cert.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  rows={3}
                  placeholder="Certification description"
                />
              </div>
              <div className="form-group">
                <label>Link</label>
                <input
                  type="url"
                  value={cert.link}
                  onChange={(e) => updateItem(index, 'link', e.target.value)}
                  placeholder="Certificate link or #"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditCertifications
