import React from 'react';
import { Box } from '@mui/material';

const ColorPalette = () => (
  <Box display="flex" justifyContent="space-around" p={2}>
    <Box width={50} height={50} bgcolor="#0b1e43"></Box>
    <Box width={50} height={50} bgcolor="#ffffff"></Box>
    <Box width={50} height={50} bgcolor="#c0c0c0"></Box>
    <Box width={50} height={50} bgcolor="#f0f0f0"></Box>
  </Box>
);

export default ColorPalette;
