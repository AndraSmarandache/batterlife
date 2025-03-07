import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer style={{ backgroundColor: isHomePage ? 'transparent' : 'white', color: isHomePage ? 'white' : 'black' }}>
      <p>&copy; 2025 BatterLife. All rights reserved.</p>
    </footer>
  );
}

export default Footer;