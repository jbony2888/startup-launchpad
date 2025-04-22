import React from 'react';

const Footer = () => {
    const footerStyle = {
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px 0'
    };
  
    return (
      <footer style={footerStyle}>
        &copy; 2025 Startup Launchpad. All rights reserved.
      </footer>
    );
  }


export  default Footer;