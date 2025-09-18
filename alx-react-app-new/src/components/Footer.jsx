// src/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      position: 'fixed',
      bottom: '0',
      width: '100%'
    }}>
      <p>&copy; 2024 My React App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;