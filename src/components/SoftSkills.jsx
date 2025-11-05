import './SoftSkills.css'

const SoftSkills = () => {
  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Time Management',
    'Type Writing',
    'Communication',
  ]

  return (
    <section id="soft-skills" className="soft-skills">
      <div className="container">
        <h2 className="section-title">Soft Skills</h2>
        <div className="soft-skills-list">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills

