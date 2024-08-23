import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CTAButton from '../ui/CTAButton';

const HeroSection: React.FC = () => {
  return (
    <Box
      className="flex items-center justify-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('/assets/images/healthtech.jp')` }}
    >
      <Box className="text-center text-black">
        <Typography variant="h2" gutterBottom>
          Your Personalized Health Companion
        </Typography>
        <Typography variant="h6" gutterBottom>
          Leverage AI for better health outcomes. Get instant advice, predictive analytics, and more.
        </Typography>
        <CTAButton />
      </Box>
    </Box>
  );
};

export default HeroSection;

// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import CTAButton from '../ui/CTAButton';

// const HeroSection: React.FC = () => {
//   return (
//     <Box
//       className="relative flex items-center justify-center bg-gradient-to-r from-teal-900 to-teal-600 h-screen text-white"
//     >
//       <Box className="absolute top-0 left-0 right-0 bottom-0 bg-hero-pattern opacity-60" />
//       <Box className="relative z-10 text-center max-w-xl">
//         <Typography variant="h3" className="font-bold mb-4">
//           Revenue in healthcare is hard.
//           <br />
//           <span className="text-yellow-400">We can help.</span>
//         </Typography>
//         <Typography variant="h6" className="mb-6">
//           Adonis is the first revenue intelligence platform that delivers AI-driven insights to help your medical practice, hospital.
//         </Typography>
//         <CTAButton />
//       </Box>
//       {/* Example Floating Elements */}
//       <Box className="absolute bottom-16 right-16 text-center bg-white p-4 rounded-md shadow-lg">
//         <Typography variant="h6" color="textSecondary">
//           Total Collections
//         </Typography>
//         <Typography variant="h4" color="textPrimary" className="font-bold">
//           $27,923
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;



