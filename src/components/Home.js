import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <video autoPlay loop muted id="video-bg">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="welcome-message">
          <h1>Welcome to BatterLife</h1>
          <p>Where taste meets creativity.</p>
          <Link to="/products" className="order-button">Explore Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;