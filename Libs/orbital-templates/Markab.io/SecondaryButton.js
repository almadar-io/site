import React from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#0b1e43',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const SecondaryButton = () => (
  <ThemeProvider theme={theme}>
    <Button variant="outlined" color="primary" sx={{ fontWeight: '700' }}>
      Secondary Button
    </Button>
  </ThemeProvider>
);

export default SecondaryButton;
