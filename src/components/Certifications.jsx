import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Developer Intern',
      issuer: 'KodNest Technologies, Bangalore',
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      percentage: '72%',
      certificate: 'View Certificate',
    },
    {
      title: 'Affective Computing',
      issuer: 'NPTEL',
      percentage: '81%',
      certificate: 'View Certificate',
    },
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.percentage && (
                <p className="cert-percentage">Completed with {cert.percentage} percentage</p>
              )}
              {cert.certificate && (
                <span className="cert-link">{cert.certificate}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

