import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SpiritualTours.css";
import sai1 from"../assets/sai1.jpg";
import sai2 from"../assets/sai2.jpg";
import sai3 from"../assets/sai3.jpg";
import sai4 from"../assets/sai4.jpg";
import sai5 from"../assets/sai6.jpg";
import sai6 from"../assets/sai6.jpg";
// import sai7 from"../assets/sai7.jpg";
import sai8 from"../assets/sai8.jpg";
// import sai8 from"../assets/sai8.jpg";
// import sai6 from "../assets/sai7.jpg";
// import sai7 from "../assets/sai8.jpg";
// import sai8 from "../assets/sai5.jpg";
 


const SpiritualTours = () => {
  const images = [sai4, sai1, sai2, sai3, sai5,sai6,sai8,sai2]; // Array of images for the tours
  useEffect(() => {
    // Animation for elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    // Initial check for elements in view
    animateOnScroll();

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  const tours = [
    {
      id: 1,
      title: "Shirdi Tour Package from Chennai 1N/2D",
      description:
        "Chennai - Shirdi - Chennai (Includes Flight Tickets, 5 Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
      price: "₹18,900/Person",
      groupSize: 20,
      languages: "Tamil / English Speaking Guide",
    },
    {
      id: 2,
      title: "Shirdi & 2 Jyothirlingam Tour Package from Chennai 2N/3D",
      description:
        "Chennai - Pune - Bhimashankar - Shirdi - Trimbakeshwar - Shani Shingnapur - Pune - Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
      price: "₹21,900/Person",
      groupSize: 25,
      languages: "Tamil / English Speaking Guide",
    },
    {
      id: 3,
      title: "Shirdi & 2 Jyothirlingam Tour Package from Chennai 2N/3D",
      description:
        "Chennai - Mumbai - Mumbai Siddhi Vinayagar & Mahalakshmi - Nashik Triambakeshwar - Shirdi - Grishneshwar - Ellora - Pune – Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
      price: "₹21,900/Person",
      groupSize: 35,
      languages: "Tamil / English Speaking Guide",
    },
    {
      id: 4,
      title: "Shirdi & Ellora Tour Package from Chennai 1N/2D",
      description:
        "Chennai - Pune - Shani Shingnapur - Shirdi - Grishneshwar - Ellora - Pune – Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
      price: "₹17,900/Person",
      groupSize: 35,
      languages: "Tamil / English Speaking Guide",
    },
    {
      id: 5,
      title: "Shirdi & Pandharpur Tour Package from Chennai 1N/2D",
      description:
        "Chennai - Pune - Pandharpur - Shirdi - Shani Shingnapur - Pune - Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
      price: "₹17,900/Person",
      groupSize: 25,
      languages: "Tamil / English Speaking Guide",
    },
    {
      id: 6,
      title: "Shirdi & Pandharpur Tour Package from Chennai 2N/3D",
      description:
        "Chennai - Pune - Pandharpur - Shirdi - Grishneshwar - Ellora - Shani Shingnapur - Pune – Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
      price: "₹20,900/Person",
      groupSize: 25,
      languages: "Tamil / English Speaking Guide",
    },
    {
      id: 7,
      title: "Shirdi, Kolhapur & Pandharpur Tour Package from Chennai 2N/3D",
      description:
        "Chennai - Pune - Kolhapur - Pandharpur - Shirdi - Shani Shingnapur - Pune - Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
      price: "₹21,900/Person",
      groupSize: 25,
      languages: "Tamil / English Speaking Guide",
    },
    {
      id: 8,
      title: "Shirdi & 3 Jyothirlingam Tour Package from Chennai 2N/3D",
      description:
        "Chennai - Pune - Bhimashankar - Shirdi - Trimbakeshwar - Grishneshwar - Ellora - Pune - Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
      price: "₹21,900/Person",
      groupSize: 25,
      languages: "Tamil / English Speaking Guide",
    },
  ];

  return (
    <div className="spiritual-tours-page">
      {/* Hero Section */}
      <section className="hero-section-spiritual">
        <div className="hero-content">
          <h1 className="animate-on-scroll fade-up">Spiritual Tours</h1>
          <p className="animate-on-scroll fade-up">
            Embark on a soulful journey through India’s sacred sites with our
            curated spiritual tour packages
          </p>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="featured-tours">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Featured Spiritual Destinations</h2>
            <p>Explore India’s holiest sites and spiritual experiences</p>
          </div>

          <div className="tours-grid">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="tour-card animate-on-scroll fade-up"
              >
                <div
                  className="tour-image"
                  style={{
                    backgroundImage: `url(${images[tour.id % 8]})`, // Alternate images for demonstration
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                    borderRadius: "8px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* <div className="tour-overlay">
                    <h3>{tour.title}</h3>
                    <p>{tour.description}</p>
                  </div> */}
                </div>
                <div className="tour-content">
                  <div className="tour-details">
                    <div className="tour-info">
                      <span>
                        <i className="fa fa-calendar"></i> 1-3 Days
                      </span>{" "}
                      {/* Placeholder, adjust as needed */}
                      <span>
                        <i className="fa fa-star"></i> 4.8/5
                      </span>{" "}
                      {/* Placeholder, adjust as needed */}
                    </div>
                    <h3 style={{ fontSize: "1rem", padding: "0.5rem 0rem" }}>
                      {tour.title}
                    </h3>
                    <p>Experience a spiritual journey to sacred sites.</p>{" "}
                    {/* Generic description, adjust as needed */}
                    <ul className="tour-highlights">
                      <li>Temple Darshan</li>
                      <li>Spiritual Rituals</li>
                      <li>Guided Tours</li>
                      <li>Cultural Insights</li>
                    </ul>
                    <div className="price-container">
                      <p className="price">
                        Starting from <span>{tour.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className="tour-buttons">
                    <Link
                      to={`/tour-details/${tour.id}`}
                      className="btn-details"
                      onClick={() => {
                        window.scrollTo(0, 0); // Scroll to top on link click
                      }}
                    >
                      Details
                    </Link>
                    <Link
                      to="/contact"
                      className="btn-enquiry"
                      onClick={() => {
                        window.scrollTo(0, 0); // Scroll to top on link click
                      }}
                    >
                      Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Experiences Section */}
      <section className="popular-experiences">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Popular Spiritual Experiences</h2>
            <p>
              Connect with India’s spiritual heritage through unique experiences
            </p>
          </div>

          <div className="experiences-grid">
            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">
                <i className="fa fa-om"></i>
              </div>
              <h3>Meditation Retreats</h3>
              <p>
                Find inner peace with guided meditation sessions in serene
                ashrams and sacred sites
              </p>
            </div>

            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">
                <i className="fa fa-pray"></i>
              </div>
              <h3>Temple Pilgrimages</h3>
              <p>
                Visit ancient temples and participate in sacred rituals across
                India’s holy cities
              </p>
            </div>

            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">
                <i className="fa fa-water"></i>
              </div>
              <h3>Ganga Aarti Ceremonies</h3>
              <p>
                Witness the divine evening rituals along the banks of the Ganges
              </p>
            </div>

            <div className="experience-card animate-on-scroll fade-up">
              <div className="experience-icon">
                <i className="fa fa-book"></i>
              </div>
              <h3>Spiritual Learning</h3>
              <p>
                Learn about ancient scriptures, yoga philosophy, and spiritual
                practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>What Our Pilgrims Say</h2>
            <p>
              Hear from travelers who have experienced India’s spiritual
              journeys with us
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>
                  "The Varanasi pilgrimage was a transformative experience. The
                  Ganga Aarti and temple visits were deeply moving, and the tour
                  was perfectly organized."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Neha Gupta</h4>
                  <p>Varanasi Tour, April 2023</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>
                  "Rishikesh was a haven for peace and spirituality. The yoga
                  retreat and Ganga Aarti in Haridwar were highlights of our
                  journey."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Vikram Singh</h4>
                  <p>Rishikesh Tour, January 2023</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-on-scroll fade-up">
              <div className="testimonial-content">
                <p>
                  "The Golden Temple in Amritsar was awe-inspiring. The tour was
                  well-planned, and the langar experience was unforgettable."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Anita Desai</h4>
                  <p>Amritsar Tour, February 2023</p>
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
            <h2>Ready for a Spiritual Journey?</h2>
            <p>
              Contact us to book your sacred tour across India’s spiritual
              destinations
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a
                href="/spiritual-tours#featured-tours"
                className="btn-secondary"
              >
                View All Destinations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpiritualTours;
