import React, { useEffect } from 'react';
import './Packages.css';

const Packages = () => {
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

  const packages = [
    {
      id: 1,
      name: 'Adventure Explorer',
      price: 899,
      duration: '7 Days',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Mountain Trekking',
        'Wildlife Safari',
        'Cultural Experiences',
        'Professional Guide',
        'All Meals Included'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Luxury Escape',
      price: 1899,
      duration: '10 Days',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        '5-Star Accommodations',
        'Private Transfers',
        'Spa & Wellness',
        'Fine Dining',
        'Personal Concierge'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Cultural Journey',
      price: 1299,
      duration: '8 Days',
      image: 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Historical Sites',
        'Local Workshops',
        'Traditional Cuisine',
        'Art & Museums',
        'Language Classes'
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="packages section">
      <div className="container">
        <div className="section-header text-center animate-on-scroll fade-up">
          <h2>Travel Packages</h2>
          <p>Choose from our carefully curated travel experiences</p>
        </div>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''} animate-on-scroll scale-in`} style={{animationDelay: `${index * 0.2}s`}}>
              {pkg.popular && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}
              
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} />
              </div>
              
              <div className="package-content">
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  <span className="currency">$</span>
                  <span className="amount">{pkg.price}</span>
                  <span className="period">per person</span>
                </div>
                
                <div className="package-duration">
                  <span className="duration-icon">🕒</span>
                  <span>{pkg.duration}</span>
                </div>
                
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="btn btn-primary package-btn">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;