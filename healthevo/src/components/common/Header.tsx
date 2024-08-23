import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link'; // Ensure this import is correct

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} className="shadow-none">
      <Toolbar>
        <Container maxWidth="lg" className="flex justify-between items-center">
          <Typography variant="h6" component="div" className="font-bold text-primary">
            <Link href="/" passHref>
              <span className="text-decoration-none">HealthEvo</span>
            </Link>
          </Typography>
          <div className="flex flex-grow justify-center space-x-8">
            <Link href="#how-it-works" passHref>
              <span className="text-lg text-gray-700 hover:text-primary cursor-pointer">How it works</span>
            </Link>
            <Link href="#why-health-evo" passHref>
              <span className="text-lg text-gray-700 hover:text-primary cursor-pointer">Why HealthEvo?</span>
            </Link>
            <Link href="#about" passHref>
              <span className="text-lg text-gray-700 hover:text-primary cursor-pointer">About</span>
            </Link>
            <Link href="#blog" passHref>
              <span className="text-lg text-gray-700 hover:text-primary cursor-pointer">Blog</span>
            </Link>
            <Link href="#careers" passHref>
              <span className="text-lg text-gray-700 hover:text-primary cursor-pointer">Careers</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/login" passHref>
              <Button variant="text" color="primary" className="text-gray-700 hover:bg-gray-100">
                Login
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="contained" color="primary" className='rounded-full'>
                Signup for Free
              </Button>
            </Link>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// const Header: React.FC = () => {
//   return (
//     <AppBar position="static" style={{ background: 'rgba(0, 0, 0, 0.2)', boxShadow: 'none' }}>
//       <Toolbar className="flex justify-between">
//         <Typography variant="h6" component="div" className="text-bold">
//           Adonis
//         </Typography>
//         <div>
//           <Button color="inherit" className="mx-2">Log in</Button>
//           <Button variant="outlined" color="inherit" className="mx-2">Sign up for free</Button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
