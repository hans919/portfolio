import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useData } from '../../contexts/DataContext'
import ConfirmModal from './ConfirmModal'
import './AdminForms.css'

interface Project {
  title: string
  description: string
  link: string
  image: string
}

const EditProjects = () => {
  const { data, updateProjects } = useData()
  const [projects, setProjects] = useState<Project[]>(data.projects)
  const [saved, setSaved] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<{ isOpen: boolean; index: number; name: string }>({
    isOpen: false,
    index: -1,
    name: ''
  })

  useEffect(() => {
    setProjects(data.projects)
  }, [data.projects])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
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
        updateProject(index, 'image', result)
        toast.success('Project icon uploaded successfully!')
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    try {
      updateProjects(projects)
      setSaved(true)
      toast.success('Projects updated successfully!')
      setTimeout(() => setSaved(false), 2000)
    } catch (error) {
      toast.error('Failed to save changes. Please try again.')
    }
  }

  const addProject = () => {
    setProjects([...projects, { title: '', description: '', link: '', image: '' }])
  }

  const removeProject = (index: number) => {
    const projectName = projects[index].title || 'this project'
    setConfirmDelete({ isOpen: true, index, name: projectName })
  }

  const handleConfirmDelete = () => {
    const newProjects = projects.filter((_, i) => i !== confirmDelete.index)
    setProjects(newProjects)
    updateProjects(newProjects)
    toast.success(`${confirmDelete.name} deleted successfully!`)
    setConfirmDelete({ isOpen: false, index: -1, name: '' })
  }

  const updateProject = (index: number, field: keyof Project, value: string) => {
    const updated = [...projects]
    updated[index] = { ...updated[index], [field]: value }
    setProjects(updated)
  }

  return (
    <div className="admin-form">
      <ConfirmModal
        isOpen={confirmDelete.isOpen}
        title="Delete Project"
        message={`Are you sure you want to delete "${confirmDelete.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmDelete({ isOpen: false, index: -1, name: '' })}
      />
      <div className="form-header">
        <h2>Edit Projects</h2>
        <div className="header-actions">
          <button className="add-btn" onClick={addProject}>+ Add Project</button>
          <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={handleSave}>
            {saved ? '✓ Saved' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="items-list">
        {projects.map((project, index) => (
          <div key={index} className="list-item">
            <div className="item-header">
              <h3>Project {index + 1}</h3>
              <button onClick={() => removeProject(index)} className="remove-btn">Delete</button>
            </div>
            <div className="item-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                    placeholder="Project title"
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    value={project.description}
                    onChange={(e) => updateProject(index, 'description', e.target.value)}
                    placeholder="Short description"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Link</label>
                  <input
                    type="url"
                    value={project.link}
                    onChange={(e) => updateProject(index, 'link', e.target.value)}
                    placeholder="https://..."
                  />
                </div>
                <div className="form-group">
                  <label>Icon URL</label>
                  <input
                    type="url"
                    value={project.image}
                    onChange={(e) => updateProject(index, 'image', e.target.value)}
                    placeholder="https://cdn.jsdelivr.net/..."
                  />
                  <div style={{ marginTop: '8px' }}>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      id={`projectIcon${index}`}
                      style={{ display: 'none' }}
                      onChange={(e) => handleImageUpload(e, index)}
                    />
                    <button
                      type="button"
                      onClick={() => document.getElementById(`projectIcon${index}`)?.click()}
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EditProjects
