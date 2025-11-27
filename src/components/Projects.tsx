import { useData } from '../contexts/DataContext'
import './Projects.css'

const Projects = () => {
  const { data } = useData()
  const projects = data.projects

  return (
    <section className="projects" id="projects">
      <div className="section-card">
        <div className="section-header">
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '18px', height: '18px', display: 'inline-block', marginRight: '6px', verticalAlign: 'middle'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
            Recent Projects
          </h2>
          <button className="read-more-link">View All →</button>
        </div>
        
        <div className="projects-list">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-item"
            >
              <div className="project-icon">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
