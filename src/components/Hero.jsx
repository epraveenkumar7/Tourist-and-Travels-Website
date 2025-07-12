import React, { useEffect, useState } from "react";
import "./Hero.css";
import img1 from "../assets/paris.jpg";
import img2 from "../assets/bali.jpg";
import img3 from "../assets/thailand.jpg";
import img4 from "../assets/malaysia.jpg";
import img5 from "../assets/USA.jpg";
import img6 from "../assets/dubai.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: img1,
      title: "Discover Paris",
      subtitle:
        "Experience the romance, art, and history of the City of Light.",
    },
    {
      src: img2,
      title: "Explore Bali",
      subtitle:
        "Relax in paradise with lush jungles, serene beaches, and spiritual retreats.",
    },
    {
      src: img3,
      title: "Unwind in Thailand",
      subtitle:
        "Discover vibrant culture, stunning beaches, and ancient temples.",
    },
    {
      src: img4,
      title: "Discover Malaysia",
      subtitle:
        "Experience diverse landscapes, modern cities, and rich traditions.",
    },
    {
      src: img5,
      title: "Explore the USA",
      subtitle:
        "Discover iconic landmarks, vibrant cities, and natural wonders.",
    },
    {
      src: img6,
      title: "Discover Dubai",
      subtitle: "Marvel at modern architecture, luxury, and desert adventures.",
    },
  ];

  // Preload images to prevent gray screen
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(imageInterval);
    };
  }, [images.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {images.map((image, index) => (
          <img
            key={index}
            className={`hero-image ${index === currentImage ? "active" : ""}`}
            src={image.src}
            alt={image.title}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

     

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title animate-on-scroll fade-up">
              {images[currentImage].title}
              <span className="highlight"> with Go See Holidays</span>
            </h1>
            <p className="hero-subtitle animate-on-scroll fade-up">
              {images[currentImage].subtitle}
            </p>
            <div className="hero-buttons animate-on-scroll fade-up">
              <a href="#destinations" className="btn btn-primary">
                Explore Destinations
              </a>
              <a href="#packages" className="btn btn-primary">
                View Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
