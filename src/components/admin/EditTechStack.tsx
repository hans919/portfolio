import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useData } from '../../contexts/DataContext'
import ConfirmModal from './ConfirmModal'
import './AdminForms.css'

interface Tech {
  name: string
  icon: string
  category: string
}

const EditTechStack = () => {
  const { data, updateTechStack } = useData()
  const [techStack, setTechStack] = useState<Tech[]>(data.techStack)
  const [saved, setSaved] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<{ isOpen: boolean; index: number; name: string }>({
    isOpen: false,
    index: -1,
    name: ''
  })

  useEffect(() => {
    setTechStack(data.techStack)
  }, [data.techStack])

  const handleIconUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0]
    if (file) {
      const maxSize = 5 * 1024 * 1024 // 5MB
      if (file.size > maxSize) {
        toast.error('Image size must be less than 5MB')
        event.target.value = ''
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        updateItem(index, 'icon', result)
        toast.success('Tech icon uploaded successfully!')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    try {
      updateTechStack(techStack)
      setSaved(true)
      toast.success('Tech stack updated successfully!')
      setTimeout(() => setSaved(false), 2000)
    } catch (error) {
      toast.error('Failed to save changes. Please try again.')
    }
  }

  const addTech = () => {
    setTechStack([...techStack, { name: '', icon: '', category: 'Frontend' }])
  }

  const removeTech = (index: number) => {
    const techName = techStack[index].name || 'this technology'
    setConfirmDelete({ isOpen: true, index, name: techName })
  }

  const handleConfirmDelete = () => {
    const newTechStack = techStack.filter((_, i) => i !== confirmDelete.index)
    setTechStack(newTechStack)
    updateTechStack(newTechStack)
    toast.success(`${confirmDelete.name} removed successfully!`)
    setConfirmDelete({ isOpen: false, index: -1, name: '' })
  }

  const updateItem = (index: number, field: keyof Tech, value: string) => {
    const updated = [...techStack]
    updated[index] = { ...updated[index], [field]: value }
    setTechStack(updated)
  }

  return (
    <div className="admin-form">
      <ConfirmModal
        isOpen={confirmDelete.isOpen}
        title="Remove Technology"
        message={`Are you sure you want to remove "${confirmDelete.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmDelete({ isOpen: false, index: -1, name: '' })}
      />
      <div className="form-header">
        <h2>Edit Tech Stack</h2>
        <div className="header-actions">
          <button className="add-btn" onClick={addTech}>+ Add Technology</button>
          <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={handleSave}>
            {saved ? '✓ Saved' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="items-list tech-grid-admin">
        {techStack.map((tech, index) => (
          <div key={index} className="list-item tech-item">
            <div className="item-header">
              <h3>{tech.name || `Tech ${index + 1}`}</h3>
              <button onClick={() => removeTech(index)} className="remove-btn">×</button>
            </div>
            <div className="item-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={tech.name}
                  onChange={(e) => updateItem(index, 'name', e.target.value)}
                  placeholder="REACT"
                />
              </div>
              <div className="form-group">
                <label>Icon URL</label>
                <input
                  type="url"
                  value={tech.icon}
                  onChange={(e) => updateItem(index, 'icon', e.target.value)}
                  placeholder="https://cdn.jsdelivr.net/..."
                />
                <div style={{ marginTop: '8px' }}>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    id={`techIcon${index}`}
                    style={{ display: 'none' }}
                    onChange={(e) => handleIconUpload(e, index)}
                  />
                  <button
                    type="button"
                    onClick={() => document.getElementById(`techIcon${index}`)?.click()}
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
                    Upload Icon
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={tech.category}
                  onChange={(e) => updateItem(index, 'category', e.target.value)}
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Database">Database</option>
                  <option value="Tools">Tools</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditTechStack
