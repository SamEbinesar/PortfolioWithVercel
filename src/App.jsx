import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import TechnicalSkills from './components/TechnicalSkills'
import Certifications from './components/Certifications'
import Languages from './components/Languages'
import AreaOfInterest from './components/AreaOfInterest'
import SoftSkills from './components/SoftSkills'
import Declaration from './components/Declaration'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="App">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Education />
      <WorkExperience />
      <Projects />
      <TechnicalSkills />
      <Certifications />
      <Languages />
      <AreaOfInterest />
      <SoftSkills />
      <Declaration />
      <Contact />
    </div>
  )
}

export default App

