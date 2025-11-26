import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h3 className="subtitle">Frontend Software Engineer.</h3>
            <h1 className="hero-title">
              John Doe
              <span className="verified">✓</span>
            </h1>
            <p className="hero-location">📍 Your City, Country</p>
            
            <div className="hero-actions">
              <a href="mailto:your.email@example.com" className="btn btn-primary">
                ✉️ Send Email
              </a>
              <a href="#resume" className="btn btn-secondary">View Resume</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                💼 LinkedIn
              </a>
            </div>

            <div className="summary-stats">
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Years of Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">18</div>
                <div className="stat-label">Technology Stack</div>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-image">
              <img src="https://via.placeholder.com/300" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
