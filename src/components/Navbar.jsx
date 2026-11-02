import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("about");

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <button
          className="logo"
          onClick={() => scrollTo("about")}
        >
          <span className="logo-dot"></span>
          swati.dev
        </button>

        <nav className="nav-links">

          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={
                active === section.id
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {section.label}
            </button>
          ))}

        </nav>

        <button
          className="talk-button"
          onClick={() => scrollTo("contact")}
        >
          Let's talk
        </button>

      </div>
    </header>
  );
}

export default Navbar;