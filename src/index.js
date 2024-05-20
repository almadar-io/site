import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./Store/index";
import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#0b1e43",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const MyApp = (props) => (
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<App {...props} />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  </Router>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<MyApp />);
