import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import About from './components/About';
import SpiritualTours from './components/SpiritualTours';
import Policies from './components/Policies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import IndiaTours from './components/IndiaTours';
import InternationalTours from './components/InternationalTours';
import HoneymoonTours from './components/HoneymoonTours';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Destinations />
                <About />
                <Packages />
                <Policies />

                {/* <SpiritualTours /> */}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/spiritual-tours" element={<SpiritualTours />} />
          <Route path="/india-tours" element={<IndiaTours />} />
          <Route path="/international-tours" element={<InternationalTours />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/group-tours" element={<Destinations />} />
          <Route path="/honeymoon-tours" element={<HoneymoonTours />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
