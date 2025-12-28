import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaChevronUp, FaCode, FaDatabase, FaBrain, FaCloud, FaGraduationCap, FaCertificate, FaBriefcase, FaPhone } from 'react-icons/fa';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const experience = [
    {
      title: "Data Engineer (Research & Analytics)",
      company: "Northern Arizona University",
      location: "United States",
      period: "January 2025 - December 2025 (1 year)",
      points: [
        "Built automated data pipelines using Python and SQL to clean and merge 5+ massive traffic datasets, improving overall data accuracy by 30%",
        "Streamlined ETL processes that saved the analytics team 10+ hours per week by automating repetitive data cleaning tasks within the ArcGIS ecosystem",
        "Developed interactive dashboards in Matplotlib and Seaborn to visualize crash patterns, identifying 15+ high-risk accident hotspots that led to targeted safety interventions",
        "Collaborated with city stakeholders to translate complex traffic data into actionable safety recommendations, directly influencing urban planning initiatives"
      ]
    },
    {
      title: "AI Software Engineer (Research)",
      company: "Northern Arizona University",
      location: "Phoenix, AZ, United States",
      period: "January 2025 - August 2025 (8 months)",
      points: [
        "Engineered an automated malware classification system using GenAI (GPT-4o-mini), reducing manual log analysis time by 98% (cutting 90 hours of work down to just 2 hours)",
        "Achieved an F1 score of 1.0 in binary malware detection by fine-tuning open-source LLMs (Mistral-7B) using LORA/QLORA optimization techniques",
        "Implemented Retrieval-Augmented Generation (RAG) pipelines to bridge the gap between raw security logs and actionable insights, significantly improving threat detection speed",
        "Leveraged Google Colab and GPU acceleration (A100) to iterate rapidly on model testing, overcoming local compute limitations to deliver production-ready classification workflows"
      ]
    },
    {
      title: "AI Engineer & Teaching Assistant",
      company: "Northern Arizona University",
      location: "Phoenix, AZ, United States",
      period: "August 2024 - December 2024 (5 months)",
      points: [
        "Mentored 10+ students on the end-to-end integration of ChatGPT APIs and LLM fine-tuning, directly improving their project completion rates",
        "Optimized training workflows using LoRA/QLORA techniques, effectively cutting model training times by 20% and allowing for more rapid experimentation",
        "Designed and delivered hands-on labs for Prompt Engineering that improved LLM response quality by 15%, fostering practical understanding of AI capabilities",
        "Guided students through deployment workflows using PyTorch and Hugging Face, ensuring they could launch functional, real-world AI applications"
      ]
    },
    {
      title: "Software Engineer",
      company: "Cognizant",
      location: "Bengaluru, Karnataka, India",
      period: "September 2022 - December 2023 (1 year 4 months)",
      points: [
        "Architected backend microservices for a healthcare platform serving 50,000+ monthly users, delivering 14+ RESTful APIs using Java, Spring Boot, and Hibernate",
        "Increased deployment scalability by 3x and achieved 99.9% uptime by containerizing services with Docker, orchestrating via Kubernetes (EKS), and building AWS CI/CD pipelines",
        "Secured sensitive patient data (HIPAA compliant) by implementing OAuth 2.0, JWT, and Spring Security, reducing authentication vulnerabilities by 40%",
        "Accelerated API response times by 30% by optimizing complex SQL queries and implementing Redis caching for high-speed data retrieval",
        "Led code quality initiatives by building automated testing suites that maintained a code quality score of 85/100, detecting 95% of errors before production"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Cognizant",
      location: "Bangalore Urban, Karnataka, India",
      period: "September 2021 - September 2022 (1 year 1 month)",
      points: [
        "Developed robust asynchronous services using Node.js and Express.js, reducing API response times by 25% during peak traffic hours",
        "Optimized MongoDB schemas to streamline data management, resulting in a 30% increase in retrieval efficiency for high-load operations",
        "Collaborated with frontend teams to ship full-stack features that improved user engagement metrics by 15%",
        "Implemented JWT authentication protocols to secure application access points, ensuring strict compliance with security standards"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science - MS, Computer Science",
      institution: "Northern Arizona University",
      period: "January 2024 - December 2025",
      location: "Flagstaff, Arizona, United States"
    },
    {
      degree: "Bachelor of Engineering - BE",
      field: "Electrical, Electronics and Communications Engineering",
      institution: "Visvesvaraya Technological University",
      period: "2017 - 2021",
      location: "Karnataka, India"
    }
  ];

  const certifications = [
    "100 days: The Complete Python Pro Bootcamp",
    "Ultimate AWS Certified Cloud Practitioner-2022",
    "The Complete 2022 Web Development Bootcamp",
    "The Data Science Course: Complete Data Science Bootcamp 2023"
  ];

  const skills = {
    Programming: ["Python", "Java", "JavaScript"],
    frontend: ["React.js", "Redux.js", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs", "Microservices"],
    database: ["MongoDB", "SQL"],
    cloud: ["AWS (EKS, Lambda, S3)", "Docker", "Kubernetes", "CI/CD"],
    ai: ["LLMs", "RAG", "LoRA/QLoRA", "Prompt Engineering", "GPT-4", "Mistral-7B"],
    dataScience: ["Python", "Data Analysis", "Data Visualization", "Matplotlib", "Seaborn", "ArcGIS", "ETL"],
    languages: ["Kannada (Native or Bilingual)", "English (Native or Bilingual)", "Hindi (Professional Working)"]
  };

  const projects = [
    {
      title: "Job Portal AI",
      description:
        "AI-powered job portal that matches candidates with relevant job opportunities using intelligent algorithms.",
      highlights: [
        "Resume parsing, job recommendations, and personalized matching",
        "Chatbot integration for interactive candidate guidance",
        "Robust APIs and Redux state management",
      ],
      GitHub_link: "https://github.com/JayanthK007/Job_Portal_AI",
      tech: ["React", "Java Spring Boot", "SQL", "APIs", "Redux", "Chatbots"],
    },
    {
      title: "Oppia Open-Source Contribution",
      description:
        "Full Stack Educational platform for students",
      highlights: [
        "Resolved 2+ Angular/Python bugs, reducing user-reported issues by ~30%",
        "Enhanced Flask backend and GitHub Actions pipelines (20–40% faster)",
        "Added frontend tests/docs, boosting coverage",
      ],
      tech: ["Angular", "TypeScript", "Python", "Docker", "GitHub Actions", "Flask"],
    },
    {
      title: "E-Commerce Website",
      description:
        "Full‑stack MERN e-commerce app",
      highlights: [
        "Built a full-stack MERN e-commerce website with secure authentication and payments",
        "Implemented modular code for the website using Node.js and Express.js for product management, cart management, order management and checkout process",
        "Integrated Stripe for secure payments and Render for deployment",
      ],
      link: "https://mernecommerce-yo7z.onrender.com/",
      tech: ["Node.js", "Express.js", "React.js", "Redux", "Stripe", "Render"],
    },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">JK</div>
          <ul className="nav-menu">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>Certifications</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <img src="/profile.jpg" alt="Jayanthkumar Karthik" className="profile-photo" />
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Jayanthkumar Karthik</span>
          </h1>
          <div className="hero-subtitle">
            <span className="typing-text">Software Engineer | Java, Spring Boot, AWS, Python | Backend & AI Systems</span>
          </div>
          <p className="hero-description">
            Ex-Cognizant | 2+ years building production-grade backend systems and AI-integrated solutions
          </p>
          <div className="hero-location">
            <FaMapMarkerAlt /> Phoenix, AZ, United States
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#experience" className="btn btn-secondary">View My Work</a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/jayanthkumarkarthik" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:imjayanthkumark@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Software Engineer with 2+ years of experience building production-grade backend systems and AI-integrated solutions. 
                I bridge the gap between traditional enterprise software (Java/Spring Boot) and modern AI implementation. My background 
                spans from architecting scalable microservices at Cognizant to developing advanced malware detection models using 
                Generative AI during my Master's research.
              </p>
              <p>
                <strong>Enterprise Engineering:</strong> I don't just write code; I build systems that scale. At Cognizant, I engineered 
                backend architectures supporting 50,000+ monthly users, optimizing APIs for 99.9% uptime and ensuring HIPAA-compliant security.
              </p>
              <p>
                <strong>Applied AI Strategy:</strong> I move beyond theory to practical application. I recently fine-tuned LLMs (LORA/QLORA) 
                and built RAG pipelines that reduced security log analysis time by 98% (from 90 hours to 2 hours), proving that AI can drive 
                massive operational efficiency.
              </p>
              <p>
                <strong>Technical Toolkit:</strong> Backend (Java, Spring Boot, Microservices, REST APIs, Node.js), Cloud & DevOps (AWS - EKS, 
                Lambda, S3, Docker, Kubernetes, CI/CD), AI & Data (Python, LLMs, RAG, SQL, MongoDB).
              </p>
              <p className="highlight">
                I have completed my MS in Computer Science (Dec 2025) and am available to join immediately. I am looking for a team where I can 
                deploy robust code and solve complex engineering challenges.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">90+</div>
                <div className="stat-label">Hours Saved via Automation</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">30%</div>
                <div className="stat-label">Performance Improvement</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1.0</div>
                <div className="stat-label">F1 Score Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">
                <FaCode />
              </div>
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon">
                <FaBriefcase />
              </div>
              <h3>Backend Development</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon">
                <FaDatabase />
              </div>
              <h3>Database</h3>
              <div className="skill-tags">
                {skills.database.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon">
                <FaCloud />
              </div>
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon">
                <FaBrain />
              </div>
              <h3>AI & Machine Learning</h3>
              <div className="skill-tags">
                {skills.ai.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon">
                <FaDatabase />
              </div>
              <h3>Data Science</h3>
              <div className="skill-tags">
                {skills.dataScience.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="languages-section">
            <h3>Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((lang, index) => (
                <span key={index} className="skill-tag language-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-company">{job.company}</div>
                  <div className="job-meta">
                    <span className="job-period">{job.period}</span>
                    <span className="job-location">{job.location}</span>
                  </div>
                  <ul className="job-points">
                    {job.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((proj, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{proj.title}</h3>
                  <span className="project-period">{proj.period}</span>
                </div>
                <p className="project-description">{proj.description}</p>
                <ul className="project-highlights">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                {(proj.GitHub_link || proj.link) && (
                  <div className="project-links">
                    {proj.GitHub_link && (
                      <a
                        href={proj.GitHub_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        View GitHub
                      </a>
                    )}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <h3 className="education-degree">{edu.degree}</h3>
                {edu.field && <div className="education-field">{edu.field}</div>}
                <div className="education-institution">{edu.institution}</div>
                <div className="education-period">{edu.period}</div>
                <div className="education-location">{edu.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="certification-icon">
                  <FaCertificate />
                </div>
                <div className="certification-name">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm actively seeking Full-time Software Development Engineer positions. If you're working on innovative 
            projects or recruiting for software positions, let's connect!
          </p>
          <div className="contact-cards">
            <a href="tel:5204910014" className="contact-card">
              <FaPhone className="contact-icon" />
              <h3>Mobile</h3>
              <p>5204910014</p>
            </a>
            <a href="mailto:imjayanthkumark@gmail.com" className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>imjayanthkumark@gmail.com</p>
            </a>
            <a href="https://www.linkedin.com/in/jayanthkumarkarthik" target="_blank" rel="noopener noreferrer" className="contact-card">
              <FaLinkedin className="contact-icon" />
              <h3>LinkedIn</h3>
              <p>jayanthkumarkarthik</p>
            </a>
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Location</h3>
              <p>Phoenix, AZ, United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Jayanthkumar Karthik. All rights reserved.</p>
          <p>Built with React, HTML5, and CSS3</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <FaChevronUp />
        </button>
      )}
    </div>
  );
}

export default App;


