import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Countries' },
    { number: '5K+', label: 'Happy Travelers' },
    { number: '100+', label: 'Tour Packages' }
  ];

  const features = [
    {
      icon: '🌱',
      title: 'Sustainable Travel',
      description: 'We are committed to minimizing our impact on the environment and supporting local communities.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Extensive network of partners and destinations worldwide for unforgettable experiences.'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Passionate travelers with wealth of knowledge and experience in the travel industry.'
    },
    {
      icon: '⭐',
      title: 'Exceptional Service',
      description: 'We provide our customers with exceptional service every step of the way.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-on-scroll fade-left">
            <h2>About Go See Holidays</h2>
            <p className="lead">
              Our company was founded by two friends who shared a love of
              travel. After years of travelling, we decided to start our own
              travels company.
            </p>
            <p>
              We wanted to create a business that would help others experience
              the same joy and wonder that we felt when we traveled. At Go See
              Holidays, we believe that travel should be sustainable and
              responsible.
            </p>
            <p>
              Our team is made up of passionate travelers who have a wealth of
              knowledge and experience in the travel industry. From our expert
              travel advisors to our friendly customer service team, we are all
              committed to making your travel experience unforgettable.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`stat-item animate-on-scroll scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image animate-on-scroll fade-right">
            <img
              src="https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Travel team planning"
            />
          </div>
        </div>
        <div className="bento-grid">
          <div className="bento-item bento-large">
            <div className="bento-content">
              <div className="story-icon">🌟</div>
              <h4>Our Journey</h4>
              <p>
                Founded by two friends with a love for travel, Go See Holidays
                was born from countless adventures and a dream to help others
                feel the same joy and wonder of exploring the world.
              </p>
            </div>
          </div>

          <div className="bento-item">
            <div className="bento-content">
              <div className="story-icon">🌿</div>
              <h4>Sustainability</h4>
              <p>
                We care about the planet. That’s why we craft responsible
                journeys that respect nature, support local communities, and
                create lasting positive impact wherever we go.
              </p>
            </div>
          </div>

          <div className="bento-item">
            <div className="bento-content">
              <div className="story-icon">💛</div>
              <h4>Our Promise</h4>
              <p>
                We promise personalized service, thoughtful planning, and
                authentic experiences — so every trip leaves you with
                unforgettable memories and a smile.
              </p>
            </div>
          </div>

          <div className="bento-item bento-wide">
            <div className="bento-content">
              <blockquote>
                “At Go See Holidays, we believe travel is not just about
                destinations — it’s about meaningful experiences that connect
                people, cultures, and nature.”
              </blockquote>
            </div>
          </div>
        </div>

        <div className="about-features">
          <h3 className="text-center animate-on-scroll fade-up">
            Why Choose Go See Holidays?
          </h3>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card animate-on-scroll fade-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="cta-section animate-on-scroll fade-up">
            <p className="cta-text">
              Ready to start planning your next adventure? Explore our website
              to find your perfect destination, or contact our team for
              personalized travel recommendations.
            </p>
            <div className="cta-buttons">
              <a href="#destinations" className="btn btn-primary">
                Find Your Destination
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get Recommendations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;