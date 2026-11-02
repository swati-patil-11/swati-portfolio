const projects = [
  {
    title: "BookMart",
    date: "Mar – May 2025",
    description:
      "Full-stack Android marketplace that blends retail e-commerce with peer-to-peer exchange, so students can buy and sell secondhand books.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Firebase",
      "Razorpay",
    ],
    github: null,
  },

  {
    title: "Playground Booking App",
    date: "Apr – May 2025",
    description:
      "Android app for booking sports facilities with real-time availability and Firebase Authentication. Timeslot logic prevents double bookings.",
    technologies: [
      "Android",
      "Java",
      "Firebase",
      "Firestore",
    ],
    github: null,
  },

  {
    title: "Sign Language to Text",
    date: "Apr – May 2025",
    description:
      "Real-time sign recognition using OpenCV and MediaPipe hand landmarks with a Random Forest classifier trained on a custom dataset.",
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "ML",
    ],
    github: null,
  },

  {
    title: "Turfly",
    date: "2026",
    description:
      "Online turf booking platform with authentication, turf availability, turf closures, booking management and Razorpay payment integration.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
    ],
    github: null,
  },
];

function Projects() {
  return (
    <section
      className="section"
      id="projects"
    >

      <div className="section-heading">

        <p className="eyebrow">
          PROJECTS
        </p>

        <h2>
          Selected work
        </h2>

        <p>
          Things I've designed and built end to end.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
          >

            <div className="project-header">

              <div className="project-icon">
                ◈
              </div>

              <span>
                {project.date}
              </span>

            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="project-tags">

              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="project-tag"
                >
                  {technology}
                </span>
              ))}

            </div>

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View project ↗
              </a>
            ) : (
              <span className="project-link">Repository link coming soon</span>
            )}

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;
