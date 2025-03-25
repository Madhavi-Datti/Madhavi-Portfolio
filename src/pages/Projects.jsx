import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Eden Gardensacpes",
      description: "The Eden Gardenscapes website is a full-stack web application built with React and Spring Boot, designed to showcase landscaping services, manage client inquiries, and display a portfolio of past projects with seamless navigation and interactive features.",
      image: "/images/green-park.jpg",
      technologies: ["React", "HTML", "CSS", "Bootstrap", "SpringBoot", "MYSQL"],
      github: "",
      live: "",
    },
    {
      title: "Student Management System",
      description: "The Student Management System is a web-based application built with Spring Boot and React, enabling efficient student data management, including enrollment, course tracking, and fee management with CRUD operations.",
      image: "/images/student-management.jpg",
      technologies: ["Java", "SpringBoot", "Spring Security", "MYSQL", "PostMan"],
      github: "",
      live: "",
    },
  ];

  return (
    <section className="project-section bg-color">
    <div className="container py-3">
      <h1 className="text-center project-section-title text-color mb-4">My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img src={project.image} alt={project.title} className="card-img-top" />
              <div className="card-body about-bg">
                <h3 className="card-title text-white">{project.title}</h3>
                <p className="card-text text-white">{project.description}</p>
                <div className="tech-list">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="badge btn-color me-2 p-1">{tech}</span>
                  ))}
                </div>
                <div className="d-flex mt-3">
                  <Link to={project.github} target="_blank" className="btn btn-outline-primary me-2">
                    <Github size={20} className="me-1" /> Code
                  </Link>
                  <Link to={project.live} target="_blank" className="btn btn-outline-primary">
                    <ExternalLink size={20} className="me-1" /> Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;
