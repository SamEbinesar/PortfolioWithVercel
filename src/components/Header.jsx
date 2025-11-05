import { useState } from 'react'
import './Header.css'

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>Sam Ebinesar S</span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

