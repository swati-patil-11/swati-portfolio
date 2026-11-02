function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">

      <div className="hero-glow"></div>

      <div className="hero-content">

        <div className="availability">
          <span></span>
          Open to internships & new grad roles
        </div>

        <h1>
          Swati Patil
        </h1>

        <h2>
          Java Developer · Spring Boot · Android
        </h2>

        <p className="hero-description">
          Computer Science student building backend services
          and Android applications. I like clean architecture,
          solid data structures, and shipping things that work
          end to end.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-button"
            onClick={() => scrollTo("projects")}
          >
            View projects
          </button>

          <button
            className="secondary-button"
            onClick={() => scrollTo("contact")}
          >
            Contact me
          </button>

          <a
            className="secondary-button"
            href="https://github.com/swati-patil-11"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;