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

// Sections for this page
import SectionWork from "../OrbitalHomePage/Sections/SectionWork";

import { withStyles } from '@material-ui/core';

class OrbitalContactPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Parallax
          image={
            "https://orbital-clients.s3.amazonaws.com/_Main/background.jpg"
          }
          filter="dark"
          small
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <Typography variant="h1" component="h1" className={classes.title}>Contact Us</Typography>
                <h4>
                  Meet the amazing team behind this project and find out more
                  about how we work.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionWork />
          </div>
        </div>
      </div>
    );
  }
}

OrbitalContactPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(OrbitalContactPage);
