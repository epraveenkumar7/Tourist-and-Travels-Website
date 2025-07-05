import React from 'react';
import Hero from './Hero';
import Destinations from './Destinations';
import Packages from './Packages';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Destinations />
      <Packages />
    </div>
  );
};

export default Home;