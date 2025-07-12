import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header text-center animate-on-scroll fade-up">
          <h2>Get In Touch</h2>
          <p>Ready to plan your next adventure? Let's make it happen!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-on-scroll fade-left">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>123 Travel Street, Adventure City, AC 12345</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91 8807249960</p>
                <p>+91 8807243963</p>
                <p>+91 8807243962</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>goseeholidays@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h4>Office Hours</h4>
                <p>
                  Mon - Fri: 9AM - 6PM
                  <br />
                  Sat: 10AM - 4PM
                </p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  📘
                </a>
                <a href="#" className="social-icon">
                  📷
                </a>
                <a href="#" className="social-icon">
                  🐦
                </a>
                <a href="#" className="social-icon">
                  💼
                </a>
              </div>
            </div>
          </div>

          <form
            className="contact-form animate-on-scroll fade-right"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="destination">Preferred Destination</label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="">Select a destination</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="santorini">Santorini, Greece</option>
                <option value="machu-picchu">Machu Picchu, Peru</option>
                <option value="tokyo">Tokyo, Japan</option>
                <option value="maldives">Maldives</option>
                <option value="paris">Paris, France</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your dream trip..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;