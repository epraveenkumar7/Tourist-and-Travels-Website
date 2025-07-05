import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    setShowDropdown(menu);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {/* <img src={logo} alt="PK" style={{width: '50px', height: '20px'}} /> */}
            <h2>PK-Holidays</h2>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="/group-tours" onClick={() => setIsMenuOpen(false)}>
                  Group Tours
                </Link>
              </li>

              <li>
                <Link to="/india-tours" onClick={() => setIsMenuOpen(false)}>
                  India Tours
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("spiritual")}
                onMouseLeave={handleMouseLeave}
                className="dropdown-container"
              >
                <Link
                  to="/spiritual-tours"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Spiritual Tours
                </Link>
                {showDropdown === "spiritual" && (
                  <div className="dropdown-menu">
                    <Link
                      to="/spiritual-tours/shirdi"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Shirdi Tours
                    </Link>
                    <Link
                      to="/spiritual-tours/kasi"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Kasi Tours
                    </Link>
                    <Link
                      to="/spiritual-tours/odisha"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Odisha Tour
                    </Link>
                    <Link
                      to="/spiritual-tours/haridwar"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Haridwar & Rishikesh
                    </Link>
                    <Link
                      to="/spiritual-tours/gujarat"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Gujarat Dwaraka Tour
                    </Link>
                    <Link
                      to="/spiritual-tours/madhya-pradesh"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Madhya Pradesh Tour
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/international-tours"
                  onClick={() => setIsMenuOpen(false)}
                >
                  International Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/honeymoon-tours"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Honeymoon Tours
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
