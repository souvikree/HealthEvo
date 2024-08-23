import React from 'react';
import { Button } from '@mui/material';

const CTAButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className="mt-4"
    >
      Get Started
    </Button>
  );
};

export default CTAButton;

// import React from 'react';
// import { Button } from '@mui/material';

// const CTAButton: React.FC = () => {
//   return (
//     <Button
//       variant="contained"
//       style={{
//         backgroundColor: '#C2FF00',
//         color: '#004d40',
//         fontWeight: 'bold',
//         padding: '10px 20px',
//         fontSize: '18px',
//       }}
//       size="large"
//     >
//       Get Started
//     </Button>
//   );
// };

// export default CTAButton;
