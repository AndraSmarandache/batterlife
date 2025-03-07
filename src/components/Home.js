import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <video autoPlay loop muted id="video-bg">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to BatterLife</h1>
        <p>The most delicious cakes and pastries for any occasion!</p>
      </div>
    </div>
  );
}

export default Home;