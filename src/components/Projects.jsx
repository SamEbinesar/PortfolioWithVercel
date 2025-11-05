import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website - KSvegetables',
      period: 'May 2025 – Now',
      description: [
        'Developed an online vegetable ordering website using HTML, CSS, and JavaScript.',
        'Designed a responsive and user-friendly interface for easy navigation.',
        'Integrated Firebase for real-time database and secure data handling.',
        'Implemented user authentication and login using Firebase Authentication.',
        'Created dynamic product display and order management features.',
        'Built an admin panel for managing product details and customer orders.',
        'Hosted the complete project on GitHub Pages for public access.',
        'Ensured mobile responsiveness and cross-browser compatibility for a seamless user experience across devices.',
      ],
      link: 'https://samebinesar.github.io/KSVEGETABLES.com/',
    },
    {
      title: 'Portfolio Website',
      description: [
        'Designed and developed a fully responsive personal portfolio using HTML5, CSS3, and JavaScript, hosted on GitHub Pages.',
        'Showcases personal and academic projects with live links, featuring a clean UI layout and smooth scroll navigation.',
        'Built to highlight key skills including a dedicated About, Projects, and Contact section.',
        'Ensured mobile responsiveness and cross-browser compatibility for a seamless user experience across devices.',
        'In contact section, integrating Formspree to manage form submissions securely without using a backend.',
        'Deployed on GitHub pages via GitHub Actions',
      ],
      link: 'https://samebinesar.github.io/NewPort/',
    },
    {
      title: 'TaskBuddy - Web Task Manager',
      description: [
        'Developed TaskBuddy, a task management web application using React.js.',
        'Implemented features to add, edit, and delete tasks with real-time updates.',
        'Utilized React state management (useState, useEffect) for dynamic UI behavior.',
        'Designed a responsive and clean interface for better task organization.',
        'Hosted the project on GitHub Pages for public access.',
      ],
      link: 'https://samebinesar.github.io/Taskbuddy/',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              {project.period && <p className="project-period">📅 {project.period}</p>}
              <ul className="project-description">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Website →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

