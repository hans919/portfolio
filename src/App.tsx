import './App.css'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Sidebar />
      <main className="main-content">
        <div className="mobile-sidebar">
          <Sidebar />
        </div>
        <div className="content-grid">
          <div className="left-column">
            <About />
            <Experience />
          </div>
          <div className="right-column">
            <Projects />
            <Certifications />
          </div>
        </div>
        <TechStack />
        <Footer />
      </main>
    </div>
  )
}

export default App
