import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

const HeroSection: React.FC = () => {
  const router = useRouter(); 

  // Function to handle navigation
  const handleGetStartedClick = () => {
    router.push('/register'); // Navigate to the /register page
  };
  return (
    <Box
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/images/healthtech.jpg')` }}
    >
      {/* Backdrop Layer */}
      <Box className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <Box className="relative z-10 text-center text-white p-6">
        <Typography variant="h2" gutterBottom className="font-bold">
          Your Personalized Health Companion
        </Typography>
        <Typography variant="h6" gutterBottom>
          Leverage AI for better health outcomes. Get instant advice, predictive analytics, and more.
        </Typography>
        <Box className="flex justify-center mt-4 space-x-4">
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleGetStartedClick}
            
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            className="border-white text-white hover:bg-white hover:text-black"
           
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
