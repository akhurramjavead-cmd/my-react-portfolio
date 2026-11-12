import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiJquery, SiVite } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    { name: 'React.js', icon: <FaReact style={{ color: '#61dafb' }} /> },
    { name: 'JavaScript ', icon: <FaJs style={{ color: '#f7df1e' }} /> },
    { name: 'Bootstrap 5', icon: <FaBootstrap style={{ color: '#7952b3' }} /> },
    { name: 'HTML5', icon: <FaHtml5 style={{ color: '#e34f26' }} /> },
    { name: 'CSS3', icon: <FaCss3Alt style={{ color: '#1572b6' }} /> },
    { name: 'jQuery', icon: <SiJquery style={{ color: '#0769ad' }} /> },
    { name: 'PHP', icon: <FaPhp style={{ color: '#777bb4' }} /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Tech Stack</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;