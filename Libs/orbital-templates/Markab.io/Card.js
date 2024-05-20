import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
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

const CardExample = () => (
  <ThemeProvider theme={theme}>
    <Box sx={{ padding: 2 }}>
      <Card sx={{ backgroundColor: theme.palette.secondary.main, border: '1px solid #c0c0c0', borderRadius: '10px', width: '300px' }}>
        <CardContent>
          <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
            Card Title
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
            This is an example of a card component.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </ThemeProvider>
);

export default CardExample;
