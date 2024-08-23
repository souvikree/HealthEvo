import React from 'react';
import Header from '../common/Header';
import HeroSection from '../common/HeroSection';
import FeaturesOverview from '../features/FeaturesOverview';
import Footer from '../common/Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesOverview />
      <Footer />
    </>
  );
};

export default LandingPage;
