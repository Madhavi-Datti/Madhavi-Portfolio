import React from 'react';
import { Link } from 'react-router-dom';
import { Hand, CoffeeIcon, Code, Database, Atom, FileCode, Grid, Palette, LeafIcon, PowerCircle, Server, GitBranch, Feather, FileJson, RectangleVerticalIcon, Cloud, RocketIcon, Shield, Download , FileText, Video, Globe, Settings, Phone, MapPin, Instagram, Send, MessageCircle, Youtube, Laptop} from "lucide-react";

import { Github, Linkedin, Mail } from 'lucide-react';

function Home() {
  const education = [
    {
      icon: "🎓",
      degree: "B.Tech in EEE",
      university: "Andhra University",
      year: "2015 -2019",
    },
    {
      icon: "📖",
      degree: "Intermediate - MPC",
      university: "NRI Junior College",
      year: "2013 - 2015",
    },
    {
      icon: "🏫",
      degree: "SSC",
      university: "Govt.Girls.High School",
      year: "2012-2013",
    }
  ];
  
  const skills = [
    { name: "Core Java", icon: <CoffeeIcon size={30} />, color: "#f89820", level: 90},
    { name: "Servlets", icon: <Server size={30} />, color: "#00758f", level: 80},
    { name: "JSP", icon: <FileCode size={30} />, color: "#f7df1e", level: 70},
    { name: "Hibernate", icon: <RectangleVerticalIcon size={30} />, color: "#006666", level: 80 },
    { name: "JDBC", icon: <Database size={30} />, color: "#330033", level: 70},
    { name: "Spring", icon: <LeafIcon size={30} />, color: "#6db33f", level: 90},
    { name: "Spring Boot", icon: <PowerCircle size={30} />, color: "#33CC00",level: 90},
    { name: "Spring Security", icon: <Shield size={30} />, color: "#336600", level: 70 },
    { name: "Maven", icon: <Feather size={30} />, color: "#264de4", level: 90},
    { name: "Restful API's", icon: <Cloud size={30} />, color: "#660066", level: 90 },
    { name: "Postman", icon: <RocketIcon size={30} />, color: "#e34f26",level: 80 },
    { name: "MySQL", icon: <Database size={30} />, color: "#00758f", level: 80},
    { name: "HTML", icon: <Code size={30} />, color: "#CC00CC", level: 90},
    { name: "CSS", icon: <Palette size={30} />, color: "#000099", level: 80},
    { name: "Bootstrap", icon: <Grid size={30} />, color: "#99CCFF", level: 80 },
    { name: "JavaScript", icon: <FileJson size={30} />, color: "#f7df1e", level: 70},
    { name: "React", icon: <Atom size={30} />, color: "#61DBFB",level: 80 },
    { name: "Git", icon: <GitBranch size={30} />, color: "#595959", level: 90}
  ];
  const certifications = [
    {
      title: "Software Developer Certification",
      image: "/images/junior_developer_certificate.jpg", 
      downloadLink: "/images/junior_developer_certificate.jpg",
    },
    {
      title: "Java Programming Certification",
      image: "/images/java_certificate.jpg",
      downloadLink: "/images/java_certificate.jpg",
    },
    {
      title: "Artificial Intelligence - AI Certification",
      image: "/images/AI_certificate.jpg",
      downloadLink: "/images/AI_certificate.jpg",
    },
    {
      title: "Java Full Stack Development Certification",
      image: "/images/Full_stack_certificate.jpg",
      downloadLink: "/images/Full_stack_certificate.jpg",
    },
  ];

  
  return (
    <div>
      {/* Hero Section */}
      <section className="home-container d-flex align-items-center justify-content-center text-white text-center">
        <div className="container">
              <h1 className="display-5 fw-bold animate-slide mb-2"><Hand className="hand highlight inline-block me-2 mb-0 pb-2" size={50} />Hi, I'm <span className="highlight">Madhavi Datti</span></h1>
              <p className="lead animate-slide mb-3">
                <b>Java Full Stack Developer</b> passionate about building scalable and 
                innovative solutions.
              </p>
              <Link to="/images/Madhavi_Java_Developer_Resume.pdf" 
                className="btn btn-warning btn-lg fw-bold shadow-lg animate-slide mb-4" 
                target="_blank" download>
                Download Resume
              </Link>
            </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-color text-center">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-md-start text-center">
              <img 
                src="/images/my ai pic.jpg" 
                alt="My Profile" 
                className="profile-img animate-fade"
              />
            </div> 
            <div className="col-lg-6 col-md-12 text-md-start text-center mt-4"> 
          <h1 className="title">About Me</h1>
          <p className="text" style={{ textAlign: "justify" }}>I am a dedicated Java Full Stack Developer with a strong foundation in designing and implementing robust, scalable, and efficient web applications. I specialize in Java-based backend development and modern frontend technologies to create seamless, user-friendly applications. My expertise spans technologies like Java, Spring Boot, REST APIs, React, and MYSQL, enabling me to deliver end-to-end solutions that meet diverse business requirements. Let's connect and turn ideas into reality! </p>

              {/* Connect Button */}
            <Link to="mailto:dattimadhavi8@gmail.com">
              <button className="btn btn-color btn-lg mt-3 fw-bold shadow-lg">
                Connect Now 
              </button>
            </Link>
        </div>
        </div>
        </div>
      </section>
      <section className="services-section text-white">
      <div className="container">
        <h1 className="section-title mb-5">What I Can Do</h1>
        <div className="services-wrapper">
          
          <div className="service-box">
            <Globe className="service-icon" />
            <h3 className="service-title">Website Development</h3>
            <p>Creating responsive and interactive user interfaces using modern frameworks and tools.</p>
          </div>
          <div className="service-box">
            <Database className="service-icon" />
            <h3 className="service-title">Back-end Development</h3>
            <p>Building robust server-side applications and APIs with scalable architecture.</p>
          </div>

          <div className="service-box">
            <Settings className="service-icon" />
            <h3 className="service-title">Full Stack Web Development</h3>
            <p>Developing complete full stack web applications with front-end and back-end technologies.</p>
          </div>

          <div className="service-box">
            <FileText className="service-icon" />
            <h3 className="service-title">Content Writing</h3>
            <p>Creating engaging content for web, articles, blogs, Faqs, and social media platforms.</p>
          </div>
          <div className="service-box">
            <Video className="service-icon" />
            <h3 className="service-title">Video Editing</h3>
            <p>Creating engaging text based videos for social media platforms using canva.</p>
          </div>
            <div className="service-box">
            <Laptop className="service-icon" />
            <h3 className="service-title">Graphic Designing</h3>
            <p>Designing visually appealing logos, posters, and social media posts using Canva & Adobe tools.</p>
          </div>

        </div>
      </div>
    </section>

{/* Experience Section */}
<section id="experience" className="experience-section">
  <div className="container">
    <h1 className="section-title text-center mb-5">Experience I Have</h1>

    <div className="experience-roadmap">
            <div className="experience-item">
        <div className="experience-dot"></div>
        <div className="experience-content">
          <h3 className="experience-title">Full Stack Web Developer</h3>
          <h5 className="company">Self-Employed | Remote</h5>
          <h6 className="years-of-experience">Jan 2025 - Present</h6>
          <p>Currently Working on <strong>Full Stack Web Development Projects</strong>.</p>
        </div>
      </div>
      
      <div className="experience-item">
        <div className="experience-dot"></div>
        <div className="experience-content">
          <h3 className="experience-title">Full Stack Developer</h3>
          <h5 className="company">CareerPedia | Hyderabad, TS</h5>
          <h6 className="years-of-experience">June 2024 - Dec 2024</h6>
          <p>Gained hands-on training in <strong>Java Full Stack Development</strong>.</p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-dot"></div>
        <div className="experience-content">
          <h3 className="experience-title">Web Content Writer</h3>
          <h5 className="company">Selectsys | Hyderabad, TS</h5>
          <h6 className="years-of-experience">2 Years 10 Months</h6>
          <p>Developed high-quality web content, articles, and FAQs for an <strong>insurance-based web application</strong>.</p>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-dot"></div>
        <div className="experience-content">
          <h3 className="experience-title">Content Writer</h3>
          <h5 className="company">Vivan Projects | Eluru, AP</h5>
          <h6 className="years-of-experience">1 Year 3 Months</h6>
          <p>Generated captivating <strong>content</strong> across various websites and multiple platforms.</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="skills" className="skills-section text-center">
      <div className="container">
        <h2 className="skills-title mb-5">Technology Stack I Work With</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index} style={{ borderColor: skill.color }}>
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
             {/* Progress Bar */}
            <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${skill.level}%`, backgroundColor: skill.color }}>
              <span className="progress-text">{skill.level}%</span>
            </div>
          </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section id="certifications" className="certifications-section">
      <div className="container">
        <h1 className="certifications-title">Certifications I Have Done</h1>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <img src={cert.image} alt={cert.title} className="certificate-image" />
              <p className="certificate-title">{cert.title}</p>
              <Link to={cert.downloadLink} target="_blank" download className="btn btn-outline-primary">
                <Download className="download-icon" /> Download
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* Education Section */}
        <section id="education" className="education-section text-center">
  <div className="container">
    <h2 className="education-title mb-5">My Educational Background</h2>
    <div className="education-content">
      {education.map((edu, index) => (
        <div className="education-card" key={index}>
          <div className="education-icon">{edu.icon}</div>
          <h3 className="degree">{edu.degree}</h3>
          <p className="university">{edu.university}</p>
          <p className="year">{edu.year}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="contact-section">
      <div className="container">
        <h1 className="contact-title mb-5">Contact Me</h1>

        <div className="row justify-content-center">
          {/* First Row */}
          <div className="col-md-3 col-sm-4 col-6">
            <div className="info-item">
              <div className="icon-circle"><Linkedin className="icon" style={{color: 'blue'}}/></div>
              <Link to="https://www.linkedin.com/in/madhavi-datti-b18761185/" target="_blank" className="contact-link">LinkedIn</Link>
            </div>
          </div>

          <div className="col-md-3 col-sm-4 col-6">
            <div className="info-item">
              <div className="icon-circle"><Github className="icon" style={{color: 'grey'}}/></div>
              <Link to="https://github.com/Madhavi-Datti" target="_blank" className="contact-link">GitHub</Link>
            </div>
          </div>

          <div className="col-md-3 col-sm-4 col-6">
            <div className="info-item">
              <div className="icon-circle"><Instagram className="icon" style={{color: 'orange'}}/></div>
              <Link to="https://www.instagram.com/maddycodehub?igsh=MXR2bDJsajNsdTBqYw==" target="_blank" className="contact-link">Instagram</Link>
            </div>
          </div>

          <div className="col-md-3 col-sm-4 col-6">
            <div className="info-item">
              <div className="icon-circle"><MessageCircle className="icon" style={{color: 'green'}}/></div>
              <Link to="https://wa.me/7995522590" target="_blank" className="contact-link">WhatsApp</Link>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-4 col-6">
            <div className="info-item">
              <div className="icon-circle"><Youtube className="icon" style={{color: 'red'}}/></div>
              <Link to="https://www.youtube.com/@maddycodehub" target="_blank" className="contact-link">YouTube</Link>
            </div>
          </div>

          <div className="col-md-3 col-sm-4 col-6">
            <div className="info-item">
              <div className="icon-circle" ><Mail className="icon" style={{color: 'blue'}}/></div>
              <Link to="mailto:dattimadhavi8@gmail.com" className="contact-link">dattimadhavi8@gmail.com</Link>
            </div>
          </div>

          <div className="col-md-3 col-sm-4 col-6">
            <div className="info-item">
              <div className="icon-circle"><Phone className="icon" style={{color: 'green'}}/></div>
              <Link to="tel:7995522590" className="contact-link">+91 7995522590</Link>
            </div>
          </div>

          <div className="col-md-3 col-sm-4 col-6">
            <div className="info-item">
              <div className="icon-circle"><MapPin className="icon" style={{color: 'yellow'}}/></div>
              <span className="location-text">Hyderabad, TS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
