import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#07182D", // Navy blue
    },
    secondary: {
      main: "#FFFFFF", // White
    },
  },
});

const MyApp = (props) => (
  <Router>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/*" element={<App {...props} />} />
      </Routes>
    </ThemeProvider>
  </Router>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MyApp />);
