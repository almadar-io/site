import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Parallax from "Components/Parallax/Parallax";
import SectionServices from "../OrbitalServicesPage/Sections/SectionServices";
import SectionWork from "./Sections/SectionWork";
import SectionTeam from "../OrbitalAboutPage/Sections/SectionTeam";
import SectionTestimonials from "./Sections/SectionTestimonials";
import OrbitalProductItems from "../OrbitalProductPage/OrbitalProductItems";
import { Transition } from "react-transition-group";
import "./OrbitalHomePage.css";

const useStyles = makeStyles((theme) => ({
  ...landingPageStyle(theme),
  container: {
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      paddingTop: "20vh",
    },
    ...theme.container,
  },
}));

const DURATION = 80;

const Fade = ({
  in: inProp,
  children,
  transitionStyles,
  defaultStyle,
  duration,
  onState
}) => (
  <Transition in={inProp} timeout={duration}>
    {state => {
      onState(state);
      return (
        <span
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
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
    "Test your idea without having to wait three months."
  ];
  const transitionStyles = {
    entering: { opacity: 0, display: "none" },
    entered: { opacity: 1, display: "inline" },
    exiting: { opacity: 0, display: "none" },
    exited: { opacity: 0, display: "none" }
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
      <Parallax
        image={"https://orbital-clients.s3.amazonaws.com/_Main/background.jpg"}
        filter="dark"
      >
        <div className={classes.container}>
          <Grid justifyContent="center" container>
            <Grid item sm={10} md={10}>
              <Typography
                style={{ fontWeight: "bold" }}
                variant="h2"
                component="h2"
              >
                Let's build you a full stack app in a few days
              </Typography>
              <h3 style={{ minHeight: "50px" }}>
                <span>
                  {characters.map((char, index) => {
                    const duration = DURATION * index;
                    const defaultStyle = {
                      transition: `opacity ${duration}ms ease-in-out`,
                      opacity: 0
                    };
                    return (
                      <Fade
                        key={index}
                        onState={state => {
                          index === characters.length - 1 &&
                            state === "entered";
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
              </h3>
              {/* <Grid style={{ marginTop: "1em" }} container justify="center">
                <p className={"neon-text"}>
                  <a
                    href="http://almadar-io.s3-website-us-east-1.amazonaws.com/#/"
                    target="_blank"
                    className={"neon-link"}
                  >
                    See our demos!
                  </a>
                </p>
              </Grid> */}
              <br />
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div id="about-us">
            <SectionTeam />
          </div>
          <div id="services">
            <SectionServices />
          </div>
          {/* <div id="demos">
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  className={classes.sectionTitle}
                >
                  Demos
                </Typography>
                <h5 className={classes.description}>
                  Check out some of the demos we have put together.
                </h5>
              </GridItem>
            </GridContainer>
            <OrbitalProductItems {...rest} />
          </div> */}
          {/* <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <Typography variant="h3" component="h3" className={classes.sectionTitle}>Our Clients</Typography>
            </GridItem>
          </GridContainer> */}
          <div id="clients">
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  className={classes.sectionTitle}
                >
                  Past Clients
                </Typography>
              </GridItem>
            </GridContainer>
            <SectionTestimonials />
          </div>
          <div id="contact-us">
            <SectionWork onContactUs={onContactUs} />
          </div>
        </div>
      </div>
    </div>
  );
};

OrbitalHomePage.propTypes = {
  onContactUs: PropTypes.func
};

export default OrbitalHomePage;
