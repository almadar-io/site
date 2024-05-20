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

const PrimaryButton = () => (
  <ThemeProvider theme={theme}>
    <Button variant="contained" color="primary" sx={{ fontWeight: '700' }}>
      Primary Button
    </Button>
  </ThemeProvider>
);

export default PrimaryButton;
