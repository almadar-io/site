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
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import Muted from "../../../components/Typography/Muted.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import cardProfile1Square from "../../../assets/img/faces/card-profile1-square.jpg";

import cardProfile2Square from "../../../assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "../../../assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "../../../assets/img/faces/card-profile6-square.jpg";
import teamsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

import teamStyle from "../../../assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";
import { withStyles } from '@material-ui/core';

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class SectionTeam extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Typography variant="h3" component="h3" className={classes.title}>Here is our team</Typography>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile1Square} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile1Square})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Sam Alghanmi</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      </Muted>
                      <p className={classes.description}>
                        10 years of experience
                      </p>
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile6Square} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile6Square})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Zee Drakhshandeh</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          Marketing and Product
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        the mind behind our product
                      </p>
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile4Square} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile4Square})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Rebecca Sable</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>UI/UX DESIGNER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I make you not want to throw your computer across the
                        room
                      </p>
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentCenter}>
                      <Button justIcon simple color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="instagram">
                        <i className="fab fa-instagram" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionTeam.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(SectionTeam);
