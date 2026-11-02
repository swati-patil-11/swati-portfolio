const skillGroups = [
  {
    title: "LANGUAGES",
    skills: [
      "Java",
      "C",
      "C++",
      "Python",
      "SQL",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "BACKEND",
    skills: [
      "Spring Boot",
      "Spring Data JPA",
      "REST APIs",
      "Postman",
    ],
  },

  {
    title: "DATABASES",
    skills: [
      "MySQL",
      "Firebase Realtime DB",
      "Cloud Firestore",
    ],
  },

  {
    title: "MOBILE & TOOLS",
    skills: [
      "Android (Java, XML)",
      "Figma",
      "Git",
      "GitHub",
    ],
  },

  {
    title: "CORE CONCEPTS",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "Computer Networks",
      "Cloud Computing",
    ],
  },
];

function Skills() {
  return (
    <section
      className="section"
      id="skills"
    >

      <div className="section-heading">

        <p className="eyebrow">
          SKILLS
        </p>

        <h2>
          Tools I build with
        </h2>

        <p>
          A practical stack for backend and mobile work.
        </p>

      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div
            className="skill-card"
            key={group.title}
          >

            <p className="skill-title">
              {group.title}
            </p>

            <div className="skill-tags">

              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;