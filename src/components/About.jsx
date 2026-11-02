function About() {
  return (
    <section
      className="section"
      id="about"
    >

      <div className="section-heading">

        <p className="eyebrow">
          ABOUT
        </p>

        <h2>
          Backend-minded, product-focused
        </h2>

        <p>
          I'm Swati Patil, a Computer Science student who works mostly in Java and Spring Boot, with MySQL
          and Firebase behind it. I've built a full-stack
          marketplace, a booking app, and a computer vision
          project, and I keep my problem-solving sharp on
          CodeChef and GeeksforGeeks.
        </p>

      </div>

      <div className="about-grid">

        <div className="about-card">
          <div className="card-icon">
            ⚙
          </div>

          <h3>
            Backend development
          </h3>

          <p>
            REST APIs with Spring Boot
            and Spring Data JPA.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">
            ▣
          </div>

          <h3>
            Android apps
          </h3>

          <p>
            Java and XML apps with
            Firebase and payments.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">
            🧩
          </div>

          <h3>
            DSA and OOP
          </h3>

          <p>
            1000+ problems solved on
            CodeChef, 250+ on GfG.
          </p>
        </div>

        <div className="about-card">
          <div className="card-icon">
            ☁
          </div>

          <h3>
            Cloud basics
          </h3>

          <p>
            Oracle Cloud certified in
            foundations and AI.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;
