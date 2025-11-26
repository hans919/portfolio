import { useState } from 'react'
import { useData } from '../contexts/DataContext'
import './About.css'

const About = () => {
  const [showMore, setShowMore] = useState(false)
  const { data } = useData()
  const { about } = data

  return (
    <section className="about" id="about">
      <div className="section-card">
        <div className="section-header">
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: '18px', height: '18px', display: 'inline-block', marginRight: '6px', verticalAlign: 'middle'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            About
          </h2>
          <button className="read-more-link" onClick={() => setShowMore(!showMore)}>
            Read More →
          </button>
        </div>          <div className="about-text">
            <p dangerouslySetInnerHTML={{ __html: about.mainText }} />
            
            {showMore && (
              <p className="more-text">
                {about.expandedText}
              </p>
            )}
          </div>

          <div className="expertise">
            <h3>Key Expertise</h3>
            <div className="expertise-tags">
              {about.expertise.map((exp, index) => (
                <span key={index} className="tag">{exp}</span>
              ))}
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
