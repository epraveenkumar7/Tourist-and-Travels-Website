import React from "react";
import { useParams } from "react-router-dom";
import "./TourDetails.css";
import { Link } from "react-router-dom";
import ban from "../assets/tourdetails.jpg"

const tourDetails = {
  1: {
    title: "Shirdi Tour Package from Chennai 1N/2D",
    description:
      "Chennai - Shirdi - Chennai (Includes Flight Tickets, 5 Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
    price: "₹18,900/Person",
    groupSize: 20,
    languages: "Tamil / English Speaking Guide",
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
      "Room Service, Tips, Phone Calls from rooms, Laundry, Insurance",
      "Personal Expenses not included",
      "Additional expenses on any unforeseen events",
    ],
    itinerary: [
      "Day 1 – Chennai - Shirdi: 14.40 Departure from Chennai to Shirdi, Packed Lunch at airport, 16.35 Arrive Shirdi airport, A/C Car to Hotel, Hotel Check-in, Darshan (Saibaba Samadhi Mandir, Gurusthan, Dixit Wada Museum, Dattatreya Mandir, Nanda Deep, Maruti Mandir, Baba's Chavadi, Dwarakamai Masjid, Abdul Baba cottage, House of Laxmibai Shinde), Return to hotel, Dinner, Night halt at Shirdi.",
      "Day 2 - Shirdi to Chennai: 08.00 Breakfast, Mukh Darshan, Shopping, 12.00 Hotel Check-out & Lunch, Proceed to Shirdi airport, 17.10 Departure from Shirdi to Chennai, 19.00 Arrive Chennai airport.",
    ],
  },
  2: {
    title: "Shirdi & 2 Jyothirlingam Tour Package from Chennai 2N/3D",
    description:
      "Chennai - Pune - Bhimashankar - Shirdi - Trimbakeshwar - Shani Shingnapur - Pune - Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
    price: "₹21,900/Person",
    groupSize: 25,
    languages: "Tamil / English Speaking Guide",
    includes: [
      "Two Way Economy Class Air tickets - Chennai - Pune - Chennai",
      "Transportation in A/C Luxury Bus",
      "Star Hotel Accommodation in Shirdi",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees",
      "Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls from rooms, Laundry, Insurance",
      "Personal Expenses not included",
      "Additional expenses on any unforeseen events",
    ],
    itinerary: [
      "Day 1: 03.05 Departure From Chennai to Pune, 04.45 Arrive Pune, Proceed to Bhimashankar, Breakfast, Visit Bhimashankar Darshan, Lunch, Proceed to Shirdi, Shirdi Hotel Check-In, Dinner, Night Halt at Shirdi.",
      "Day 2: 06.00 Proceed for Darshan (Saibaba Samadhi Mandir, Gurusthan, Dixit Wada Museum, Dattatreya Mandir, Nanda Deep, Maruti Mandir, Baba's Chavadi, Dwarakamai Masjid, Abdul Baba cottage, House of Laxmibai Shinde), 08.30 Breakfast, Proceed to Nashik, Lunch, Visit Panchavati, Visit Trimbakeshwar Jyothirlingam, Return to Shirdi, Dinner, Night halt at Shirdi.",
      "Day 3: 08.00 Breakfast, 11.00 Hotel Check out, Proceed to Shani Shingnapur, Lunch, Visit Shani Shingnapur, Visit Ranjangaon Mahaganpati, Proceed to Pune, Dinner, 10.55 Departure from Pune to Chennai, 00.40 Arrive Chennai.",
    ],
  },
  3: {
    title: "Shirdi & 2 Jyothirlingam Tour Package from Chennai 2N/3D",
    description:
      "Chennai - Mumbai - Mumbai Siddhi Vinayagar & Mahalakshmi - Nashik Triambakeshwar - Shirdi - Grishneshwar - Ellora - Pune – Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
    price: "₹21,900/Person",
    groupSize: 35,
    languages: "Tamil / English Speaking Guide",
    includes: [
      "Two Way Economy Class Air tickets - Chennai - Mumbai / Pune - Chennai",
      "Transportation in A/C Luxury Bus",
      "Star Hotel Accommodation in Shirdi",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees",
      "Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls from rooms, Laundry, Insurance",
      "Personal Expenses not included",
      "Additional expenses on any unforeseen events",
    ],
    itinerary: [
      "Day 1: 05.45 Departure From Chennai to Mumbai, 07.50 Arrive Mumbai, Packed Breakfast at airport, Visit Mumbai Siddhi Vinayagar Temple, Visit Mahalakshmi Temple, Proceed to Nashik, Lunch, Visit Triambakeshwar Jyotirlingam, Proceed to Shirdi, Dinner, Shirdi Hotel Check-In, Night Halt at Shirdi.",
      "Day 2: 08.00 Breakfast, 09.00 Proceed for Darshan (Saibaba Samadhi Mandir, Gurusthan, Dixit Wada Museum, Dattatreya Mandir, Nanda Deep, Maruti Mandir, Baba's Chavadi, Dwarakamai Masjid, Abdul Baba cottage, House of Laxmibai Shinde), Return to Hotel, Lunch, Dinner, Night halt at Shirdi.",
      "Day 3: 05.00 Hotel Check out, Proceed to Ellora, Visit Grishneshwar Jyothirlingam, Breakfast, Visit Ellora caves, Lunch, Proceed to Pune, Dinner, 23.25 Departure from Pune to Chennai, 01.05 Arrive Chennai.",
    ],
  },
  4: {
    title: "Shirdi & Ellora Tour Package from Chennai 1N/2D",
    description:
      "Chennai - Pune - Shani Shingnapur - Shirdi - Grishneshwar - Ellora - Pune – Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
    price: "₹17,900/Person",
    groupSize: 35,
    languages: "Tamil / English Speaking Guide",
    includes: [
      "Two Way Economy Class Air tickets Chennai - Pune - Chennai",
      "Transportation in A/C Luxury Bus",
      "Star Hotel Accommodation in Shirdi",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees",
      "Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls from rooms, Laundry, Insurance",
      "Personal Expenses not included",
      "Additional expenses on any unforeseen events",
    ],
    itinerary: [
      "Day 1: 03.25 Departure From Chennai to Pune, 04.55 Arrive Pune, Proceed to Ranjangaon MahaGanpati, Visit Ranjangaon MahaGanpati Darshan, Breakfast, Proceed to Shani Shingnapur, Visit Shani Shingnapur, Proceed to Shirdi, Lunch, Shirdi Hotel Check-In, 15.30 Proceed for Darshan (Saibaba Samadhi Mandir, Gurusthan, Dixit Wada Museum, Dattatreya Mandir, Nanda Deep, Maruti Mandir, Baba's Chavadi, Dwarakamai Masjid, Abdul Baba cottage, House of Laxmibai Shinde), Return to Shirdi, Dinner, Night Halt at Shirdi.",
      "Day 2: 08.00 Breakfast, 09.00 Hotel Check out, Proceed to Ellora, Visit Grishneshwar Jyothirlingam, Visit Ellora Caves, Lunch, Proceed to Pune, Dinner, 01.05 Departure from Pune to Chennai, 02.50 Arrive Chennai.",
    ],
  },
  5: {
    title: "Shirdi & Pandharpur Tour Package from Chennai 1N/2D",
    description:
      "Chennai - Pune - Pandharpur - Shirdi - Shani Shingnapur - Pune - Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
    price: "₹17,900/Person",
    groupSize: 25,
    languages: "Tamil / English Speaking Guide",
    includes: [
      "Two Way Economy Class Air tickets - Chennai - Pune - Chennai",
      "Transportation in A/C Luxury Bus",
      "Star Hotel Accommodation in Shirdi",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees",
      "Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls from rooms, Laundry, Insurance",
      "Personal Expenses not included",
      "Additional expenses on any unforeseen events",
    ],
    itinerary: [
      "Day 1: 03.25 Departure From Chennai to Pune, 04.55 Arrive Pune, Proceed to Pandharpur, Breakfast, Visit Pandharpur Pandurangan Darshan, Lunch, Proceed to Shirdi, Dinner, Shirdi Hotel Check-In, Night Halt at Shirdi.",
      "Day 2: 07.30 Breakfast, 08.00 Proceed for Darshan (Saibaba Samadhi Mandir, Gurusthan, Dixit Wada Museum, Dattatreya Mandir, Nanda Deep, Maruti Mandir, Baba's Chavadi, Dwarakamai Masjid, Abdul Baba cottage, House of Laxmibai Shinde), Return to Shirdi, Hotel Check out & Lunch, Proceed to Shani Shingnapur, Visit Shani Shingnapur, Proceed to Pune, Dinner, 01.05 Departure from Pune to Chennai, 02.50 Arrive Chennai.",
    ],
  },
  6: {
    title: "Shirdi & Pandharpur Tour Package from Chennai 2N/3D",
    description:
      "Chennai - Pune - Pandharpur - Shirdi - Grishneshwar - Ellora - Shani Shingnapur - Pune – Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
    price: "₹20,900/Person",
    groupSize: 25,
    languages: "Tamil / English Speaking Guide",
    includes: [
      "Two Way Economy Class Air tickets - Chennai - Pune - Chennai",
      "Transportation in A/C Luxury Bus",
      "Star Hotel Accommodation in Shirdi",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees",
      "Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls from rooms, Laundry, Insurance",
      "Personal Expenses not included",
      "Additional expenses on any unforeseen events",
    ],
    itinerary: [
      "Day 1: 03.25 Departure From Chennai to Pune, 04.55 Arrive Pune, Proceed to Pandharpur, Breakfast, Visit Pandharpur Pandurangan Darshan, Lunch, Proceed to Shani Shingnapur, Visit Shani Shingnapur, Proceed to Shirdi, Dinner, Shirdi Hotel Check-In, Night Halt at Shirdi.",
      "Day 2: 08.00 Breakfast, 09.00 Proceed for Darshan (Saibaba Samadhi Mandir, Gurusthan, Dixit Wada Museum, Dattatreya Mandir, Nanda Deep, Maruti Mandir, Baba's Chavadi, Dwarakamai Masjid, Abdul Baba cottage, House of Laxmibai Shinde), Return to Shirdi, Lunch, Dinner, Night halt at Shirdi.",
      "Day 3: 08.00 Breakfast, 09.00 Hotel Check out, Proceed to Ellora, Visit Grishneshwar Jyothirlingam, Visit Ellora Caves, Lunch, Proceed to Pune, Dinner, 01.05 Departure from Pune to Chennai, 02.50 Arrive Chennai.",
    ],
  },
  7: {
    title: "Shirdi, Kolhapur & Pandharpur Tour Package from Chennai 2N/3D",
    description:
      "Chennai - Pune - Kolhapur - Pandharpur - Shirdi - Shani Shingnapur - Pune - Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
    price: "₹21,900/Person",
    groupSize: 25,
    languages: "Tamil / English Speaking Guide",
    includes: [
      "Two Way Economy Class Air tickets - Chennai - Pune - Chennai",
      "Transportation in A/C Luxury Bus",
      "Star Hotel Accommodation in Shirdi",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees",
      "Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls from rooms, Laundry, Insurance",
      "Personal Expenses not included",
      "Additional expenses on any unforeseen events",
    ],
    itinerary: [
      "Day 1: 03.05 Departure From Chennai to Pune, 04.45 Arrive Pune, Proceed to Kolhapur, Breakfast, Kolhapur Hotel Check-In, Lunch, Visit Kolhapur Mahalakshmi Darshan, Dinner, Night Halt at Kolhapur.",
      "Day 2: 04.30 Hotel Check Out, Proceed to Pandharpur, Breakfast, Visit Pandharpur Vitthal Temple, Lunch, Proceed to Shirdi, Visit Shani Shingnapur, Dinner, Shirdi Hotel Check in, Night halt at Shirdi.",
      "Day 3: 06.00 Proceed for Darshan (Saibaba Samadhi Mandir, Gurusthan, Dixit Wada Museum, Dattatreya Mandir, Nanda Deep, Lendi Baug, Maruti Mandir, Baba's Chavadi, Dwarakamai Masjid, Abdul Baba cottage, House of Laxmibai Shinde), After Darshan return to hotel, Breakfast, 12.00 Hotel Check out, Lunch, Proceed to Pune, Dinner, 22.55 Departure from Pune to Chennai, 00.40 Arrive Chennai.",
    ],
  },
  8: {
    title: "Shirdi & 3 Jyothirlingam Tour Package from Chennai 2N/3D",
    description:
      "Chennai - Pune - Bhimashankar - Shirdi - Trimbakeshwar - Grishneshwar - Ellora - Pune - Chennai (Includes Flight Tickets, Star Hotel Stay, Buffet Veg Food, AC Luxury Vehicle).",
    price: "₹21,900/Person",
    groupSize: 25,
    languages: "Tamil / English Speaking Guide",
    includes: [
      "Two Way Economy Class Air tickets - Chennai - Pune - Chennai",
      "Transportation in A/C Luxury Bus",
      "Star Hotel Accommodation in Shirdi",
      "Buffet Veg Food",
      "Guide",
    ],
    excludes: [
      "GST",
      "Entrance fees",
      "Special Darshan Charges",
      "Local Auto Expenses",
      "Room Service, Tips, Phone Calls from rooms, Laundry, Insurance",
      "Personal Expenses not included",
      "Additional expenses on any unforeseen events",
    ],
    itinerary: [
      "Day 1: 03.25 Departure From Chennai to Pune, 04.55 Arrive Pune, Proceed to Bhimashankar, Breakfast, Visit Bhimashankar Darshan, Lunch, Proceed to Shirdi, Shirdi Hotel Check-In, Dinner, Night Halt at Shirdi.",
      "Day 2: 07.30 Breakfast, 08.30 Proceed for Darshan (Saibaba Samadhi Mandir, Gurusthan, Dixit Wada Museum, Dattatreya Mandir, Nanda Deep, Maruti Mandir, Baba's Chavadi, Dwarakamai Masjid, Abdul Baba cottage, House of Laxmibai Shinde), Return to Shirdi, Lunch, Proceed to Nashik, Visit Trimbakeshwar Jyothirlingam, Return to Shirdi, Dinner, Night halt at Shirdi.",
      "Day 3: 08.00 Breakfast, 09.00 Hotel Check out, Proceed to Ellora, Visit Grishneshwar Jyothirlingam, Visit Ellora Caves, Lunch, Proceed to Pune, Dinner, 01.05 Departure from Pune to Chennai, 02.50 Arrive Chennai.",
    ],
  },
};

const TourDetails = () => {
  const { id } = useParams();
  const tour = tourDetails[id];

  if (!tour) return <div>Tour not found</div>;

  return (
    <div className="tour-details-page">
      <h1>{tour.title}</h1>
      <img src={ban} alt={tour.title} />
      <div className="tour-content">
        <p>{tour.description}</p>
        <div className="tour-details">
          <p>
            <strong>Price:</strong> {tour.price}
          </p>
          <p>
            <strong>Group Size:</strong> {tour.groupSize}
          </p>
          <p>
            <strong>Languages:</strong> {tour.languages}
          </p>
          <h3>Includes:</h3>
          <ul>
            {tour.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Excludes:</h3>
          <ul>
            {tour.excludes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Itinerary:</h3>
          <ol>
            {tour.itinerary.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ol>
        </div>
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
  );
};

export default TourDetails;
