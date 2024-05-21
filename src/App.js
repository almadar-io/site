import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import HeroSection from "Libs/orbital-templates/Markab.io/HeroSection";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#001f3f", // Dark blue color
  },
  logo: {
    height: 50,
    marginRight: theme.spacing(1),
  },
  sideline: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100px', // Adjust width as needed
    height: '100%',
    background: "url('/images/sideline.webp') no-repeat center center",
    backgroundSize: 'cover',
    zIndex: 10,
  },
  container: {
    zIndex: 1,
    paddingTop: "20vh",
    textAlign: "center",
    color: "#ffffff", // White text color
    backgroundImage: "url('/images/markab-background.webp')", // Update with the new hero image
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: "10vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30vh",
    },
  },
  main: {
    backgroundColor: "#ffffff", // White background for content
    padding: theme.spacing(4),
    marginLeft: '100px', // Adjust for the width of the sideline
  },
  section: {
    padding: theme.spacing(6, 0),
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
    color: "#07182D", // Dark blue color for titles
    textAlign: "center",
  },
  description: {
    color: "#07182D", // Dark blue color for text
    marginBottom: theme.spacing(2),
  },
  contentBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: theme.spacing(6),
    textAlign: "left",
  },
  imageBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  footer: {
    backgroundColor: "#07182D", // Dark blue footer
    color: "#ffffff", // White text color for footer
    padding: theme.spacing(3),
    textAlign: "center",
  },
  footerLogo: {
    height: 30,
    marginBottom: theme.spacing(1),
  },
  callToAction: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
}));

const OrbitalHomePage = ({ onContactUs, ...rest }) => {
  const classes = useStyles();
  const handleContactUs = () => {
    window.location.href = "mailto:oalghanmi@markab.io";
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img
            src="/images/markab-logo.png"
            alt="Markab.io logo"
            className={classes.logo}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Markab
          </Typography>
          <div className={classes.mobileMenuIcon}>
            {/* You can add a menu icon here for mobile navigation */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.sideline}></div>
      <HeroSection></HeroSection>
      <Container className={classes.main}>
        <div className={classes.section}>
          <Typography
            variant="h3"
            component="h3"
            className={classes.sectionTitle}
          >
            About Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box className={classes.imageBox}>
                <img
                  src="/images/about-section.webp" // Replace with actual image
                  alt="About Us"
                  className={classes.image}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.contentBox}>
                <Typography variant="body1" className={classes.description}>
                  Markab.io is a software company built on the idea of the
                  scientific method. We are a developer-first company. Our main
                  focus is the developer, which in turn can have a positive
                  impact on the customer. We have over 15 years of experience in
                  the Software Development industry, working with a range of
                  clients from small businesses to large enterprises. We
                  specialize in using Node.js, React, and Python to build
                  efficient and scalable applications.
                </Typography>
                <Box className={classes.callToAction}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleContactUs}
                  >
                    Learn More About Us
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.section}>
          <Typography
            variant="h3"
            component="h3"
            className={classes.sectionTitle}
          >
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box className={classes.imageBox}>
                <img
                  src="/images/contact-section.webp" // Replace with actual image
                  alt="Contact Us"
                  className={classes.image}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={classes.contentBox}>
                <Typography variant="body1" className={classes.description}>
                  Interested in working with us? We’d love to hear from you!
                  Reach out to us via the button below:
                </Typography>
                <Box className={classes.callToAction}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleContactUs}
                  >
                    Get in Touch
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
      <footer className={classes.footer}>
        <img
          src="/images/markab.io.webp"
          alt="Markab.io logo"
          className={classes.footerLogo}
        />
        <Typography variant="body2">
          © {new Date().getFullYear()} Markab.io. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

OrbitalHomePage.propTypes = {
  onContactUs: PropTypes.func,
};

export default OrbitalHomePage;
