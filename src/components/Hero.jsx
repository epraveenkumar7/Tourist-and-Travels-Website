import React, { useEffect, useState } from "react";
import "./Hero.css";
import vid1 from "../assets/hero-video/vid-1.mp4";
import vid2 from "../assets/hero-video/vid-2.mp4";
import vid3 from "../assets/hero-video/vid-3.mp4";
import vid4 from "../assets/hero-video/vid-4.mp4";

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      src: vid2,
      title: "Tropical Paradise",
    },
    {
      src: vid1,
      title: "Mountain Adventure",
    },
    {
      src: vid3,
      title: "Ocean Waves",
    },
    {
      src: vid4,
      title: "Forest Escape",
    },
  ];

  useEffect(() => {
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

    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 9000);

    return () => {
      observer.disconnect();
      clearInterval(videoInterval);
    };
  }, [videos.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <video
          key={currentVideo}
          className="hero-video active"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videos[currentVideo].src} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>
      </div>

      {/* <div className="video-indicators">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`video-indicator ${
              index === currentVideo ? "active" : ""
            }`}
            onClick={() => setCurrentVideo(index)}
          >
            <span></span>
          </button>
        ))}
      </div> */}

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title animate-on-scroll fade-up">
              Explore the World with
              <span className="highlight"> Go See Holidays</span>
            </h1>
            <p className="hero-subtitle animate-on-scroll fade-up">
              We are passionate about helping people explore the world. Our
              mission is to make travel accessible and enjoyable for everyone.
            </p>
            <div className="hero-buttons animate-on-scroll fade-up">
              <a href="#destinations" className="btn btn-primary">
                Explore Destinations
              </a>
              <a
                href="#packages"
                className="btn btn-secondary"
                style={{
                  width: "200px",
                  textAlign: "center",
                  height: "60px",
                  marginTop: "20px",
                }}
              >
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
