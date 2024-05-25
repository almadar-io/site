import React from 'react';
import { Box, Typography } from '@mui/material';
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

const LogoPrimary = () => (
  <ThemeProvider theme={theme}>
    <Box sx={{ backgroundColor: theme.palette.primary.main, padding: 2, display: 'flex', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ color: theme.palette.secondary.main, flexGrow: 1 }}>
        almadar
      </Typography>
      <svg width="40" height="40" viewBox="0 0 20 20">
        <polygon points="10,0 12,6 18,6 13,9 15,15 10,12 5,15 7,9 2,6 8,6" fill={theme.palette.secondary.main} />
      </svg>
    </Box>
  </ThemeProvider>
);

export default LogoPrimary;
