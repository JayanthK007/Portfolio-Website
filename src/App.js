import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaChevronUp, FaCode, FaDatabase, FaBrain, FaCloud, FaGraduationCap, FaCertificate, FaBriefcase } from 'react-icons/fa';

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
      title: "Graduate Research Assistant - Data Analyst",
      company: "Northern Arizona University",
      location: "United States",
      period: "January 2025 - Present",
      points: [
        "Cleaned and merged over 5 traffic datasets using Python and SQL, enhancing overall data accuracy and consistency by approximately 30%",
        "Developed interactive visualizations in Matplotlib and seaborn that highlighted critical patterns across various crash factors",
        "Applied ArcGIS geoprocessing tools to conduct spatial analysis, successfully identifying over 15 high-risk accident hotspots",
        "Automated data pipelines with Python scripts within ArcGIS, saving analysts up to 10 hours per week",
        "Collaborated closely with faculty and city stakeholders to ensure analyses aligned with traffic management goals",
        "Contributed directly to the City of Scottsdale's urban planning initiatives aimed at reducing traffic accidents"
      ]
    },
    {
      title: "Research Assistant - AI Engineer",
      company: "Northern Arizona University",
      location: "Flagstaff, Arizona, United States",
      period: "January 2025 - August 2025",
      points: [
        "Explored the application of GenAI using OpenAI's GPT-4o-mini to effectively differentiate malware from benign Windows event logs",
        "Automated a comprehensive classification workflow in Python, decreasing manual analysis time from approximately 90 hours to just 2 hours",
        "Achieved an impressive F1 score of 1.0 for binary classification through meticulous fine-tuning of LLMs",
        "Employed Google Colab to experiment with open-source models using GPU A100",
        "Implemented advanced techniques such as prompt engineering and Retrieval-Augmented Generation (RAG)",
        "Used LORA/QLORA for finetuning open source model like Mistral-7B-8X and improved classification accuracy by 40%"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Northern Arizona University",
      location: "Flagstaff, Arizona, United States",
      period: "August 2024 - December 2024",
      points: [
        "Guided over 10 students in the integration of ChatGPT API and fine-tuning of LLaMA and Ollama models using Python",
        "Taught advanced LoRA/QLoRA optimization techniques that effectively cut training times by approximately 20%",
        "Designed and delivered hands-on prompt engineering labs that improved the quality of LLM responses by around 15%",
        "Supported deployment workflows utilizing PyTorch and Hugging Face frameworks"
      ]
    },
    {
      title: "Software Engineer",
      company: "Cognizant",
      location: "Bengaluru, Karnataka, India",
      period: "September 2022 - December 2023",
      points: [
        "Streamlined healthcare platform scalability and performance by developing and maintaining backend systems with Java, Spring Boot, Hibernate, and JPA, delivering 14+ RESTful APIs that served 50k+ monthly users with high reliability",
        "Secured patient health records by implementing JWT, OAuth 2.0, and Spring Security, reducing authentication vulnerabilities by 40% and ensuring HIPAA-compliant data protection across all endpoints",
        "Accelerated data transactions by optimizing SQL queries and deploying Redis caching, enabling 30% faster API responses and 25% quicker data retrieval through efficient JSON/XML data handling",
        "Increased deployment scalability by 3× and achieved 99.9% uptime by containerizing microservices with Docker, orchestrating via Kubernetes (EKS), and automating CI/CD pipelines on AWS (EC2, ELB, Lambda, CloudWatch, S3, SNS)",
        "Spearheaded creation of automated testing suites that maintain a code quality score of 85/100 and detect 95% of potential errors before deployment, improving code maintainability",
        "Drove sprint efficiency by collaborating within an Agile team of 14–18 developers, leveraging Jira for sprint tracking and Grafana for performance monitoring, which improved delivery timelines and issue resolution by 20%"
      ]
    },
    {
      title: "Software Engineer Trainee",
      company: "Cognizant",
      location: "Bangalore Urban, Karnataka, India",
      period: "September 2021 - September 2022",
      points: [
        "Developed robust RESTful APIs using Node.js and Express.js, reducing response times by 25%",
        "Integrated MongoDB with applications, resulting in a 30% increase in data retrieval efficiency",
        "Implemented JWT authentication protocols to secure application access",
        "Collaborated effectively with frontend developers to deliver full-stack features that improved user experience by 15%"
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
    Programming: ["Python", "Java", "C", "C++", "JavaScript"],
    frontend: ["React.js", "Redux.js", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "Spring Boot", "RESTful APIs"],
    database: ["MongoDB", "SQL"],
    cloud: ["AWS", "Docker","Kubernetes"],
    ai: ["Generative AI", "LLM Fine-Tuning", "GPT-4", "LLaMA", "Ollama", "LoRA/QLoRA", "Prompt Engineering","RAG"],
    dataScience: ["Python", "Data Analysis", "Data Visualization", "Matplotlib", "Seaborn", "ArcGIS"],
    languages: ["Kannada (Native)", "English (Professional)", "Hindi (Professional)"]
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
            <span className="typing-text">Software Engineer | CS Grad Student @ NAU</span>
          </div>
          <p className="hero-description">
            Ex-Cognizant (2+ yrs) | MERN, Spring Boot, AWS | Passionate about GenAI & Data Engineering
          </p>
          <div className="hero-location">
            <FaMapMarkerAlt /> Flagstaff, Arizona, United States
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
                Hello, it is my pleasure to meet you! I am a <strong>Computer Science Graduate Student</strong> at Northern Arizona University 
                with over 2 years of industry and practical research experience in Data Analysis, AI, and Software Development. I have a 
                strong interest in creating smart systems at the crossroads of Full Stack Development and Generative AI.
              </p>
              <p>
                My journey started at <strong>Cognizant</strong>, where I was employed as a Software Engineer to design and maintain RESTful APIs 
                with Node.js and Express.js. I cut down application response times by 30% and increased database efficiency by 25% through 
                smarter MongoDB schema design.
              </p>
              <p>
                As a <strong>Graduate Research Assistant and AI Researcher</strong> at Northern Arizona University, I've integrated data analysis 
                with AI to create impact. I processed and combined 5+ traffic datasets in Python and SQL, performed spatial analysis in ArcGIS 
                to discover 15+ high-risk accident areas, and created a malware classification model with GPT-4o-mini that achieved an F1 score 
                of 1.0, reducing manual log analysis time from 90 hours to just 2 hours.
              </p>
              <p>
                As a <strong>Teaching Assistant</strong>, I tutored students on fine-tuning LLMs (LLaMA, Ollama), integrating ChatGPT APIs, 
                and implementing LoRA/QLoRA optimizations, reducing model retraining time by 50%.
              </p>
              <p className="highlight">
                I am actively seeking <strong>Full-time Software Development Engineer positions</strong> where I can use my experience in 
                Full Stack Development, Data Engineering, and AI-based solutions to create scaled and impactful systems.
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
              <p>Flagstaff, Arizona, United States</p>
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


