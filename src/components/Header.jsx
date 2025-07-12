import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    setShowDropdown(menu);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Go See Holidays" />
            <h2>Go See Holidays</h2>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/group-tours" onClick={handleLinkClick}>
                  Group Tours
                </Link>
              </li>
              <li>
                <Link to="/india-tours" onClick={handleLinkClick}>
                  India Tours
                </Link>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("spiritual")}
                onMouseLeave={handleMouseLeave}
                className="dropdown-container"
              >
                <Link to="/spiritual-tours" onClick={handleLinkClick}>
                  Spiritual Tours
                </Link>
                {showDropdown === "spiritual" && (
                  <div className="dropdown-menu">
                    <Link
                      to="/spiritual-tours/shirdi"
                      onClick={handleLinkClick}
                    >
                      Shirdi Tours
                    </Link>
                    <Link to="/spiritual-tours/kasi" onClick={handleLinkClick}>
                      Kasi Tours
                    </Link>
                    <Link
                      to="/spiritual-tours/odisha"
                      onClick={handleLinkClick}
                    >
                      Odisha Tour
                    </Link>
                    <Link
                      to="/spiritual-tours/haridwar"
                      onClick={handleLinkClick}
                    >
                      Haridwar & Rishikesh
                    </Link>
                    <Link
                      to="/spiritual-tours/gujarat"
                      onClick={handleLinkClick}
                    >
                      Gujarat Dwaraka Tour
                    </Link>
                    <Link
                      to="/spiritual-tours/madhya-pradesh"
                      onClick={handleLinkClick}
                    >
                      Madhya Pradesh Tour
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link to="/international-tours" onClick={handleLinkClick}>
                  International Tours
                </Link>
              </li>
              <li>
                <Link to="/honeymoon-tours" onClick={handleLinkClick}>
                  Honeymoon Tours
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleLinkClick}>
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
