import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card">
        <div className="exp-header">
          <div>
            <h3>Frontend Web Developer Intern</h3>
            <p className="exp-company">[Your Company Name] — Lahore, Pakistan</p>
          </div>
          <span className="exp-date">Aug 2026 – Nov 2026 (3 Months)</span>
        </div>
        <ul className="exp-list">
          <li>Developed responsive and mobile-first user interfaces using HTML5, CSS3, Bootstrap 5, and React.js.</li>
          <li>Built reusable React components, managed interactive state with Hooks, and integrated REST APIs.</li>
          <li>Collaborated with senior developers on debugging, cross-browser compatibility, and UI performance improvements.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;