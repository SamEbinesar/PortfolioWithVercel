import './TechnicalSkills.css'

const TechnicalSkills = () => {
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'C++'],
    frameworks: ['React.js'],
    databases: ['MySQL', 'Firebase'],
    devTools: ['Visual Studio Code', 'Git', 'Github'],
  }

  return (
    <section id="skills" className="technical-skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="skill-category-title">Languages:</h3>
            <div className="skill-tags">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Frameworks:</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Databases:</h3>
            <div className="skill-tags">
              {skills.databases.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Dev Tools:</h3>
            <div className="skill-tags">
              {skills.devTools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills

