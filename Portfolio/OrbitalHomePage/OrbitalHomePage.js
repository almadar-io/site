/*!

=========================================================
* Material Kit PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import Parallax from "Components/Parallax/Parallax.jsx";
import landingPageStyle from "Assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import { Link } from "react-router-dom";
// Sections for this page
import SectionServices from "../OrbitalServicesPage/Sections/SectionServices.jsx";
import SectionWork from "../OrbitalHomePage/Sections/SectionWork";
import SectionTeam from "../OrbitalAboutPage/Sections/SectionTeam.jsx";
import SectionTestimonials from "../OrbitalHomePage/Sections/SectionTestimonials";
import OrbitalProductItems from "../OrbitalProductPage/OrbitalProductItems";
import { Transition } from "react-transition-group";
import { withStyles, Grid, Typography } from "@material-ui/core";
import "./OrbitalHomePage.css";
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

class OrbitalHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleIndex: 0,
      words: [
        "Don't spend so much just to get your first prototype out.",
        "Test your idea without writing code.",
        "Test your idea without having to pay tens of thousands of dollars.",
        "Test your idea without having to wait three months."
      ],
      transitionStyles: {
        entering: { opacity: 0, display: "none" },
        entered: { opacity: 1, display: "inline" },
        exiting: { opacity: 0, display: "none" },
        exited: { opacity: 0, display: "none" }
      },
      in: false
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    setTimeout(() => this.setState({ in: true }), 100);
    setTimeout(
      () => this.incrementWord(),
      DURATION *
        (this.state.words[this.state.visibleIndex].split("").length - 1) +
        1000
    );
  }
  incrementWord() {
    this.setState({ in: false });
    setTimeout(() => this.setState({ in: true }), 100);
    this.setState({
      visibleIndex:
        this.state.visibleIndex === this.state.words.length - 1
          ? 0
          : this.state.visibleIndex + 1
    });
    // if (this.t) {
    //   return;
    // }
    this.t = setTimeout(() => {
      this.incrementWord();
      this.t = null;
    }, DURATION * (this.state.words[this.state.visibleIndex].split("").length - 1) + 1000);
  }
  render() {
    const { classes, onContactUs, ...rest } = this.props;
    const characters = this.state.words[this.state.visibleIndex].split("");
    return (
      <div>
        <Parallax
          image={
            "https://orbital-clients.s3.amazonaws.com/_Main/background.jpg"
          }
          filter="dark"
        >
          <div className={classes.container}>
            <Grid justify="center" container>
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
                          onState={state => {
                            index === characters.length - 1 &&
                              state === "entered";
                          }}
                          defaultStyle={defaultStyle}
                          duration={duration}
                          transitionStyles={this.state.transitionStyles}
                          in={this.state.in}
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
                      href="http://markab-io.s3-website-us-east-1.amazonaws.com/#/"
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
  }
}

OrbitalHomePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(OrbitalHomePage);
