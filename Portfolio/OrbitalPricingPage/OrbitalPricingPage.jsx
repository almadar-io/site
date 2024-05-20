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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "Components/Parallax/Parallax.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import { Link } from "react-router-dom";
// sections for this page
import SectionPricing from "Views/PricingPage/Sections/SectionPricing.jsx";
import SectionFeatures from "Views/PricingPage/Sections/SectionFeatures.jsx";

import pricingStyle from "Assets/jss/material-kit-pro-react/views/pricingStyle.jsx";

class PricingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
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
                <Typography variant="h1" component="h1" className={classes.title}>
                  Our packages
                  <h5>
                    Select from our packages or{" "}
                    <Link to="/contact">contact</Link> us if you need custom
                    development.
                  </h5>
                </Typography>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionPricing />
            <hr />
            <SectionFeatures />
          </div>
        </div>
      </div>
    );
  }
}

PricingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pricingStyle)(PricingPage);
