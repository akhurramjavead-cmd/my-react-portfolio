import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-logo">AbuBakar<span>.dev</span></a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>

        <div className="nav-socials" style={{ display: 'flex', gap: '15px', fontSize: '1.3rem' }}>
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" style={{ color: '#f8fafc' }} aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" style={{ color: '#38bdf8' }} aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;