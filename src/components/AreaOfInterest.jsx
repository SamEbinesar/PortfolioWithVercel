import './AreaOfInterest.css'

const AreaOfInterest = () => {
  const interests = ['Programming', 'Music Composing – Pianist']

  return (
    <section id="interests" className="area-of-interest">
      <div className="container">
        <h2 className="section-title">Area of Interest</h2>
        <div className="interests-list">
          {interests.map((interest, index) => (
            <div key={index} className="interest-item">
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AreaOfInterest

