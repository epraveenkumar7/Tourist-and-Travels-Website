import React, { useEffect } from "react";
import "./SpiritualTours.css";

const tourPackages = [
  {
    id: 1,
    title: "Shirdi Tour Package from Chennai (1N/2D)",
    route: "/spiritual-tours/shirdi",
    price: "Rs. 18,900 / Person",
    groupSize: "20",
    languages: "Tamil / English",
    includes: [
      "Flight Tickets",
      "VIP Darshan",
      "A/C Luxury Vehicle",
      "5 Star Hotel Stay",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees & Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls, Laundry",
      "Insurance",
      "Personal Expenses",
      "Additional expenses for unforeseen events",
    ],
    timeline: [
      "Day 1: Chennai → Shirdi: Flight, Hotel Check-in, Sai Baba Darshan, Dinner",
      "Day 2: Breakfast, Mukh Darshan, Shopping, Lunch, Flight Back to Chennai",
    ],
  },
  {
    id: 2,
    title: "Shirdi & 2 Jyothirlingam Tour Package (2N/3D)",
    route: "/spiritual-tours/shirdi-jyothirlingam",
    price: "Rs. 21,900 / Person",
    groupSize: "25",
    languages: "Tamil / English",
    includes: [
      "Two-way Air tickets (Chennai - Pune - Chennai)",
      "A/C Luxury Bus",
      "Star Hotel Stay in Shirdi",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees & Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls, Laundry",
      "Insurance",
      "Personal Expenses",
      "Additional expenses for unforeseen events",
    ],
    timeline: [
      "Day 1: Chennai → Pune → Bhimashankar → Shirdi",
      "Day 2: Shirdi Darshan, Nashik Panchavati, Trimbakeshwar",
      "Day 3: Shani Shingnapur, Ranjangaon Mahaganpati, Pune → Chennai",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Our Kerala tour was absolutely magical! The houseboat stay in Alleppey was the highlight of our trip. The tour was perfectly organized with the right balance of activities and relaxation time.",
    name: "Rahul Mehta",
    detail: "Kerala Tour, March 2023",
  },
  {
    id: 2,
    quote:
      "The Rajasthan tour exceeded all our expectations. The palaces, forts, and desert safari were incredible. Our guide was knowledgeable and made sure we experienced the authentic culture of Rajasthan.",
    name: "Priya Sharma",
    detail: "Rajasthan Tour, November 2022",
  },
  {
    id: 3,
    quote:
      "The Golden Triangle tour was perfect for our first visit to India. Seeing the Taj Mahal at sunrise was a dream come true. The entire trip was well-organized and our accommodations were excellent.",
    name: "Amit Patel",
    detail: "Golden Triangle Tour, February 2023",
  },
];

const SpiritualTours = () => {
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
    <div className="spiritual-tours-page">
      {/* Hero Section */}
      <section className="hero-section-spiritual">
        <div className="hero-content">
          <h1 className="animate-on-scroll fade-up">Spiritual Tours</h1>
          <p className="animate-on-scroll fade-up">
            Explore our curated spiritual tour packages and pilgrimages
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="spiritual-tours-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>Shirdi & Jyotirlinga Packages</h2>
            <p>Compare and choose your ideal spiritual tour</p>
          </div>

          <div className="packages-table-wrapper animate-on-scroll fade-up">
            <table className="packages-table">
              <thead>
                <tr>
                  <th>Features</th>
                  {tourPackages.map((pkg) => (
                    <th key={pkg.id}>{pkg.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price</td>
                  {tourPackages.map((pkg) => (
                    <td key={pkg.id}>{pkg.price}</td>
                  ))}
                </tr>
                <tr>
                  <td>Group Size</td>
                  {tourPackages.map((pkg) => (
                    <td key={pkg.id}>{pkg.groupSize} People</td>
                  ))}
                </tr>
                <tr>
                  <td>Languages</td>
                  {tourPackages.map((pkg) => (
                    <td key={pkg.id}>{pkg.languages}</td>
                  ))}
                </tr>
                <tr>
                  <td>Includes</td>
                  {tourPackages.map((pkg) => (
                    <td key={pkg.id}>
                      <ul>
                        {pkg.includes.slice(0, 3).map((inc, i) => (
                          <li key={i}>{inc}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Itinerary</td>
                  {tourPackages.map((pkg) => (
                    <td key={pkg.id}>
                      <ul>
                        {pkg.timeline.slice(0, 2).map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td></td>
                  {tourPackages.map((pkg) => (
                    <td key={pkg.id}>
                      <a href={pkg.route} className="btn-view-details">
                        View Details
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll fade-up">
            <h2>What Our Travelers Say</h2>
            <p>
              Read about the experiences of travelers who have explored India
              with us
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <div
                className="testimonial-card animate-on-scroll fade-up"
                key={item.id}
              >
                <p className="testimonial-quote">"{item.quote}"</p>
                <hr />
                <h4 className="testimonial-name">{item.name}</h4>
                <p className="testimonial-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll fade-up">
            <h2>Ready to begin your spiritual journey?</h2>
            <p>Connect with us to plan your pilgrimage</p>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpiritualTours;
