import React, { useEffect, useState, useRef } from 'react';
import './Destinations.css';

const Destinations = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

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

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience the perfect blend of culture, nature, and relaxation in this tropical paradise.',
      price: 'From $899',
      duration: '7 Days',
      rating: 4.8,
      highlights: ['Rice Terraces', 'Ancient Temples', 'Beach Resorts']
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Discover stunning sunsets and iconic white-washed buildings overlooking the Aegean Sea.',
      price: 'From $1,299',
      duration: '5 Days',
      rating: 4.9,
      highlights: ['Sunset Views', 'Wine Tasting', 'Volcanic Beaches']
    },
    {
      id: 3,
      name: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Explore the ancient Inca citadel high in the Andes mountains.',
      price: 'From $1,099',
      duration: '6 Days',
      rating: 4.7,
      highlights: ['Inca Trail', 'Sacred Valley', 'Llama Encounters']
    },
    {
      id: 4,
      name: 'Tokyo, Japan',
      image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Immerse yourself in the vibrant culture and modern cityscape of Japan\'s capital.',
      price: 'From $1,499',
      duration: '8 Days',
      rating: 4.8,
      highlights: ['Cherry Blossoms', 'Sushi Experience', 'Tech Districts']
    },
    {
      id: 5,
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Relax in overwater bungalows surrounded by crystal-clear waters.',
      price: 'From $2,199',
      duration: '5 Days',
      rating: 4.9,
      highlights: ['Overwater Villas', 'Coral Reefs', 'Spa Treatments']
    },
    {
      id: 6,
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience the romance and elegance of the City of Light.',
      price: 'From $1,199',
      duration: '6 Days',
      rating: 4.6,
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruise']
    },
    {
      id: 7,
      name: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience luxury and modern architecture in the desert metropolis.',
      price: 'From $1,599',
      duration: '6 Days',
      rating: 4.7,
      highlights: ['Burj Khalifa', 'Desert Safari', 'Gold Souks']
    },
    {
      id: 8,
      name: 'Iceland',
      image: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Witness the Northern Lights and stunning natural landscapes.',
      price: 'From $1,799',
      duration: '8 Days',
      rating: 4.8,
      highlights: ['Northern Lights', 'Blue Lagoon', 'Glaciers']
    },
    {
      id: 9,
      name: 'New Zealand',
      image: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Adventure through Middle-earth with breathtaking landscapes.',
      price: 'From $1,899',
      duration: '10 Days',
      rating: 4.8,
      highlights: ['Fjords', 'Adventure Sports', 'Hobbiton']
    },
    {
      id: 10,
      name: 'Morocco',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Discover the magic of North Africa with vibrant markets and desert adventures.',
      price: 'From $1,299',
      duration: '7 Days',
      rating: 4.6,
      highlights: ['Sahara Desert', 'Marrakech', 'Atlas Mountains']
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollToLeft = () => {
    carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollToRight = () => {
    carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section id="destinations" className="destinations section">
      <div className="container">
        <div className="section-header text-center animate-on-scroll fade-up">
          <h2>Popular Destinations</h2>
          <p>Discover the world's most beautiful and captivating destinations</p>
        </div>
        
        <div className="carousel-container animate-on-scroll fade-up">
          <button className="scroll-btn scroll-btn-left" onClick={scrollToLeft}>
            <span>‹</span>
          </button>
          
          <div 
            className="horizontal-scroll-carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {destinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className={`destination-card animate-on-scroll scale-in`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="card-image">
                  <img src={destination.image} alt={destination.name} />
                  <div className="card-overlay">
                    <div className="card-rating">
                      <span className="star">★</span>
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="card-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  
                  <div className="card-highlights">
                    {destination.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                  
                  <div className="card-info">
                    <div className="info-item">
                      <span className="label">Duration:</span>
                      <span className="value">{destination.duration}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Price:</span>
                      <span className="value price">{destination.price}</span>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary">
                    Explore Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="scroll-btn scroll-btn-right" onClick={scrollToRight}>
            <span>›</span>
          </button>
        </div>
        
        <div className="scroll-hint animate-on-scroll fade-up">
          <p>← Scroll horizontally to explore more destinations →</p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;