import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="bg-gray-800 text-white p-4">
      <Typography variant="body2" color="inherit" align="center">
        © 2024 Intelligent Healthcare Platform. All rights reserved.
      </Typography>
      <Box className="flex justify-center mt-2">
        <Link href="#" color="inherit" className="mx-2">Privacy Policy</Link>
        <Link href="#" color="inherit" className="mx-2">Terms of Service</Link>
        <Link href="#" color="inherit" className="mx-2">Contact</Link>
      </Box>
    </Box>
  );
};

export default Footer;
