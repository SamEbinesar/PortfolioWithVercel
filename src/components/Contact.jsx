import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>{' '}
              <a href="mailto:samebinesar2004@gmail.com">samebinesar2004@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Mobile:</strong>{' '}
              <a href="tel:+916383011956">+91 6383011956</a>
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Kollidam, Mayiladuthurai, TamilNadu
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/sam-it-2247202b6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/samebinesar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form action="https://formspree.io/f/meoaqnoy" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

