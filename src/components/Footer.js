import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={isHomePage ? 'home-footer' : 'normal-footer'}>
      <p>&copy; 2025 BatterLife. All rights reserved.</p>
    </footer>
  );
}

export default Footer;