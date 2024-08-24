// src/components/common/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="/about" className="text-white hover:underline">About Us</a> | 
          <a href="/contact" className="text-white hover:underline"> Contact Us</a> | 
          <a href="/privacy" className="text-white hover:underline"> Privacy Policy</a> | 
          <a href="/terms" className="text-white hover:underline"> Terms of Service</a>
        </div>
        <div>
          <h2>&copy; {new Date().getFullYear()} HealthEvo</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
