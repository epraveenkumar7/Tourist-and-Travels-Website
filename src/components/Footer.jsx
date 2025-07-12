import React from "react";
import "./Footer.css";

const Footer = () => {
  // Replace YOUR_API_KEY with your actual Google Maps API key
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=13.081667,80.211196&zoom=15&size=300x200&maptype=roadmap&markers=color:red%7Clabel:Y%7C13.081667,80.211196&key=YOUR_API_KEY`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Yatrika Tours PVT LTD</h3>
              <p>
                Your gateway to extraordinary adventures and unforgettable
                memories. We are passionate about helping people explore the
                world.
              </p>
            </div>
            <div className="footer-social">
              <a
                href="https://www.facebook.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘
              </a>
              <a
                href="https://www.twitter.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐦
              </a>
              <a
                href="https://www.youtube.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶️
              </a>
              <a
                href="https://www.linkedin.com"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#destinations">Destinations</a>
              </li>
              <li>
                <a href="#packages">Packages</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#policies">Policies</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Flight Booking</a>
              </li>
              <li>
                <a href="#">Hotel Reservation</a>
              </li>
              <li>
                <a href="#">Tour Packages</a>
              </li>
              <li>
                <a href="#">Travel Insurance</a>
              </li>
              <li>
                <a href="#">Visa Assistance</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#policies">Cancellation Policy</a>
              </li>
              <li>
                <a href="#">24/7 Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Location</h4>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps?ll=13.081667,80.211196&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=10713701082208344474"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>
              <li>
                <p>
                  Yatrika Tours, Sai Kripa Flats, A67 First Street, AC Block,
                  Anna Nagar, Chennai, Tamil Nadu 600040, India
                </p>
              </li>
              <li>
                <img
                  src={mapUrl}
                  alt="Yatrika Tours Location Map"
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>© 2012-2025 Yatrika Tours PVT LTD. All rights reserved.</p>
            <p>
              ISO Certified Company | Designed with ❤️ for travel enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
