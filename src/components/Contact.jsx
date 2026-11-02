const contacts = [
  {
    label: "EMAIL",
    value: "swati.patil12@gmail.com",
    href: "mailto:swati.patil12@gmail.com",
    icon: "✉",
  },

  {
    label: "PHONE",
    value: "+91 98234 68176",
    href: "tel:+919823468176",
    icon: "☎",
  },

  {
    label: "LINKEDIN",
    value: "linkedin.com/in/swati-patil-11",
    href: "https://www.linkedin.com/in/swati-patil-11/",
    icon: "in",
  },

  {
    label: "GITHUB",
    value: "github.com/swati-patil-11",
    href: "https://github.com/swati-patil-11",
    icon: "⌁",
  },

  {
    label: "LEETCODE",
    value: "leetcode.com/u/swatii_11",
    href: "https://leetcode.com/u/swatii_11/",
    icon: "<>",
  },
];

function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
    >

      <div className="section-heading">

        <p className="eyebrow">
          CONTACT
        </p>

        <h2>
          Let's build something
        </h2>

        <p>
          Open to internships and entry-level backend or Android
          roles. Email is the fastest way to reach me.
        </p>

      </div>

      <div className="contact-grid">

        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            className="contact-card"
            target={
              contact.label === "EMAIL" ||
              contact.label === "PHONE"
                ? undefined
                : "_blank"
            }
            rel="noreferrer"
          >

            <div className="contact-icon">
              {contact.icon}
            </div>

            <div>

              <p className="contact-label">
                {contact.label}
              </p>

              <p className="contact-value">
                {contact.value}
              </p>

            </div>

          </a>
        ))}

      </div>

    </section>
  );
}

export default Contact;
