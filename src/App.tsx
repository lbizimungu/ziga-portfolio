import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Brush,
  Download,
  FolderKanban,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MonitorCog,
  Palette,
  Pin,
  Presentation,
  Share2,
} from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import {
  contactInfo,
  education,
  footerLinks,
  navItems,
  profile,
  projects,
  services,
  strengths,
  tools,
  workJourney,
} from './data/portfolio';

function ToolIcon({ name }: { name: string }) {
  const className = 'tool-badge-icon';

  switch (name) {
    case 'figma':
      return <Palette size={28} className={className} />;
    case 'code':
      return <MonitorCog size={28} className={className} />;
    case 'github':
      return <Github size={28} className={className} />;
    case 'jira':
      return <FolderKanban size={28} className={className} />;
    case 'sharepoint':
      return <Share2 size={28} className={className} />;
    case 'Google Colab':
      return <MonitorCog size={28} className={className} />;
    case 'canva':
      return <Palette size={28} className={className} />;
    case 'pinterest':
      return <Pin size={28} className={className} />;
    default:
      return <Palette size={28} className={className} />;
  }
}

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <BriefcaseBusiness size={28} key="pm" />,
    <MonitorCog size={28} key="sd" />,
    <Brush size={28} key="ux" />,
  ];

  return <>{icons[index]}</>;
}

function ContactIcon({ label }: { label: string }) {
  if (label === 'Email') return <Mail size={20} />;
  if (label === 'GitHub') return <Github size={20} />;
  if (label === 'LinkedIn') return <Linkedin size={20} />;
  return <MapPin size={20} />;
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="brand-name">{profile.name}</p>
          <p className="brand-role">{profile.title}</p>
        </div>

        <div className="header-actions">
          <nav>
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <ThemeToggle
            theme={theme}
            onToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          />
        </div>
      </header>

      <main className="container">
        <section className="hero section" id="about">
          <div className="hero-copy">
            <motion.p
              className="hero-kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {profile.tagline}
            </motion.h1>

            <motion.p
              className="hero-summary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              {profile.summary}
            </motion.p>

            <motion.div
              className="cta-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
            >
              <a className="button primary" href="#projects">
                View work <ArrowUpRight size={16} />
              </a>
              <a className="button secondary" href={profile.cv} target="_blank" rel="noreferrer">
                <Download size={16} /> CV
              </a>
            </motion.div>

            <motion.div
              className="pill-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              {strengths.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.aside
            className="profile-card"
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="photo-frame">
              <img src={profile.photo} alt={profile.name} />
            </div>
            <div className="profile-meta">
              <p className="meta-label">Based in</p>
              <p className="meta-value">{profile.location}</p>
            </div>
          </motion.aside>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading-row services-heading">
            <div>
              <p className="section-kicker">Services</p>
              <h2>
                <span className="accent-script">Services</span> I Provide
              </h2>
            </div>

            <a className="button olive" href="#contact">
              Let’s talk <ArrowRight size={16} />
            </a>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <div className="service-icon">{<ServiceIcon index={index} />}</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <a href="#contact" className="service-link">
                  Learn more <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section tools-section" id="tools">
          <div className="tools-heading">
            <p className="section-kicker">My Favorite Tools</p>
            <h2>
              <span className="accent-script">Tools</span> Behind My Work
            </h2>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <motion.article
                key={tool.name}
                className="tool-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <div className="tool-shell">
                  <div className="tool-badge">
                    <ToolIcon name={tool.icon} />
                  </div>
                </div>
                <p className="tool-name">{tool.name}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading-row projects-heading">
            <div>
              <p className="section-kicker">My Portfolio</p>
              <h2>
                My Latest <span className="accent-script">Projects</span>
              </h2>
            </div>

            <a className="button olive" href="#contact">
              View all projects <ArrowRight size={16} />
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={`project-visual ${project.theme}`}>
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-body">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-title-row">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.subtitle}</p>
                    </div>
                    <button className="project-arrow" type="button" aria-label={project.title}>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section journey-section" id="journey">
          <div className="journey-heading">
            <p className="section-kicker">Education & Work</p>
            <h2>
              My <span className="accent-script">Academic and Professional</span> Journey
            </h2>
          </div>

          <div className="journey-grid">
            <article className="journey-card">
              <div className="journey-card-top">
                <div className="journey-icon">
                  <GraduationCap size={24} />
                </div>
                <h3>Education</h3>
              </div>

              <div className="journey-list">
                {education.map((item) => (
                  <div key={`${item.period}-${item.title}`} className="journey-item">
                    <p className="journey-period">{item.period}</p>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="journey-card">
              <div className="journey-card-top">
                <div className="journey-icon">
                  <Presentation size={24} />
                </div>
                <h3>Work Experience</h3>
              </div>

              <div className="journey-list">
                {workJourney.map((item) => (
                  <div key={`${item.period}-${item.title}`} className="journey-item">
                    <p className="journey-period">{item.period}</p>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-layout">
            <div className="contact-left">
              <p className="section-kicker">Contact Us</p>
              <h2>
                Let’s Talk for <span className="accent-script">Your Next Projects</span>
              </h2>
              <p className="contact-copy">
                If you are building something thoughtful and need someone who can move between software,
                project delivery, and design thinking, reach out.
              </p>

              <div className="contact-info-list">
                {contactInfo.map((item) => (
                  <div key={item.label} className="contact-info-row">
                    <div className="contact-info-icon">
                      <ContactIcon label={item.label} />
                    </div>
                    <p>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <form className="contact-form"
              action="https://formspree.io/f/xqeyljlv"
              method="POST"
            >
              <div className="form-grid">
                <label>
                  <span>Your Name *</span>
                  <input name="name" type="text" placeholder="Ex. John Doe" />
                </label>

                <label>
                  <span>Email *</span>
                  <input name="email" type="email" placeholder="example@gmail.com" />
                </label>

                <label>
                  <span>Phone *</span>
                  <input name="phone" type="text" placeholder="Enter Phone Number" />
                </label>

                <label>
                  <span>I’m Interested in *</span>
                  <select name="interest" defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Project Management</option>
                    <option>Software Development</option>
                    <option>UI/UX Design</option>
                  </select>
                </label>

                <label>
                  <span>Budget Range (USD) *</span>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select Range
                    </option>
                    <option>Under 500</option>
                    <option>500–1,500</option>
                    <option>1,500–5,000</option>
                    <option>5,000+</option>
                  </select>
                </label>

                <label>
                  <span>Country *</span>
                  <input name="country" type="text" placeholder="Enter Country" />
                </label>

                <label className="full">
                  <span>Your Message *</span>
                  <textarea name="message" rows={6} placeholder="Enter here.." />
                </label>
              </div>

              <button className="button olive submit-button" type="submit">
                Submit <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-copy">
              Software engineering, project delivery, and design-minded work with structure.
            </p>
          </div>

          <div className="footer-links">
            {footerLinks.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
