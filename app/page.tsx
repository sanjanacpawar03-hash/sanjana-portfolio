"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  BarChart3,
  BrainCircuit,
  MapPin,
  Sparkles,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  Terminal,
  LineChart,
  FileSpreadsheet,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "sanjanacpawar03@gmail.com";

const GITHUB =
  "https://github.com/sanjanacpawar03-hash";

const LINKEDIN =
  "https://www.linkedin.com/in/sanjana-chandrakanth-pawar-180997371/";

const skills = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "Java", "C", "SQL", "JavaScript"],
  },
  {
    title: "Data Analytics & BI",
    icon: BarChart3,
    items: ["Power BI", "Advanced Excel", "Pandas", "NumPy", "Plotly"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    items: [
      "Machine Learning",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "NLP",
      "SHAP",
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "React.js", "Angular"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    items: ["Python", "Flask", "FastAPI", "Node.js", "MySQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Streamlit",
      "Power BI Desktop",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "Clinic Waiting Time Analysis & Prediction",
    type: "DATA SCIENCE & MACHINE LEARNING",
    description:
      "A data-driven application designed to analyze clinic waiting times and predict patient waiting duration. The project uses machine learning to identify patterns and provide useful insights through an interactive dashboard.",
    stack: [
      "Python",
      "Streamlit",
      "FastAPI",
      "SQLite",
      "Pandas",
      "NumPy",
      "Plotly",
      "Scikit-learn",
      "SHAP",
    ],
    github:
      "https://github.com/sanjanacpawar03-hash/clinic-waiting-time-analysis",
    icon: LineChart,
  },
  {
    number: "02",
    name: "Multimodal Hateful Meme Detection",
    type: "AI & DEEP LEARNING",
    description:
      "A multimodal classification project combining image and text analysis to identify hateful memes. It uses ResNet-50 for image feature extraction and BERT for text understanding, with a Flask-based web application.",
    stack: [
      "Python",
      "ResNet-50",
      "BERT",
      "Deep Learning",
      "NLP",
      "Flask",
    ],
    github:
      "https://github.com/sanjanacpawar03-hash/multimodal-hateful-meme-detection",
    icon: BrainCircuit,
  },
];

const education = [
  {
    course: "Master of Computer Applications (MCA)",
    institute:
      "Bapuji Institute of Engineering & Technology, Davangere",
    detail: "CGPA: 8.0 / 10",
    duration: "2024 – 2026",
  },
  {
    course: "Bachelor of Computer Applications (BCA)",
    institute: "Global Innovative College of BCA, Hubballi",
    detail: "CGPA: 8.43 / 10",
    duration: "2021 – 2024",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reveal}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Heading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tag-list">
      {items.map((item) => (
        <span className="tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

const certifications = [
  {
    title: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Microsoft · Coursera",
    date: "June 25, 2026",
    category: "Microsoft Excel",
    file: "/certifications/Preparing%20Data%20for%20Analysis%20with%20Microsoft%20Excel.pdf",
  },
  {
    title: "Harnessing the Power of Data with Power BI",
    issuer: "Microsoft · Coursera",
    date: "July 7, 2026",
    category: "Power BI",
    file: "/certifications/Harnessing%20The%20Power%20of%20Data%20with%20PowerBI.pdf",

  },
  {
    title: "Extract, Transform and Load Data in Power BI",
    issuer: "Microsoft · Coursera",
    date: "July 14, 2026",
    category: "Power Query & ETL",
    file: "/certifications/Extract%2C%20Transform%20and%20Load%20Data%20in%20Power%20BI.pdf",
  },
  {
    title: "Data Modeling in Power BI",
    issuer: "Microsoft · Coursera",
    date: "July 26, 2026",
    category: "Data Modeling",
    file: "/certifications/Data%20Modeling%20in%20Power%20BI.pdf",
  },
  {
    title: "Data Analysis and Visualization with Power BI",
    issuer: "Microsoft · Coursera",
    date: "August 8, 2026",
    category: "Data Analytics",
    file: "/certifications/Data%20Modeling%20in%20Power%20BI.pdf",
  },
  {
    title: "Creative Designing in Power BI",
    issuer: "Microsoft · Coursera",
    date: "August 15, 2026",
    category: "Data Visualization",
    file: "/certifications/Creative%20Designing%20in%20Power%20BI.pdf",
  },
  {
    title: "Microsoft PL-300 Exam Preparation and Practice",
    issuer: "Microsoft · Coursera",
    date: "August 15, 2026",
    category: "PL-300 Preparation",
    file: "/certifications/Microsoft%20PL-300%20Exam%20Preparation%20and%20Practice.pdf",
  },
];


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="grid-bg" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />

      {/* NAVIGATION */}

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          SC<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            "About",
            "Skills",
            "Projects",
            "Certifications",
            "Education",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a className="nav-cta" href={`mailto:${EMAIL}`}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="pulse" />
            OPEN TO OPPORTUNITIES
          </motion.div>

          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            Sanjana <span>Chandrakanth Pawar.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.8 }}
          >
            Turning data into insights.
            <br />
            <em>Building with technology.</em>
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
          >
            MCA graduate with an interest in Data Science,
            Data Analytics and software development.
            I enjoy exploring data, building intelligent
            applications and transforming ideas into
            practical solutions.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a className="button button-ghost" href="#contact">
              Get in touch
            </a>
          </motion.div>

          <div className="hero-socials">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a href={`mailto:${EMAIL}`} aria-label="Email">
              <Mail />
            </a>

            <span className="social-line" />
            <span className="social-label">HUBBALLI, INDIA</span>
          </div>
        </div>

        {/* PROFILE IMAGE */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.45, duration: 1, ease: "easeOut" }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <motion.div
            className="photo-frame"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="photo-topline">
              <span>PROFILE / 001</span>
              <span>2026</span>
            </div>

            <div className="photo-placeholder">
              <Image
                src="/profile.png"
                alt="Sanjana Pawar"
                className="profile-photo"
                width={600}
                height={750}
                priority
              />
            </div>

            <div className="photo-bottomline">
              <span>SANJANA CHANDRAKANTH PAWAR</span>
              <span>ANALYST · DEVELOPER</span>
            </div>
          </motion.div>

          <motion.div
            className="floating-note note-top"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity }}
          >
            <Sparkles size={15} /> Curious by nature
          </motion.div>

          <motion.div
            className="floating-note note-bottom"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Terminal size={15} /> Always learning
          </motion.div>

          <div className="hero-index">01 — 05</div>
        </motion.div>

        <a className="scroll-cue" href="#about">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </a>

        <div className="hero-side-label">
          PORTFOLIO · 2026
        </div>
      </section>

      {/* ABOUT */}

      <section
        className="section-wrap section-block"
        id="about"
      >
        <Reveal>
          <Heading
            eyebrow="A LITTLE ABOUT ME"
            title={
              <>
                Curiosity meets <span>creation.</span>
              </>
            }
          />
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="large-copy">
              I'm an MCA graduate interested in understanding
              data, solving problems and building useful
              technology-driven solutions.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="about-detail">
              <p>
                My interests include Data Science, Data
                Analytics, Machine Learning and web
                development. I enjoy working with Python,
                SQL, Power BI and modern web technologies.
              </p>

              <p>
                Through academic projects and internships,
                I have gained practical exposure to data
                analysis, predictive modelling, dashboards
                and application development.
              </p>

              <div className="about-facts">
                <div>
                  <span>01</span>
                  <strong>Data Science & Analytics</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>Machine Learning & AI</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>Web Development</strong>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}

      <section
        className="section-wrap section-block"
        id="skills"
      >
        <Reveal>
          <Heading
            eyebrow="WHAT I WORK WITH"
            title={
              <>
                My technical <span>toolkit.</span>
              </>
            }
            text="Technologies and tools I have studied and applied through coursework, internships and practical projects."
          />
        </Reveal>

        <div className="skills-grid">
          {skills.map(({ title, icon: Icon, items }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <motion.article
                className="skill-card"
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  borderColor: "rgba(22,166,161,.75)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
              >
                <div className="skill-card-top">
                  <span className="skill-number">
                    0{index + 1}
                  </span>
                  <Icon size={22} />
                </div>

                <h3>{title}</h3>

                <Tags items={items} />

                <div className="skill-glow" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section
        className="section-wrap section-block"
        id="projects"
      >
        <Reveal>
          <Heading
            eyebrow="SELECTED WORK"
            title={
              <>
                Projects in <span>focus.</span>
              </>
            }
            text="A selection of academic and practical projects reflecting my interest in data, artificial intelligence and application development."
          />
        </Reveal>

        <div className="projects-list">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal
                key={project.number}
                delay={index * 0.12}
              >
                <motion.article
                  className="project-card"
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                  }}
                >
                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-content">
                    <span className="project-type">
                      {project.type}
                    </span>

                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <Tags items={project.stack} />

                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub size={16} />
                        View on GitHub
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>

                  <div className="project-mark">
                    <Icon size={48} strokeWidth={1} />
                  </div>

                  <div className="project-sheen" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

          {/* CERTIFICATIONS */}
<section id="certifications" className="section-wrap section-block">
  <div className="section-heading">
    <span className="eyebrow">CONTINUOUS LEARNING</span>

    <h2>
      Certifications & <span>professional learning.</span>
    </h2>

    <p>
      Professional courses completed through Microsoft and Coursera,
      strengthening my skills in data analytics, Power BI and Excel.
    </p>
  </div>

  <div className="certifications-grid">
    {certifications.map((cert, index) => (
      <motion.article
        key={cert.title}
        className="cert-card"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: index * 0.08 }}
        whileHover={{ y: -6 }}
      >
        <div className="cert-card-top">
          <span className="cert-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="cert-icon">
            <Award size={24} />
          </span>
        </div>

        <span className="cert-category">{cert.category}</span>

        <h3>{cert.title}</h3>

        <p className="cert-issuer">{cert.issuer}</p>

        <p className="cert-date">
          Completed: {cert.date}
        </p>

        <a
          href={cert.file}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
          View Certificate
          <ExternalLink size={15} />
        </a>
      </motion.article>
    ))}
  </div>
</section>

      {/* EDUCATION & EXPERIENCE */}

      <section
        className="section-wrap section-block"
        id="education"
      >
        <Reveal>
          <Heading
            eyebrow="THE FOUNDATION"
            title={
              <>
                Education & <span>experience.</span>
              </>
            }
          />
        </Reveal>

        <div className="timeline">
          {education.map((item, index) => (
            <Reveal key={item.course} delay={index * 0.12}>
              <div className="timeline-item">
                <div className="timeline-dot" />

                <div className="timeline-year">
                  0{index + 1}
                </div>

                <div>
                  <h3>{item.course}</h3>
                  <p>{item.institute}</p>
                  <span>
                    {item.duration} · {item.detail}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* DATA SCIENCE INTERNSHIP */}

        <Reveal>
          <article className="internship-card">
            <div className="internship-heading">
              <div>
                <span className="project-type">
                  INTERNSHIP EXPERIENCE
                </span>

                <h3>Data Science Intern</h3>

                <p className="internship-company">
                  Apponix Technologies
                </p>
              </div>

              <span className="internship-duration">
                FEB 2026 – MAY 2026
                <br />
                4 MONTHS
              </span>
            </div>

            <p className="internship-intro">
              Gained practical exposure to data science
              workflows, data preparation, exploratory
              analysis and machine learning concepts.
            </p>

            <ul className="internship-points">
              <li>
                Worked with Python, Pandas and NumPy for
                data preparation and analysis.
              </li>

              <li>
                Practised exploratory data analysis and
                data visualization.
              </li>

              <li>
                Studied machine learning algorithms and
                model evaluation techniques.
              </li>

              <li>
                Worked with Excel for data cleaning,
                analysis and reporting.
              </li>
            </ul>

            <div className="internship-tags">
              {[
                "Python",
                "Pandas",
                "NumPy",
                "Excel",
                "Machine Learning",
                "Data Analysis",
              ].map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        {/* WEB DEVELOPMENT INTERNSHIP */}

        <Reveal>
          <article className="internship-card">
            <div className="internship-heading">
              <div>
                <span className="project-type">
                  INTERNSHIP EXPERIENCE
                </span>

                <h3>Web Development Intern</h3>

                <p className="internship-company">
                  Apponix Technologies
                </p>
              </div>

              <span className="internship-duration">
                APR 2024 – JUN 2024
                <br />
                3 MONTHS
              </span>
            </div>

            <p className="internship-intro">
              Gained hands-on exposure to frontend
              development and responsive web application
              development.
            </p>

            <ul className="internship-points">
              <li>
                Worked with HTML, CSS and JavaScript to
                develop responsive web pages.
              </li>

              <li>
                Gained practical exposure to React.js.
              </li>

              <li>
                Practised frontend development and
                application design concepts.
              </li>
            </ul>

            <div className="internship-tags">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Frontend Development",
              ].map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      </section>

      {/* CONTACT */}

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <Reveal>
            <Heading
              eyebrow="HAVE A ROLE OR IDEA IN MIND?"
              title={
                <>
                  Let's make something <span>meaningful.</span>
                </>
              }
              text="I'm open to entry-level opportunities in Data Science, Data Analytics, Business Intelligence and software development."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <a
              className="contact-email"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
              <ArrowUpRight />
            </a>
          </Reveal>

          <div className="contact-bottom">
            <span>
              <MapPin size={15} />
              Hubballi, Karnataka, India
            </span>

            <div className="contact-socials">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={17} />
                GitHub
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={17} />
                LinkedIn
              </a>

              <a href={`mailto:${EMAIL}`}>
                <Mail size={17} />
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home">
          SC<span>.</span>
        </a>

        <span>Designed & built with curiosity.</span>

        <span>
          © 2026 Sanjana Chandrakanth Pawar
        </span>
      </footer>
    </main>
  );
}