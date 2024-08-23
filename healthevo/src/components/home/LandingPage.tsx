import React from 'react';
import Header from '../common/Header';
import HeroSection from '../common/HeroSection';
import FeaturesOverview from '../features/FeaturesOverview';
import Footer from '../common/Footer';
import KeyFeatures from '../features/KeyFeatures';
import Testimonials from '../features/testimonials';



const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <KeyFeatures/>
      <FeaturesOverview />
      {/* <TestimonialCard name={'Souvik Ghosh'} testimonial={'I love this website!'} imageUrl={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fhealth.html&psig=AOvVaw21hCAWml4o58LP30A3qf1H&ust=1724517095614000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPimy_nEi4gDFQAAAAAdAAAAABAE'}/> */}
      <Testimonials/>
      <Footer />
    </>
  );
};

export default LandingPage;
