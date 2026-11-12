import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a passionate Computer Science student and Full Stack Web Developer. 
            I focus on creating clean, efficient, and user-friendly web applications.
          </p>
          <p>
            My experience spans frontend engineering with modern React and Bootstrap, 
            alongside solid backend logic using PHP and MySQL databases. I love solving complex UI 
            challenges and building interactive tools.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <span>Degree:</span> BS Computer Science
            </div>
            <div className="detail-item">
              <span>Focus:</span> Web Development & UI/UX
            </div>
            <div className="detail-item">
              <span>Location:</span> Lahore, Pakistan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;