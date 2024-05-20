import React from 'react';
import { Typography, Box } from '@mui/material';
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

const TypographyExample = () => (
  <ThemeProvider theme={theme}>
    <Box sx={{ backgroundColor: theme.palette.primary.main, padding: 2 }}>
      <Typography variant="h1" sx={{ color: theme.palette.secondary.main }}>
        Markab
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    </Box>
  </ThemeProvider>
);

export default TypographyExample;
