import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const galleryImages = [
    '/images/cakes-gallery.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg'
  ];

  const showPreviousImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 300);
  };

  const showNextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>The most delicious cakes and pastries for any occasion!</p>
        </div>
      </div>

      <div className="about-section scroll-animation">
        <div className="section-content">
          <div className="text-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, BatterLife started as a small family-owned bakery in the heart of the city.
              Our passion for baking and creating unique flavors has made us a favorite among locals and visitors alike.
            </p>
          </div>
          <div className="image-content">
            <img src="/images/story-bg.jpg" alt="Our Story" />
          </div>
        </div>
      </div>

      <div className="about-section scroll-animation">
        <div className="section-content reverse">
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>
              At BatterLife, we believe in using only the finest ingredients to create treats that not only taste amazing
              but also bring joy to every occasion. From weddings to birthdays, we’re here to make your celebrations sweeter.
            </p>
          </div>
          <div className="image-content">
            <img src="/images/mission-bg.jpg" alt="Our Mission" />
          </div>
        </div>
      </div>

      <div className="about-section scroll-animation">
        <div className="section-content">
          <div className="text-content">
            <h2>Our Team</h2>
            <p>
              Our team of talented bakers and pastry chefs is dedicated to crafting the perfect dessert for you.
              With years of experience and a love for creativity, we’re here to turn your ideas into delicious realities.
            </p>
          </div>
          <div className="image-content">
            <img src="/images/team-bg.jpg" alt="Our Team" />
          </div>
        </div>
      </div>

      <div className="about-gallery">
        <div className="gallery-container">
          <button className="arrow left-arrow" onClick={showPreviousImage}>
            &larr;
          </button>
          <div className="gallery-item">
            <img
              src={galleryImages[currentImageIndex]}
              alt={`Gallery ${currentImageIndex + 1}`}
              className={isFading ? 'fade-out' : ''}
            />
            <div className="overlay">Image {currentImageIndex + 1}</div>
          </div>
          <button className="arrow right-arrow" onClick={showNextImage}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;