import './Education.css'

const Education = () => {
  const educationData = [
    {
      institution: 'Annamalai University',
      degree: 'Bachelor of Engineering in Information Technology',
      location: 'Annamalai Nagar, Chidambaram',
      period: 'Sep 2021 – May 2025',
      achievement: 'CGPA: 8.98 / 10.0',
    },
    {
      institution: 'Srinivasa Matric Hr Sec School',
      degree: '12th Standard',
      location: 'Kollidam, Mayiladuthurai',
      period: 'May 2021',
      achievement: 'Percentage: 89%',
    },
    {
      institution: 'Srinivasa Matric Hr Sec School',
      degree: '10th Standard',
      location: 'Kollidam, Mayiladuthurai',
      period: 'March 2019',
      achievement: 'Percentage: 82%',
    },
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-location">📍 {edu.location}</p>
                <p className="education-period">📅 {edu.period}</p>
                <p className="education-achievement">🎯 {edu.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

