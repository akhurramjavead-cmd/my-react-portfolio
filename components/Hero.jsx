import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">Frontend Web Developer</p>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Abubakar Khurram</span>
        </h1>
        <p className="hero-description">
          Computer Science undergraduate specializing in building fast, responsive web applications 
          with React.js, JavaScript (ES6+), Bootstrap, PHP, and MySQL.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="/resume.pdf" download="Abubakar_Khurram_Resume.pdf" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <FaFileDownload /> Download Resume
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;