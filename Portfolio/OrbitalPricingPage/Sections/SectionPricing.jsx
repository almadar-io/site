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
// core components
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import NavPills from "Components/NavPills/NavPills.jsx";
import Card from "Components/Card/Card.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import Button from "Components/CustomButtons/Button.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import pricingStyle from "Assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.jsx";

function SectionPricing(props) {
  const { classes } = props;

  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem
          md={6}
          sm={6}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <NavPills
            alignCenter
            color="rose"
            tabs={[
              {
                tabButton: "monthly"
              },
              {
                tabButton: "yearly"
              }
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h6
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                Free
              </h6>
              <Typography variant="h1" component="h1" className={classes.cardTitle}>
                <small>$</small>0 <small>/mo</small>
              </Typography>
              <ul>
                <li>
                  <b>1</b> Project
                </li>
                <li>
                  <b>5</b> Team Members
                </li>
                <li>
                  <b>55</b> Personal Contacts
                </li>
                <li>
                  <b>5.000</b> Messages
                </li>
              </ul>
              <Button to="#pablo" color="rose" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color="rose">
            <CardBody pricing>
              <h6 className={classes.cardCategory}>Premium</h6>
              <Typography variant="h1" component="h1" className={classes.cardTitleWhite}>
                <small>$</small>89 <small>/mo</small>
              </Typography>
              <ul>
                <li>
                  <b>500</b> Project
                </li>
                <li>
                  <b>50</b> Team Members
                </li>
                <li>
                  <b>125</b> Personal Contacts
                </li>
                <li>
                  <b>15.000</b> Messages
                </li>
              </ul>
              <Button to="#pablo" color="white" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h6
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                Platinum
              </h6>
              <Typography variant="h1" component="h1" className={classes.cardTitle}>
                <small>$</small>199 <small>/mo</small>
              </Typography>
              <ul>
                <li>
                  <b>1000</b> Project
                </li>
                <li>
                  <b>100</b> Team Members
                </li>
                <li>
                  <b>550</b> Personal Contacts
                </li>
                <li>
                  <b>50.000</b> Messages
                </li>
              </ul>
              <Button to="#pablo" color="rose" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionPricing.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pricingStyle)(SectionPricing);
