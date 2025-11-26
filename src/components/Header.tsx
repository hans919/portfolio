import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.body.classList.toggle('dark-mode')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h2>Portfolio</h2>
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('tech-stack')}>Tech Stack</button></li>
            <li><button onClick={() => scrollToSection('certifications')}>Certifications</button></li>
          </ul>

          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
