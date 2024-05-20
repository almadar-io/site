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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
// sections for this page
import SectionPills from "./Sections/SectionPills.jsx";
import SectionInterested from "./Sections/SectionInterested.jsx";
import SectionImage from "./Sections/SectionImage.jsx";
import SubscribeLine from "./Sections/SubscribeLine.jsx";

import blogPostsPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

class BlogPostsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Material Kit PRO React"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
        />
        <Parallax image={require("../../assets/img/bg10.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <Typography variant="h3" component="h3" className={classes.title}>
                  A Place for Entrepreneurs to Share and Discover New Stories
                </Typography>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionPills />
            <SectionInterested />
          </div>
          <SectionImage />
          <SubscribeLine />
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/?ref=mkpr-blog-posts"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link
                      to="https://www.creative-tim.com/presentation?ref=mkpr-blog-posts"
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
                      to="https://www.creative-tim.com/license?ref=mkpr-blog-posts"
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
                  to="https://www.creative-tim.com?ref=mkpr-blog-posts"
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

BlogPostsPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(blogPostsPageStyle)(BlogPostsPage);