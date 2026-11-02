const certificates = [
  {
    title: "Java Programming",
    organization: "GeeksforGeeks",
    year: "2025",
    description:
      "Java programming fundamentals and problem solving.",
    link: null,
  },

  {
    title: "Java for Beginners",
    organization: "IBM",
    year: "2025",
    description:
      "Foundational Java programming concepts.",
    link: null,
  },

  {
    title: "Android Virtual Internship",
    organization: "AICTE & Google",
    year: "2025",
    description:
      "Android development and application building.",
    link: null,
  },

  {
    title: "Spring Boot",
    organization: "CodeChef",
    year: "2025",
    description:
      "Spring Boot and backend application development.",
    link: null,
  },

  {
    title: "Git & GitHub",
    organization: "CodeChef",
    year: "2025",
    description:
      "Git version control and GitHub workflows.",
    link: null,
  },

  {
    title: "Oracle Cloud Infrastructure",
    organization: "Oracle",
    year: "2025",
    description:
      "Certified Foundations Associate and AI Foundations Associate.",
    link: null,
  },
];

function Certificates() {
  return (
    <section
      className="section"
      id="certificates"
    >

      <div className="section-heading">

        <p className="eyebrow">
          CREDENTIALS
        </p>

        <h2>
          Recognition and certifications
        </h2>

        <p>
          Certifications and achievements from my learning journey.
        </p>

      </div>

      <div className="certificates-grid">

        {certificates.map((certificate) => (
          <article
            className="certificate-card"
            key={certificate.title}
          >

            <div className="certificate-icon">
              ✓
            </div>

            <div className="certificate-content">

              <div className="certificate-year">
                {certificate.year}
              </div>

              <h3>
                {certificate.title}
              </h3>

              <p className="certificate-org">
                {certificate.organization}
              </p>

              <p>
                {certificate.description}
              </p>

              {certificate.link ? (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link"
                >
                  View certificate ↗
                </a>
              ) : (
                <span className="certificate-link">Certificate link coming soon</span>
              )}

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Certificates;
