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
/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// core components
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import Parallax from "Components/Parallax/Parallax.jsx";
import classNames from "classnames";
import projectsStyle from "Assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
import OrbitalProductItems from "./OrbitalProductItems";
import { withStyles } from '@material-ui/core';

function SectionProjects(props) {
  const { classes, match, ...rest } = props;
  return (
    <React.Fragment>
      <Parallax
        image={"https://orbital-clients.s3.amazonaws.com/_Main/background.jpg"}
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
              <Typography variant="h1" component="h1" className={classes.title}>Prototypes</Typography>
              <h4>
                Built using our open source framework,{" "}
                <Link to="/products/orbital">Orbital</Link>
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <OrbitalProductItems match={match} />
        </div>
      </div>
    </React.Fragment>
  );
}

SectionProjects.propTypes = {
  classes: PropTypes.object
};

export default withStyles(projectsStyle)(SectionProjects);
