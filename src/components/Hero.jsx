import './Hero.css'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-subtitle">FULL STACK DEVELOPER</span>
            </h1>
            <div className="hero-info">
              <p className="location">📍 Location: Kollidam, Mayiladuthurai, TamilNadu</p>
              <p className="email">📧 Email: <a href="mailto:samebinesar2004@gmail.com">samebinesar2004@gmail.com</a></p>
              <p className="mobile">📱 Mobile: <a href="tel:+916383011956">+91 6383011956</a></p>
            </div>
            <p className="hero-description">
              Motivated and detail-oriented Full Stack Developer, currently doing Full Stack development intern at KodNest Technologies,
              gaining hands-on experience in both front-end and back-end technologies. Proficient in HTML, CSS, JavaScript, React, Java,
              Spring Boot, and SQL with practical exposure to real-time projects. Eager to contribute to dynamic development teams and
              continuously learn and grow in the software development field.
            </p>
            <div className="hero-buttons">
              <a
                href="https://www.linkedin.com/in/sam-it-2247202b6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/samebinesar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                GitHub
              </a>
              <a
                href="Sam_Resume (1).pdf"
                download
                className="btn btn-outline"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

