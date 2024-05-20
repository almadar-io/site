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
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import { Typography, Divider } from "@material-ui/core";
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
import teamsStyle from "Assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "Assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";

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
        <Typography variant="h3" component="h3" className={classes.title}>
          About us
        </Typography>
        <h4 className={classes.description}>
          We believe that continued experimentation is a necessity in the
          process of bringing great ideas to life.
        </h4>
        <h5
          className={classes.description}
          style={{ textAlign: "left", lineHeight: 2.5 }}
        >
          That is exactly why our goal is to help take your vision from concept
          to reality by allowing you to test out prototypes quickly and
          iteratively. We know that can be a tedious, slow and costly process,
          but we believe it shouldn't be that way. Markab wants simplify the
          process for you, optimizing the testing and development phases, while
          facilitating experimentation so that you can achieve the best product
          quickly and efficiently. With more than a decade of experience serving
          clients across a number of sectors, we posses the tools, expertise and
          deep knowledge base to guide you through this process and help achieve
          your perfect result.
          <h3>Our Team</h3>
          We are not just any development agency. Our clients are supported by a
          team of experienced and dedicated senior software developers, product
          managers and designers who share a passion for great ideas and
          harnessing cutting-edge technology to achieve them. At Markab we are
          obsessed with learning and finding ways to make things work better,
          keeping us ahead of the curve every step of the way and always able to
          anticipate our clients' needs. We specialize in building
          individualized web and mobile apps tailored to meet the specific
          business requirements of each client, supporting them in launching
          scalable backend systems deployed to Amazon's Cloud (AWS), and
          designed by React and React Native. Let us help bring your idea to
          life.
        </h5>
      </div>
    );
  }
}

SectionTeam.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(SectionTeam);
