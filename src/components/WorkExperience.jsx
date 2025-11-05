import './WorkExperience.css'

const WorkExperience = () => {
  const experience = {
    title: 'Full Stack Developer',
    company: 'KodNest Technologies',
    location: 'Remote – Bangalore, Karnataka',
    period: 'May 2025 – Now',
    responsibilities: [
      'Intensive Full Stack Development training covering frontend, backend and database integration.',
      'Worked with JDBC, Servlets and Spring Boot Frameworks',
      'Developed responsive web applications using HTML5, CSS3, JavaScript and ReactJS.',
      'Recently developed an E-commerce website using HTML5, CSS3, JavaScript and Firebase.',
    ],
  }

  return (
    <section id="experience" className="work-experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="experience-title">{experience.title}</h3>
            <h4 className="experience-company">{experience.company}</h4>
            <p className="experience-location">📍 {experience.location}</p>
            <p className="experience-period">📅 {experience.period}</p>
          </div>
          <ul className="experience-responsibilities">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

