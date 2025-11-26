import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useData } from '../../contexts/DataContext'
import './AdminForms.css'

const EditAbout = () => {
  const { data, updateAbout } = useData()
  const [formData, setFormData] = useState(data.about)
  const [newExpertise, setNewExpertise] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setFormData(data.about)
  }, [data.about])

  const handleSave = () => {
    try {
      updateAbout(formData)
      setSaved(true)
      toast.success('About section updated successfully!')
      setTimeout(() => setSaved(false), 2000)
    } catch (error) {
      toast.error('Failed to save changes. Please try again.')
    }
  }

  const addExpertise = () => {
    if (newExpertise.trim()) {
      setFormData({
        ...formData,
        expertise: [...formData.expertise, newExpertise.trim()]
      })
      setNewExpertise('')
    }
  }

  const removeExpertise = (index: number) => {
    const expName = formData.expertise[index]
    if (window.confirm(`Remove "${expName}" from expertise?`)) {
      const newFormData = {
        ...formData,
        expertise: formData.expertise.filter((_, i) => i !== index)
      }
      setFormData(newFormData)
      updateAbout(newFormData)
      toast.success(`"${expName}" removed successfully!`)
    }
  }

  return (
    <div className="admin-form">
      <div className="form-header">
        <h2>Edit About Section</h2>
        <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={handleSave}>
          {saved ? '✓ Saved' : 'Save Changes'}
        </button>
      </div>

      <div className="form-section">
        <label>Main Text</label>
        <textarea
          value={formData.mainText}
          onChange={(e) => setFormData({ ...formData, mainText: e.target.value })}
          rows={6}
          placeholder="Enter main about text (HTML supported)"
        />
      </div>

      <div className="form-section">
        <label>Expanded Text (Read More)</label>
        <textarea
          value={formData.expandedText}
          onChange={(e) => setFormData({ ...formData, expandedText: e.target.value })}
          rows={5}
          placeholder="Enter expanded about text"
        />
      </div>

      <div className="form-section">
        <label>Key Expertise</label>
        <div className="expertise-list">
          {formData.expertise.map((item, index) => (
            <div key={index} className="expertise-item">
              <span>{item}</span>
              <button onClick={() => removeExpertise(index)} className="remove-btn">×</button>
            </div>
          ))}
        </div>
        <div className="add-expertise">
          <input
            type="text"
            value={newExpertise}
            onChange={(e) => setNewExpertise(e.target.value)}
            placeholder="Add new expertise"
            onKeyPress={(e) => e.key === 'Enter' && addExpertise()}
          />
          <button onClick={addExpertise} className="add-btn">Add</button>
        </div>
      </div>
    </div>
  )
}

export default EditAbout
