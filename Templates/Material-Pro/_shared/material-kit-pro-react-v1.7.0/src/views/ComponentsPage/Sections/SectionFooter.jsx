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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
import Footer from "../../../components/Footer/Footer.jsx";

import face1 from "../../../assets/img/faces/card-profile6-square.jpg";
import face2 from "../../../assets/img/faces/christian.jpg";
import face3 from "../../../assets/img/faces/card-profile4-square.jpg";
import face4 from "../../../assets/img/faces/card-profile1-square.jpg";
import face5 from "../../../assets/img/faces/marc.jpg";
import face6 from "../../../assets/img/faces/kendall.jpg";
import face7 from "../../../assets/img/faces/card-profile5-square.jpg";
import face8 from "../../../assets/img/faces/card-profile2-square.jpg";

import styles from "../../../assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.jsx";

const SectionFooter = props => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Footer Areas</h3>
        </div>
      </div>
      <div>
        <Footer
          theme="white"
          content={
            <div>
              <div className={classes.left}>
                <Link
                  to="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-footer-components"
                  target="_blank"
                  className={classes.footerBrand}
                >
                  Material Kit PRO React
                </Link>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/presentation?ref=mkpr-footer-components"
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
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/license?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </Link>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      to="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      color="twitter"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      to="https://dribbble.com/creativetim?ref=creativetim"
                      target="_blank"
                      color="dribbble"
                      justIcon
                      simple
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      to="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      color="google"
                      justIcon
                      simple
                    >
                      <i className="fab fa-google-plus-g" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <br />
        <br />
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/presentation?ref=mkpr-footer-components"
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
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/license?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </Link>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <Link
                  to="https://www.creative-tim.com?ref=mkpr-footer-components"
                  target="_blank"
                  className={classes.aClasses}
                >
                  Creative Tim
                </Link>{" "}
                for a better web.
              </div>
            </div>
          }
        />
        <br />
        <br />
        <Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <Link
                  to="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-footer-components"
                  target="_blank"
                  className={classes.footerBrand}
                >
                  Material Kit PRO React
                </Link>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="http://blog.creative-tim.com/?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Blog
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/presentation?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Presentation
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="#pablito"
                      onClick={e => e.preventDefault()}
                      className={classes.block}
                    >
                      Discover
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="#pablito"
                      onClick={e => e.preventDefault()}
                      className={classes.block}
                    >
                      Payment
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/contact-us?ref=mkpr-footer-components"
                      target="_blank"
                      className={classes.block}
                    >
                      Contact us
                    </Link>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      to="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      to="https://dribbble.com/creativetim?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      to="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
        <br />
        <br />
        <Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="#pablo"
                      className={classes.block}
                      onClick={e => e.preventDefault()}
                    >
                      Blog
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="#pablo"
                      className={classes.block}
                      onClick={e => e.preventDefault()}
                    >
                      Presentation
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="#pablo"
                      className={classes.block}
                      onClick={e => e.preventDefault()}
                    >
                      Discover
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="#pablo"
                      className={classes.block}
                      onClick={e => e.preventDefault()}
                    >
                      Payment
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="#pablo"
                      className={classes.block}
                      onClick={e => e.preventDefault()}
                    >
                      Contact Us
                    </Link>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <Link
                  to="https://www.creative-tim.com?ref=mkpr-footer-components"
                  target="_blank"
                  className={classes.aClasses}
                >
                  Creative Tim
                </Link>{" "}
                All Rights Reserved.
              </div>
            </div>
          }
        >
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <h5>About Us</h5>
              <p>
                Creative Tim is a startup that creates design tools that make
                the web development process faster and easier.{" "}
              </p>
              <p>
                We love the web and care deeply for how users interact with a
                digital product. We power businesses and individuals to create
                better looking web projects around the world.{" "}
              </p>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <h5>Social Feed</h5>
              <div className={classes.socialFeed}>
                <div>
                  <i className="fab fa-twitter" />
                  <p>How to handle ethical disagreements with your clients.</p>
                </div>
                <div>
                  <i className="fab fa-twitter" />
                  <p>The tangible benefits of designing at 1x pixel density.</p>
                </div>
                <div>
                  <i className="fab fa-facebook-square" />
                  <p>
                    A collection of 25 stunning sites that you can use for
                    inspiration.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <h5>Instagram Feed</h5>
              <div className={classes.galleryFeed}>
                <img
                  src={face1}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src={face2}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src={face3}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src={face4}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src={face5}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src={face6}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src={face7}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
                <img
                  src={face8}
                  className={classNames(
                    classes.img,
                    classes.imgRaised,
                    classes.imgRounded
                  )}
                  alt="..."
                />
              </div>
            </GridItem>
          </GridContainer>
        </Footer>
        <br />
        <br />
        <Footer
          theme="white"
          content={
            <div className={classNames(classes.pullCenter, classes.copyRight)}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <Link
                to="https://www.creative-tim.com?ref=mkpr-footer-components"
                target="_blank"
              >
                Creative Tim
              </Link>{" "}
              All Rights Reserved.
            </div>
          }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About Us</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="#pablo">Blog</Link>
                  </li>
                  <li>
                    <Link to="#pablo">About us</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Presentation</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Contact Us</Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Market</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="#pablo">Sales FAQ</Link>
                  </li>
                  <li>
                    <Link to="#pablo">How to register</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Sell goods</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Receive Payment</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Transactions issues</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Affiliates program</Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h5>Social Feed</h5>
                <div className={classes.socialFeed}>
                  <div>
                    <i className="fab fa-twitter" />
                    <p>
                      How to handle ethical disagreements with your clients.
                    </p>
                  </div>
                  <div>
                    <i className="fab fa-twitter" />
                    <p>
                      The tangible benefits of designing at 1x pixel density.
                    </p>
                  </div>
                  <div>
                    <i className="fab fa-facebook-square" />
                    <p>
                      A collection of 25 stunning sites that you can use for
                      inspiration.
                    </p>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h5>Follow Us</h5>
                <ul className={classes.socialButtons}>
                  <li>
                    <Button justIcon simple to="#pablo" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple to="#pablo" color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple to="#pablo" color="dribbble">
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple to="#pablo" color="google">
                      <i className="fab fa-google-plus-g" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple to="#pablo" color="instagram">
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
                <h5>Numbers Don{"'"}t Lie</h5>
                <h4>
                  14.521 <small>Freelancers</small>
                </h4>
                <h4>
                  1.423.183 <small>Transactions</small>
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>
        <br />
        <br />
        <Footer
          theme="white"
          content={
            <div>
              <ul className={classes.socialButtons}>
                <li>
                  <Button justIcon simple to="#pablo" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple to="#pablo" color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple to="#pablo" color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple to="#pablo" color="google">
                    <i className="fab fa-google-plus-g" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple to="#pablo" color="youtube">
                    <i className="fab fa-youtube" />
                  </Button>
                </li>
              </ul>
              <div
                className={classNames(classes.pullCenter, classes.copyRight)}
              >
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <Link
                  to="https://www.creative-tim.com?ref=mkpr-footer-components"
                  target="_blank"
                >
                  Creative Tim
                </Link>{" "}
                All Rights Reserved.
              </div>
            </div>
          }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3}>
                <Link to="#pablo">
                  <h5>Material Kit PRO</h5>
                </Link>
                <p>
                  Probably the best UI Kit in the world! We know you{"'"}ve been
                  waiting for it, so don{"'"}t be shy!
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="#pablo">Blog</Link>
                  </li>
                  <li>
                    <Link to="#pablo">About us</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Presentation</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Contact us</Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Market</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="#pablo">Sales FAQ</Link>
                  </li>
                  <li>
                    <Link to="#pablo">How to register</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Sell Goods</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Receive Payment</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Transactions Issues</Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Legal</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="#pablo">Transactions FAQ</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Terms & conditions</Link>
                  </li>
                  <li>
                    <Link to="#pablo">Licenses</Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
                <form>
                  <CustomInput
                    id="footeremail"
                    formControlProps={{
                      fullWidth: false,
                      className: classes.customFormControl
                    }}
                    inputProps={{
                      placeholder: "Your Email..."
                    }}
                  />
                  <Button color="primary" justIcon>
                    <Mail />
                  </Button>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>
      </div>
    </div>
  );
};

SectionFooter.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SectionFooter);