import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'iNotes CRUD Web Application',
      description: 'Full-stack note management system featuring create, read, update, and delete functionality with PHP backend, MySQLi database, and jQuery DataTables.',
      tags: ['PHP', 'MySQLi', 'Bootstrap 5', 'jQuery'],
      github: 'https://github.com/YOUR_USERNAME/inotes-app',
      demo: 'https://your-live-demo-link.com',
    },
    {
      title: 'Precision JavaScript Stopwatch & Task Tracker',
      description: 'Browser-based productivity tool utilizing high-accuracy system clock timing (Date.now, setInterval) and dynamic DOM manipulation.',
      tags: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap'],
      github: 'https://github.com/YOUR_USERNAME/js-stopwatch',
      demo: 'https://your-live-demo-link.com',
    },
    {
      title: 'Personal Developer Portfolio',
      description: 'Responsive single-page portfolio built with React.js, reusable modular components, and EmailJS contact integration.',
      tags: ['React.js', 'CSS3', 'EmailJS'],
      github: 'https://github.com/YOUR_USERNAME/react-portfolio',
      demo: 'https://your-portfolio.vercel.app',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span className="tag" key={tIndex}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-footer">
              <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
                <FaGithub /> Source Code
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="proj-link">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;