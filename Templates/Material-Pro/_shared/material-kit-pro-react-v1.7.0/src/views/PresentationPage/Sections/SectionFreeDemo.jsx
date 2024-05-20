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
// @material-ui icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";

import freeDemoStyle from "../../../assets/jss/material-kit-pro-react/views/presentationSections/freeDemoStyle.jsx";

class SectionFreeDemo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={5}
              sm={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <div className={classes.iconGithub}>
                <div className="fab fa-github" />
              </div>
              <div>
                <Typography variant="h3" component="h3" className={classes.title}>Free Demo</Typography>
                <h5 className={classes.description}>
                  Do you want to test and see the benefits of this kit before
                  purchasing it? You can give the demo version a try. It
                  features enough basic components for you to get a feel of the
                  design and also test the quality of the code. Get it free on
                  GitHub!
                </h5>
              </div>
              <Button
                to="https://demos.creative-tim.com/material-kit-react/?ref=mkpr-free-demo-section-presentation"
                color="rose"
                target="_blank"
                round
              >
                View demo on github
              </Button>
            </GridItem>
            <GridItem md={6} sm={12} className={classes.mlAuto}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <Card
                    className={classNames(classes.card, classes.cardPricing)}
                  >
                    <CardBody>
                      <h3 className={classes.cardTitle}>Free Demo</h3>
                      <ul>
                        <li>
                          <b>60</b> Components
                        </li>
                        <li>
                          <b>3</b> Example Pages
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Unconventional Cards
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Sections
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Photoshop for Prototype
                        </li>
                        <li>
                          <Close
                            className={classNames(
                              classes.cardIcons,
                              classes.dangerColor
                            )}
                          />{" "}
                          Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem md={6} sm={6}>
                  <Card
                    className={classNames(classes.card, classes.cardPricing)}
                  >
                    <CardBody>
                      <h3 className={classes.cardTitle}>PRO Version</h3>
                      <ul>
                        <li>
                          <b>1000+</b> Components
                        </li>
                        <li>
                          <b>12</b> Example Pages
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Unconventional Cards
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Sections
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Photoshop for Prototype
                        </li>
                        <li>
                          <Check
                            className={classNames(
                              classes.cardIcons,
                              classes.successColor
                            )}
                          />{" "}
                          Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionFreeDemo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(freeDemoStyle)(SectionFreeDemo);