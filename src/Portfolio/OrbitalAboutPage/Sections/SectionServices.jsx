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
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
import { Link } from "react-router-dom";
// core components
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import InfoArea from "Components/InfoArea/InfoArea.jsx";

import servicesStyle from "Assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionServices(props) {
  const { classes } = props;
  return (
    <div className={classes.services}>
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
          <Typography variant="h3" component="h3" className={classes.title}>We build awesome products</Typography>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. Design"
            description={
              <span>
                <p>
                  The moment you use Material Kit, you know you’ve never felt
                  anything like it. With a single use, this powerfull UI Kit
                  lets you do more than ever before.{" "}
                </p>
                <Link to="#pablo">Find more...</Link>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Develop"
            description={
              <span>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.{" "}
                </p>
                <Link to="#pablo">Find more...</Link>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. Make Edits"
            description={
              <span>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.{" "}
                </p>
                <Link to="#pablo">Find more...</Link>
              </span>
            }
            icon="mode_edit"
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionServices.propTypes = {
  classes: PropTypes.object
};

export default withStyles(servicesStyle)(SectionServices);
