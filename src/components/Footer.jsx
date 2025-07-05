import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Go See Holidays</h3>
              <p>Your gateway to extraordinary adventures and unforgettable memories. We are passionate about helping people explore the world.</p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#policies">Policies</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Flight Booking</a></li>
              <li><a href="#">Hotel Reservation</a></li>
              <li><a href="#">Tour Packages</a></li>
              <li><a href="#">Travel Insurance</a></li>
              <li><a href="#">Visa Assistance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#policies">Cancellation Policy</a></li>
              <li><a href="#">24/7 Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 Go See Holidays. All rights reserved.</p>
            <p>Designed with ❤️ for travel enthusiasts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;