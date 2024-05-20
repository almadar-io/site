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
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import landingPageStyle from "../../assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionWork from "./Sections/SectionWork.js";

import { withStyles, List, ListItem } from '@material-ui/core';

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="info"
          brand="Orbital"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "info"
          }}
          {...rest}
        />
        <Parallax
          image={"https://orbital-clients.s3.amazonaws.com/bg8.jpg"}
          filter="dark"
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <Typography variant="h1" component="h1" className={classes.title}>Your Story Starts With Us.</Typography>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that{"'"}s why we added this text here. Add here
                  all the information that can make you or your product create
                  the first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                >
                  <i className="fas fa-play" />
                  Check out our past work
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionProduct />
            <SectionTeam />
            <SectionWork />
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/?ref=mkpr-landing"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/presentation?ref=mkpr-landing"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </Link>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <Link
                  to="https://www.creative-tim.com/?ref=mkpr-landing"
                  target="_blank"
                >
                  Creative Tim
                </Link>{" "}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
