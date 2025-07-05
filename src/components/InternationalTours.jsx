import React, { useEffect } from 'react';
import './InternationalTours.css'; // We'll create a dedicated CSS file

const InternationalTours = () => {
  useEffect(() => {
    // Animation for elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    // Initial check for elements in view
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="international-tours-page">
      {/* Hero Section */}
      <section className="hero-section-international">
        <div className="hero-content">
          <h1 className="animate-on-scroll fade-up">International Tours</h1>
          <p className="animate-on-scroll fade-up">Discover the world's most breathtaking destinations with our expertly crafted international tour packages</p>
        </div>
      </section>
      
      {/* Featured Destinations Section */}
      <section className="featured-destinations">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Featured Destinations</h2>
            <p>Explore our most popular international destinations</p>
          </div>
          
          <div className="destinations-grid">
            {/* Dubai Card */}
            <div className="destination-card animate-on-scroll fade-up">
              <div className="destination-image dubai-bg">
                <div className="destination-overlay">
                  <h3>Dubai Tours</h3>
                  <p>Explore Dubai with customized tour packages</p>
                </div>
              </div>
              <div className="destination-content">
                <div className="destination-details">
                  <div className="destination-info">
                    <span><i className="fa fa-calendar"></i> 5-7 Days</span>
                    <span><i className="fa fa-star"></i> 4.8/5</span>
                  </div>
                  <p>Experience the perfect blend of modern luxury and Arabian tradition</p>
                  <ul className="destination-highlights">
                    <li>Burj Khalifa Visit</li>
                    <li>Desert Safari</li>
                    <li>Dubai Mall & Fountain Show</li>
                    <li>Palm Jumeirah Tour</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>$1,200</span></p>
                  </div>
                </div>
                <a href="/international-tours/dubai" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
            
            {/* Malaysia Card */}
            <div className="destination-card animate-on-scroll fade-up">
              <div className="destination-image malaysia-bg">
                <div className="destination-overlay">
                  <h3>Malaysia Tours</h3>
                  <p>Book Malaysia tour packages at the best prices</p>
                </div>
              </div>
              <div className="destination-content">
                <div className="destination-details">
                  <div className="destination-info">
                    <span><i className="fa fa-calendar"></i> 6-8 Days</span>
                    <span><i className="fa fa-star"></i> 4.7/5</span>
                  </div>
                  <p>Discover the cultural diversity and natural beauty of Malaysia</p>
                  <ul className="destination-highlights">
                    <li>Petronas Twin Towers</li>
                    <li>Batu Caves</li>
                    <li>Langkawi Island</li>
                    <li>Kuala Lumpur City Tour</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>$950</span></p>
                  </div>
                </div>
                <a href="/international-tours/malaysia" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
            
            {/* Thailand Card */}
            <div className="destination-card animate-on-scroll fade-up">
              <div className="destination-image thailand-bg">
                <div className="destination-overlay">
                  <h3>Thailand Tours</h3>
                  <p>Discover the beauty and charm of Thailand</p>
                </div>
              </div>
              <div className="destination-content">
                <div className="destination-details">
                  <div className="destination-info">
                    <span><i className="fa fa-calendar"></i> 7-10 Days</span>
                    <span><i className="fa fa-star"></i> 4.9/5</span>
                  </div>
                  <p>Experience the perfect blend of vibrant city life and serene beaches</p>
                  <ul className="destination-highlights">
                    <li>Bangkok City Tour</li>
                    <li>Phi Phi Islands</li>
                    <li>Phuket Beaches</li>
                    <li>Chiang Mai Temples</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>$850</span></p>
                  </div>
                </div>
                <a href="/international-tours/thailand" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Why Choose Our International Tours</h2>
            <p>We provide exceptional travel experiences with attention to every detail</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card animate-on-scroll fade-up">
              <div className="feature-icon">
                <i className="fa fa-check-circle"></i>
              </div>
              <h3>Expert Guides</h3>
              <p>Our knowledgeable local guides ensure you experience the authentic culture and hidden gems of each destination</p>
            </div>
            
            <div className="feature-card animate-on-scroll fade-up">
              <div className="feature-icon">
                <i className="fa fa-hotel"></i>
              </div>
              <h3>Premium Accommodations</h3>
              <p>Stay in carefully selected hotels that offer comfort, convenience, and excellent service</p>
            </div>
            
            <div className="feature-card animate-on-scroll fade-up">
              <div className="feature-icon">
                <i className="fa fa-plane"></i>
              </div>
              <h3>Hassle-Free Travel</h3>
              <p>We handle all the logistics including flights, transfers, and accommodations so you can focus on enjoying your journey</p>
            </div>
            
            <div className="feature-card animate-on-scroll fade-up">
              <div className="feature-icon">
                <i className="fa fa-credit-card"></i>
              </div>
              <h3>Competitive Pricing</h3>
              <p>Get the best value for your money with our carefully crafted tour packages and transparent pricing</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>What Our Travelers Say</h2>
            <p>Read about the experiences of travelers who have explored the world with us</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>"Our Dubai tour was absolutely amazing! The itinerary was perfectly balanced with iconic attractions and free time to explore. Our guide was knowledgeable and friendly. Highly recommend!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <p>Dubai Tour, May 2023</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>"The Malaysia tour exceeded all our expectations. From the bustling streets of Kuala Lumpur to the serene beaches of Langkawi, everything was perfectly organized. Can't wait to book another tour!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Rajesh Kumar</h4>
                  <p>Malaysia Tour, February 2023</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>"Thailand was a dream come true! The temples, beaches, and food were incredible. Our guide made sure we experienced the authentic Thai culture. The hotels were excellent and the entire trip was smooth."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Anita Patel</h4>
                  <p>Thailand Tour, December 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll fade-up">
            <h2>Ready to Explore the World?</h2>
            <p>Contact us today to book your dream international tour package</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/international-tours#featured-destinations" className="btn-secondary">View All Destinations</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalTours;