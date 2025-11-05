import './Languages.css'

const Languages = () => {
  const languages = [
    { name: 'Tamil', proficiency: 'Native' },
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Hindi', proficiency: 'Basic' },
  ]

  return (
    <section id="languages" className="languages">
      <div className="container">
        <h2 className="section-title">Languages</h2>
        <div className="languages-list">
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className="language-proficiency">– {lang.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages

