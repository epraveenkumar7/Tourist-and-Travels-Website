import React, { useEffect } from "react";
import "./HoneymoonTours.css";

const HoneymoonTours = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <div className="honeymoon-tours-page">
      {/* Hero Section */}
      <section className="hero-section-honeymoon">
        <div className="hero-content">
          <h1 className="animate-on-scroll fade-up">Honeymoon Tours</h1>
          <p className="animate-on-scroll fade-up">
            Celebrate your love story with our handpicked romantic destinations
          </p>
        </div>
      </section>

      {/* Featured Honeymoon Destinations */}
      <section className="featured-tours">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Romantic Destinations</h2>
            <p>Our most loved honeymoon escapes</p>
          </div>

          <div className="tours-grid">
            {/* Maldives */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image maldives-bg">
                <div className="tour-overlay">
                  <h3>Maldives</h3>
                  <p>Luxury Overwater Villas</p>
                </div>
              </div>
              <div className="tour-content">
                <p>Stay in dreamy resorts surrounded by turquoise waters.</p>
                <div className="price-container">
                  <p className="price">
                    Starting from <span>₹90,000</span>
                  </p>
                </div>
                <a href="/honeymoon/maldives" className="btn-view-tour">
                  View Tour
                </a>
              </div>
            </div>

            {/* Switzerland */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image switzerland-bg">
                <div className="tour-overlay">
                  <h3>Switzerland</h3>
                  <p>Alpine Romance</p>
                </div>
              </div>
              <div className="tour-content">
                <p>Share magical moments amidst snow-capped mountains.</p>
                <div className="price-container">
                  <p className="price">
                    Starting from <span>₹1,50,000</span>
                  </p>
                </div>
                <a href="/honeymoon/switzerland" className="btn-view-tour">
                  View Tour
                </a>
              </div>
            </div>

            {/* Bali */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image bali-bg">
                <div className="tour-overlay">
                  <h3>Bali</h3>
                  <p>Island Bliss</p>
                </div>
              </div>
              <div className="tour-content">
                <p>
                  Private villas, lush jungles, and beautiful beaches await.
                </p>
                <div className="price-container">
                  <p className="price">
                    Starting from <span>₹60,000</span>
                  </p>
                </div>
                <a href="/honeymoon/bali" className="btn-view-tour">
                  View Tour
                </a>
              </div>
            </div>

            {/* Paris */}
            <div className="tour-card animate-on-scroll fade-up">
              <div className="tour-image paris-bg">
                <div className="tour-overlay">
                  <h3>Paris</h3>
                  <p>City of Love</p>
                </div>
              </div>
              <div className="tour-content">
                <p>Walk hand in hand through the romantic streets of Paris.</p>
                <div className="price-container">
                  <p className="price">
                    Starting from <span>₹1,20,000</span>
                  </p>
                </div>
                <a href="/honeymoon/paris" className="btn-view-tour">
                  View Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Honeymoon Experiences */}
      <section className="popular-experiences">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Romantic Experiences</h2>
            <p>Add magic to your honeymoon</p>
          </div>
          <div className="experiences-grid">
            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">💑</div>
              <h3>Private Candlelight Dinners</h3>
              <p>
                Enjoy intimate dinners under the stars by the beach or
                mountains.
              </p>
            </div>

            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">🏝️</div>
              <h3>Island Hopping</h3>
              <p>
                Discover secluded beaches and crystal clear lagoons together.
              </p>
            </div>

            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">🏔️</div>
              <h3>Snow Adventures</h3>
              <p>
                Ski together or cuddle by the fire with scenic alpine views.
              </p>
            </div>

            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">🧘‍♀️</div>
              <h3>Spa & Wellness</h3>
              <p>
                Rejuvenate with relaxing couple massages and wellness retreats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Happy Couples</h2>
            <p>Stories from newlyweds who traveled with us</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll fade-up">
              <p>
                "Our Maldives honeymoon was truly magical! From the overwater
                villa to romantic dinners — everything was perfect."
              </p>
              <h4>Ananya & Raj</h4>
            </div>
            <div className="testimonial-card animate-on-scroll fade-up">
              <p>
                "Switzerland gave us dreamy snowy days and cozy nights by the
                fireplace. Highly recommend!"
              </p>
              <h4>Priya & Karan</h4>
            </div>
            <div className="testimonial-card animate-on-scroll fade-up">
              <p>
                "Bali was paradise — private pool villas, amazing food, and
                sunsets on the beach."
              </p>
              <h4>Meera & Sandeep</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll fade-up">
            <h2>Plan Your Dream Honeymoon</h2>
            <p>Contact us today and start your journey of a lifetime</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/honeymoon#featured-tours" className="btn-secondary">
                Explore Packages
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HoneymoonTours;
