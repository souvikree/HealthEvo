import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF',
    },
    secondary: {
      main: '#28A745',
    },
    background: {
      default: '#F8F9FA',
    },
    text: {
      primary: '#343A40',
      secondary: '#E9ECEF',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

export default theme;
