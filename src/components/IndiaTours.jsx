import React, { useEffect } from 'react';
import './IndiaTours.css';

const IndiaTours = () => {
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
    <div className="india-tours-page">
      {/* Hero Section */}
      <section className="hero-section-india">
        <div className="hero-content">
          <h1 className="animate-on-scroll fade-up">India Tours</h1>
          <p className="animate-on-scroll fade-up">Discover the incredible diversity and rich heritage of India with our expertly crafted tour packages</p>
        </div>
      </section>
      
      {/* Featured Tours Section */}
      <section className="featured-tours">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Featured Destinations</h2>
            <p>Explore our most popular Indian destinations</p>
          </div>
          
          <div className="tours-grid">
            {/* Kerala Card */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image kerala-bg">
                <div className="tour-overlay">
                  <h3>Kerala Tour</h3>
                  <p>Experience God's Own Country</p>
                </div>
              </div>
              <div className="tour-content">
                <div className="tour-details">
                  <div className="tour-info">
                    <span><i className="fa fa-calendar"></i> 5-7 Days</span>
                    <span><i className="fa fa-star"></i> 4.9/5</span>
                  </div>
                  <p>Explore the serene backwaters, lush green landscapes, and pristine beaches</p>
                  <ul className="tour-highlights">
                    <li>Alleppey Houseboat Stay</li>
                    <li>Munnar Tea Gardens</li>
                    <li>Kovalam Beach</li>
                    <li>Periyar Wildlife Sanctuary</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>₹25,000</span></p>
                  </div>
                </div>
                <a href="/india-tours/kerala" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
            
            {/* Rajasthan Card */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image rajasthan-bg">
                <div className="tour-overlay">
                  <h3>Rajasthan Tour</h3>
                  <p>Discover the Land of Kings</p>
                </div>
              </div>
              <div className="tour-content">
                <div className="tour-details">
                  <div className="tour-info">
                    <span><i className="fa fa-calendar"></i> 7-10 Days</span>
                    <span><i className="fa fa-star"></i> 4.8/5</span>
                  </div>
                  <p>Experience the royal heritage, vibrant culture, and majestic forts</p>
                  <ul className="tour-highlights">
                    <li>Jaipur Pink City Tour</li>
                    <li>Udaipur Lake Palace</li>
                    <li>Jodhpur Blue City</li>
                    <li>Jaisalmer Desert Safari</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>₹30,000</span></p>
                  </div>
                </div>
                <a href="/india-tours/rajasthan" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
            
            {/* Golden Triangle Card */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image golden-triangle-bg">
                <div className="tour-overlay">
                  <h3>Golden Triangle Tour</h3>
                  <p>Delhi, Agra, and Jaipur</p>
                </div>
              </div>
              <div className="tour-content">
                <div className="tour-details">
                  <div className="tour-info">
                    <span><i className="fa fa-calendar"></i> 5-6 Days</span>
                    <span><i className="fa fa-star"></i> 4.7/5</span>
                  </div>
                  <p>Visit the iconic landmarks of North India in one perfect journey</p>
                  <ul className="tour-highlights">
                    <li>Delhi Historical Tour</li>
                    <li>Taj Mahal Visit</li>
                    <li>Amber Fort Exploration</li>
                    <li>Cultural Experiences</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>₹22,000</span></p>
                  </div>
                </div>
                <a href="/india-tours/golden-triangle" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
            
            {/* Goa Card */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image goa-bg">
                <div className="tour-overlay">
                  <h3>Goa Tour Package</h3>
                  <p>Beach Paradise of India</p>
                </div>
              </div>
              <div className="tour-content">
                <div className="tour-details">
                  <div className="tour-info">
                    <span><i className="fa fa-calendar"></i> 4-6 Days</span>
                    <span><i className="fa fa-star"></i> 4.8/5</span>
                  </div>
                  <p>Relax on pristine beaches and enjoy the vibrant nightlife</p>
                  <ul className="tour-highlights">
                    <li>North Goa Beach Hopping</li>
                    <li>South Goa Relaxation</li>
                    <li>Water Sports Activities</li>
                    <li>Portuguese Heritage Tour</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>₹18,000</span></p>
                  </div>
                </div>
                <a href="/india-tours/goa" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
            
            {/* Himachal Pradesh Card */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image himachal-bg">
                <div className="tour-overlay">
                  <h3>Shimla - Kullu - Manali Tour</h3>
                  <p>Himalayan Adventure</p>
                </div>
              </div>
              <div className="tour-content">
                <div className="tour-details">
                  <div className="tour-info">
                    <span><i className="fa fa-calendar"></i> 6-8 Days</span>
                    <span><i className="fa fa-star"></i> 4.6/5</span>
                  </div>
                  <p>Experience the majestic Himalayas and adventure activities</p>
                  <ul className="tour-highlights">
                    <li>Shimla Sightseeing</li>
                    <li>Kullu Valley Exploration</li>
                    <li>Manali Adventure Sports</li>
                    <li>Rohtang Pass Visit (seasonal)</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>₹20,000</span></p>
                  </div>
                </div>
                <a href="/india-tours/himachal" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
            
            {/* Andaman Card */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image andaman-bg">
                <div className="tour-overlay">
                  <h3>Andaman Tour Package</h3>
                  <p>Island Paradise</p>
                </div>
              </div>
              <div className="tour-content">
                <div className="tour-details">
                  <div className="tour-info">
                    <span><i className="fa fa-calendar"></i> 5-7 Days</span>
                    <span><i className="fa fa-star"></i> 4.9/5</span>
                  </div>
                  <p>Discover crystal clear waters and pristine beaches</p>
                  <ul className="tour-highlights">
                    <li>Radhanagar Beach</li>
                    <li>Cellular Jail Visit</li>
                    <li>Scuba Diving & Snorkeling</li>
                    <li>Ross Island Tour</li>
                  </ul>
                  <div className="price-container">
                    <p className="price">Starting from <span>₹28,000</span></p>
                  </div>
                </div>
                <a href="/india-tours/andaman" className="btn-view-tour">View Our Tour</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Experiences Section */}
      <section className="popular-experiences">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Popular Experiences</h2>
            <p>Immerse yourself in authentic Indian experiences</p>
          </div>
          
          <div className="experiences-grid">
            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">
                <i className="fa fa-utensils"></i>
              </div>
              <h3>Culinary Tours</h3>
              <p>Explore the diverse flavors of Indian cuisine with cooking classes and food walks across different regions</p>
            </div>
            
            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">
                <i className="fa fa-om"></i>
              </div>
              <h3>Yoga & Wellness</h3>
              <p>Rejuvenate your mind and body with traditional yoga sessions and Ayurvedic treatments</p>
            </div>
            
            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">
                <i className="fa fa-mountain"></i>
              </div>
              <h3>Adventure Activities</h3>
              <p>Experience thrilling adventures from trekking in the Himalayas to water sports in coastal regions</p>
            </div>
            
            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">
                <i className="fa fa-landmark"></i>
              </div>
              <h3>Cultural Immersion</h3>
              <p>Participate in local festivals, traditional art workshops, and village homestays</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>What Our Travelers Say</h2>
            <p>Read about the experiences of travelers who have explored India with us</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>"Our Kerala tour was absolutely magical! The houseboat stay in Alleppey was the highlight of our trip. The tour was perfectly organized with the right balance of activities and relaxation time."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Rahul Mehta</h4>
                  <p>Kerala Tour, March 2023</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>"The Rajasthan tour exceeded all our expectations. The palaces, forts, and desert safari were incredible. Our guide was knowledgeable and made sure we experienced the authentic culture of Rajasthan."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Priya Sharma</h4>
                  <p>Rajasthan Tour, November 2022</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>"The Golden Triangle tour was perfect for our first visit to India. Seeing the Taj Mahal at sunrise was a dream come true. The entire trip was well-organized and our accommodations were excellent."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Amit Patel</h4>
                  <p>Golden Triangle Tour, February 2023</p>
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
            <h2>Ready to Explore India?</h2>
            <p>Contact us today to book your dream Indian tour package</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/india-tours#featured-tours" className="btn-secondary">View All Destinations</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndiaTours;