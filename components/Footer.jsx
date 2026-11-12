import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '25px',
      backgroundColor: '#0b0f19',
      borderTop: '1px solid #1e293b',
      color: '#64748b',
      fontSize: '0.9rem'
    }}>
      <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;