import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useData } from '../../contexts/DataContext'
import ConfirmModal from './ConfirmModal'
import './AdminForms.css'

interface ExperienceItem {
  title: string
  company: string
  period: string
  type: 'work' | 'education'
}

const EditExperience = () => {
  const { data, updateExperience } = useData()
  const [experiences, setExperiences] = useState<ExperienceItem[]>(data.experience)
  const [saved, setSaved] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<{ isOpen: boolean; index: number; name: string }>({
    isOpen: false,
    index: -1,
    name: ''
  })

  useEffect(() => {
    setExperiences(data.experience)
  }, [data.experience])

  const handleSave = () => {
    try {
      updateExperience(experiences)
      setSaved(true)
      toast.success('Experience updated successfully!')
      setTimeout(() => setSaved(false), 2000)
    } catch (error) {
      toast.error('Failed to save changes. Please try again.')
    }
  }

  const addExperience = () => {
    setExperiences([...experiences, { title: '', company: '', period: '', type: 'work' }])
  }

  const removeExperience = (index: number) => {
    const expTitle = experiences[index].title || 'this entry'
    setConfirmDelete({ isOpen: true, index, name: expTitle })
  }

  const handleConfirmDelete = () => {
    const newExperiences = experiences.filter((_, i) => i !== confirmDelete.index)
    setExperiences(newExperiences)
    updateExperience(newExperiences)
    toast.success(`${confirmDelete.name} deleted successfully!`)
    setConfirmDelete({ isOpen: false, index: -1, name: '' })
  }

  const updateItem = (index: number, field: keyof ExperienceItem, value: string) => {
    const updated = [...experiences]
    updated[index] = { ...updated[index], [field]: value }
    setExperiences(updated)
  }

  return (
    <div className="admin-form">
      <ConfirmModal
        isOpen={confirmDelete.isOpen}
        title="Delete Experience"
        message={`Are you sure you want to delete "${confirmDelete.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmDelete({ isOpen: false, index: -1, name: '' })}
      />
      <div className="form-header">
        <h2>Edit Experience</h2>
        <div className="header-actions">
          <button className="add-btn" onClick={addExperience}>+ Add Experience</button>
          <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={handleSave}>
            {saved ? '✓ Saved' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="items-list">
        {experiences.map((exp, index) => (
          <div key={index} className="list-item">
            <div className="item-header">
              <h3>{exp.type === 'work' ? 'Work' : 'Education'} {index + 1}</h3>
              <button onClick={() => removeExperience(index)} className="remove-btn">Delete</button>
            </div>
            <div className="item-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={exp.title}
                    onChange={(e) => updateItem(index, 'title', e.target.value)}
                    placeholder="Job title or degree"
                  />
                </div>
                <div className="form-group">
                  <label>Company/Institution</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateItem(index, 'company', e.target.value)}
                    placeholder="Company or university name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Period</label>
                  <input
                    type="text"
                    value={exp.period}
                    onChange={(e) => updateItem(index, 'period', e.target.value)}
                    placeholder="JAN 2020 - DEC 2023"
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    value={exp.type}
                    onChange={(e) => updateItem(index, 'type', e.target.value)}
                  >
                    <option value="work">Work</option>
                    <option value="education">Education</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditExperience
