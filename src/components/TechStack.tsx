import { useData } from '../contexts/DataContext'
import './TechStack.css'

const TechStack = () => {
  const { data } = useData()
  const technologies = data.techStack

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none'
    const parent = e.currentTarget.parentElement
    if (parent) {
      const fallback = document.createElement('div')
      fallback.className = 'tech-icon-fallback'
      fallback.textContent = technologies.find(t => t.name === e.currentTarget.alt)?.name.charAt(0) || '?'
      parent.insertBefore(fallback, e.currentTarget)
    }
  }

  // Group technologies by category
  const groupedTech: { [key: string]: typeof technologies } = {
    'Frontend': technologies.filter(tech => tech.category === 'Frontend'),
    'Backend': technologies.filter(tech => tech.category === 'Backend' || tech.category === 'Database'),
    'DevOps & Cloud': technologies.filter(tech => tech.category === 'Cloud' || tech.category === 'DevOps' || tech.category === 'Tools')
  }

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="section-card">
        <div className="section-header">
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '18px', height: '18px', display: 'inline-block', marginRight: '6px', verticalAlign: 'middle'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
            Tech Stack
          </h2>
          <a href="#tech-stack" className="view-all-link">
            View All →
          </a>
        </div>
        
        {Object.entries(groupedTech).map(([category, techs]) => (
          techs.length > 0 && (
            <div key={category} className="tech-category">
              <h3 className="category-title">{category}</h3>
              <div className="tech-grid">
                {techs.map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="tech-badge">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="tech-icon"
                      onError={handleImageError}
                    />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  )
}

export default TechStack
