import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between align-items-center">
        
        {/* Left Side: Brand Name */}
        <Link className="navbar-brand fw-bold" to="/" style={{ color: "#FFB6C1", fontFamily: "Lora, serif", fontSize: "2rem" }}>
          Portfolio
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            border: "2px solid #FFB6C1",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
        >
          {isOpen ? <X size={24} style={{ color: "#FFB6C1" }} /> : <Menu size={24} style={{ color: "#FFB6C1" }} />}
        </button>

        {/* Center: Menu Items */}
        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>

{/* Right Side: Social Media Icons */}
<div className="d-none d-lg-flex align-items-center gap-3">
  <Link 
    to="https://github.com/Madhavi-Datti" 
    className="social-icon"
  >
    <Github size={24} />
  </Link>
  <Link 
    to="https://www.linkedin.com/in/madhavi-datti-b18761185/" 
    className="social-icon"
  >
    <Linkedin size={24} />
  </Link>
  <Link 
    to="mailto:dattimadhavi8@gmail.com" 
    className="social-icon"
  >
    <Mail size={24} />
  </Link>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
