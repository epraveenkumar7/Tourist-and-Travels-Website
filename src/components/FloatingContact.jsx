import React from "react";
import "./FloatingContact.css";

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      <a href="tel:+918807249960" className="contact-icon call">
        <i className="fas fa-phone"></i>
      </a>
      <a
        href="https://wa.me/8807249960"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="goseeholidays@gmail.com" className="contact-icon email">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

export default FloatingContact;
