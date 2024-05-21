import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Grid, Typography, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Transition } from "react-transition-group";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    height: 50,
    marginRight: theme.spacing(2),
  },
  container: {
    zIndex: 1,
    paddingTop: "20vh",
    textAlign: "center",
    color: theme.palette.secondary.main,
    backgroundImage: "url('/images/markab-background.webp')",
    backgroundSize: "cover",
    backgroundPosition: "top",
    paddingBottom: "10vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30vh",
    },
  },
  main: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(4),
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
    color: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.primary.main,
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  footerLogo: {
    height: 30,
    marginBottom: theme.spacing(1),
  }
}));

const DURATION = 80;

const Fade = ({
  in: inProp,
  children,
  transitionStyles,
  defaultStyle,
  duration,
  onState,
}) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => {
      onState(state);
      return (
        <span
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </span>
      );
    }}
  </Transition>
);

const OrbitalHomePage = ({ onContactUs, ...rest }) => {
  const classes = useStyles();
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [inProp, setInProp] = useState(false);
  const words = [
    "Don't spend so much just to get your first prototype out.",
    "Test your idea without writing code.",
    "Test your idea without having to pay tens of thousands of dollars.",
    "Test your idea without having to wait three months.",
  ];
  const transitionStyles = {
    entering: { opacity: 0, display: "none" },
    entered: { opacity: 1, display: "inline" },
    exiting: { opacity: 0, display: "none" },
    exited: { opacity: 0, display: "none" },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    setTimeout(() => setInProp(true), 100);
    const timer = setTimeout(
      () => incrementWord(),
      DURATION * (words[visibleIndex].split("").length - 1) + 1000
    );

    return () => clearTimeout(timer);
  }, [visibleIndex]);

  const incrementWord = () => {
    setInProp(false);
    setTimeout(() => setInProp(true), 100);
    setVisibleIndex(visibleIndex === words.length - 1 ? 0 : visibleIndex + 1);
  };

  const characters = words[visibleIndex].split("");

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src="/images/markab.io.webp" alt="Markab.io logo" className={classes.logo} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Markab
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.container}>
        <Grid container justifyContent="center">
          <Grid item sm={10} md={10}>
            <Typography className={classes.sectionTitle} variant="h2" component="h2" sx={{ fontWeight: "bold" }}>
              Let's build you a full stack app in a few days
            </Typography>
            <Typography className={classes.sectionTitle} variant="h5" component="h3" style={{ minHeight: "50px" }}>
              <span>
                {characters.map((char, index) => {
                  const duration = DURATION * index;
                  const defaultStyle = {
                    transition: `opacity ${duration}ms ease-in-out`,
                    opacity: 0,
                  };
                  return (
                    <Fade
                      key={index}
                      onState={(state) => {
                        index === characters.length - 1 && state === "entered";
                      }}
                      defaultStyle={defaultStyle}
                      duration={duration}
                      transitionStyles={transitionStyles}
                      in={inProp}
                    >
                      {char}
                    </Fade>
                  );
                })}
              </span>
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Box>
      <div className={classes.main}>
        <Container>
          <div id="about-us">
            <Typography variant="h3" component="h3" className={classes.sectionTitle}>
              About Us
            </Typography>
            <Typography variant="body1" className={classes.description}>
              {/* Add your content for the About Us section here */}
            </Typography>
          </div>
          <div id="services">
            <Typography variant="h3" component="h3" className={classes.sectionTitle}>
              Services
            </Typography>
            <Typography variant="body1" className={classes.description}>
              {/* Add your content for the Services section here */}
            </Typography>
          </div>
          <div id="clients">
            <Typography variant="h3" component="h3" className={classes.sectionTitle}>
              Past Clients
            </Typography>
            <Typography variant="body1" className={classes.description}>
              {/* Add your content for the Clients section here */}
            </Typography>
          </div>
          <div id="contact-us">
            <Typography variant="h3" component="h3" className={classes.sectionTitle}>
              Contact Us
            </Typography>
            <Typography variant="body1" className={classes.description}>
              {/* Add your content for the Contact Us section here */}
            </Typography>
          </div>
        </Container>
      </div>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <img src="/images/markab.io.webp" alt="Markab.io logo" className={classes.footerLogo} />
          <Typography variant="body2">
            © {new Date().getFullYear()} Markab.io. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

OrbitalHomePage.propTypes = {
  onContactUs: PropTypes.func,
};

export default OrbitalHomePage;
