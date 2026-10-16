import { useState } from "react";
import "./App.css";

const skills = [
  { icon: "EX", name: "Microsoft Excel", detail: "Data cleaning & reports" },
  { icon: "SQL", name: "SQL / MySQL", detail: "Queries & databases" },
  { icon: "PY", name: "Python", detail: "Pandas & NumPy" },
  { icon: "BI", name: "Power BI", detail: "Dashboards & KPIs" },
];

const projects = [
  {
    number: "01",
    title: "Sales Analytics Dashboard",
    tools: ["Excel", "Power BI"],
    description:
      "Analyze sales trends, revenue performance and business KPIs.",
    type: "sales",
  },
  {
    number: "02",
    title: "SQL Business Analysis",
    tools: ["SQL", "MySQL"],
    description:
      "Explore business data with queries and identify useful insights.",
    type: "sql",
  },
  {
    number: "03",
    title: "Python Data Analysis",
    tools: ["Python", "Pandas"],
    description:
      "Clean, explore and visualize datasets to discover patterns.",
    type: "python",
  },
];

const certifications = [
  {
    name: "ADCA",
    provider: "Annexx Education",
    detail: "Completed April 2025",
  },
  {
    name: "Python Programming",
    provider: "Coding Seekho",
    detail: "Training listed on resume",
  },
];

function App() {
  const [activeProject, setActiveProject] = useState(null);

  function handleTilt(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.setProperty("--rotate-y", `${(x - 0.5) * 12}deg`);
    card.style.setProperty("--rotate-x", `${(0.5 - y) * 12}deg`);
  }

  function resetTilt(event) {
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
  }

  return (
    <main className="portfolio" id="home">
      <nav className="navbar">
        <a className="logo" href="#home" aria-label="Go to home">
          GK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content reveal">
          <p className="eyebrow">
            <span className="status-dot" />
            DATA ANALYTICS PORTFOLIO
          </p>

          <h1>
            Turning Data
            <br />
            Into <span className="gradient-text">Decisions.</span>
          </h1>

          <h2>Hi, I'm Gaurav Kumar.</h2>
          <p className="hero-role">Data Analyst | Fresher</p>

          <p className="hero-description">
            I work with data to explore patterns, create meaningful
            visualizations and communicate useful business insights.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              Explore Projects <span>↗</span>
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>73.50%</strong>
              <span>BCA Percentage</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Graduation Year</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Resume Projects</span>
            </div>
          </div>
        </div>

        <div className="visual-area">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div
            className="profile-card tilt-card"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="photo-frame">
              <img
                src="/profile.jpg"
                alt="Gaurav Kumar"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "grid";
                }}
              />
              <div className="photo-placeholder">GK</div>
            </div>

            <p className="profile-label">DATA ANALYST</p>
            <h3>Gaurav Kumar</h3>
            <p className="profile-subtitle">
              Turning numbers into insights.
            </p>

            <div className="profile-tags">
              <span>Excel</span>
              <span>SQL</span>
              <span>Python</span>
              <span>Power BI</span>
            </div>
          </div>

          <div className="floating-tag tag-top">⌘ SQL</div>
          <div className="floating-tag tag-bottom">◈ Python</div>
          <div className="floating-tag tag-side">▦ Power BI</div>
          <div className="floating-tag tag-excel">▤ Excel</div>
        </div>
      </section>

      <section className="section about-section reveal" id="about">
        <p className="section-label">01 / ABOUT ME</p>
        <h2>
          Curious mind.{" "}
          <span className="gradient-text">Analytical thinking.</span>
        </h2>
        <p className="section-description">
          I am a BCA graduate from Dr. C. V. Raman University, Vaishali, Bihar.
          My focus is on data cleaning, analysis, reporting and visualization
          using tools listed in my technical skills.
        </p>
      </section>

      <section className="section reveal" id="education">
        <p className="section-label">02 / EDUCATION</p>
        <h2>My academic background.</h2>

        <div className="education-card glass-card">
          <div className="education-icon">🎓</div>
          <div className="education-details">
            <p className="education-year">2026 · BCA</p>
            <h3>Bachelor of Computer Applications</h3>
            <p className="college-name">Dr. C. V. Raman University</p>
            <p className="college-location">Vaishali, Bihar</p>
          </div>
          <div className="percentage">
            <strong>73.50%</strong>
            <span>Overall Score</span>
          </div>
        </div>
      </section>

      <section className="section reveal" id="skills">
        <p className="section-label">03 / TOOLKIT</p>
        <h2>Technical skills.</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card glass-card" key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <p>{skill.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="projects">
        <p className="section-label">04 / SELECTED WORK</p>
        <h2>Projects & explorations.</h2>
        <p className="section-description">
          Three projects listed on my resume. Select a card to see its summary.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card glass-card tilt-card"
              key={project.number}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <span>↗</span>
              </div>

              <div className={`project-visual ${project.type}`}>
                {project.type === "sales" && (
                  <div className="mini-bars" aria-label="Decorative chart">
                    {[35, 65, 48, 82, 57, 95].map((height, index) => (
                      <span key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                )}

                {project.type === "sql" && (
                  <div className="code-visual">
                    <span>SELECT</span> revenue
                    <br />
                    <span>FROM</span> sales
                    <br />
                    <span>ORDER BY</span> date;
                  </div>
                )}

                {project.type === "python" && (
                  <div className="python-visual">
                    <span>Py</span>
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                )}
              </div>

              <p className="project-tool">{project.tools.join(" · ")}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <button
                type="button"
                className="text-button"
                onClick={() =>
                  setActiveProject(
                    activeProject === project.number ? null : project.number
                  )
                }
                aria-expanded={activeProject === project.number}
              >
                {activeProject === project.number
                  ? "Hide details ↑"
                  : "View project summary ↗"}
              </button>

              {activeProject === project.number && (
                <div className="project-details">
                  <p>
                    <strong>Tools:</strong> {project.tools.join(", ")}
                  </p>
                  <p>{project.description}</p>
                  <p className="detail-note">
                    Add your actual project files, screenshots or repository
                    link here when available.
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="certifications">
        <p className="section-label">05 / CERTIFICATIONS & TRAINING</p>
        <h2>Learning & development.</h2>

        <div className="skills-grid">
          {certifications.map((item) => (
            <article className="skill-card glass-card" key={item.name}>
              <span className="skill-icon">✦</span>
              <h3>{item.name}</h3>
              <p>{item.provider}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="note">
          Certificate files can be linked here after you add the genuine
          certificates to your public folder.
        </p>
      </section>

      <section className="section resume-section reveal" id="resume">
        <p className="section-label">06 / MY RESUME</p>
        <h2>Let's take the next step.</h2>
        <p className="section-description">
          Download my resume for details about my education, skills and projects.
        </p>

        <a
          className="btn primary-btn"
          href="/resume.pdf"
          download="Gaurav_Kumar_Resume.pdf"
        >
          Download Resume ↓
        </a>
      </section>

      <section className="contact-section reveal" id="contact">
        <p className="section-label">07 / GET IN TOUCH</p>
        <h2>
          Let's make data{" "}
          <span className="gradient-text">meaningful.</span>
        </h2>
        <p className="contact-description">
          Have a job opportunity or a project to discuss? Feel free to connect.
        </p>

        <a
          className="btn primary-btn"
          href="mailto:Gauravsinghh52@gmail.com"
        >
          Email Me ↗
        </a>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/gauravssingh43/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/gauravsinghh52"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>

        <p className="email-address">Gauravsinghh52@gmail.com</p>
      </section>

      <footer>
        <a className="logo" href="#home">
          GK<span>.</span>
        </a>
        <p>Gaurav Kumar · Data Analytics Portfolio · © 2026</p>
      </footer>
    </main>
  );
}

export default App;