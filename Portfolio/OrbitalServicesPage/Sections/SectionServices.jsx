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
import { Typography, Divider } from "@material-ui/core";
import servicesStyle from "Assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.jsx";

function SectionServices(props) {
  const { classes } = props;
  const technologies = [
    {
      title: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      title: "React Native",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
      title: "Nodejs",
      icon:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
      title: "Mongodb",
      icon: "https://getyourprototype.s3.amazonaws.com/Slice.svg",
      width: "10px"
    },
    {
      title: "Postgresql",
      icon:
        "https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg"
    }
  ];
  return (
    <div className={classes.services}>
      <GridContainer justify="center">
        <GridItem
          md={12}
          sm={12}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <Typography variant="h3" component="h3" className={classes.title}>
            Our Services
          </Typography>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={12} sm={12}>
          <InfoArea
            title="1. Design"
            description={
              <span>
                <p>
                  With smart design and customer experience at the forefront of
                  everything we do, our team will craft your apps using
                  state-of-the-art design software and employing industry best
                  practices, allowing you to remain focused on validating your
                  hypotheses. Our expert UX designer can help you build a sleek
                  and easy-to-use app, creating the optimal experience for your
                  customers and minimizing your bounce rate.
                </p>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={12} sm={12}>
          <InfoArea
            title="2. Develop"
            description={
              <GridContainer>
                <GridItem style={{ marginBottom: "10px" }}>
                  <p>
                    Choose between a mobile app, a web app, or both. Regardless,
                    your app will be built using best practices in JavaScript,
                    React and React Native. And don't worry about having to deal
                    with code that's difficult to maintain when you want to make
                    changes or update your app. All of our apps can be easily
                    ported elsewhere guaranteeing that you aren't locked in to
                    any one software vendor.
                  </p>
                </GridItem>
              </GridContainer>
            }
            icon="mode_edit"
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={12} sm={12}>
          <InfoArea
            title="3. Deploy"
            description={
              <span>
                <p>
                  Choose your own cloud provider or private servers. By default,
                  our apps live on Amazon's Cloud (AWS), meaning they can
                  quickly and easily be scaled to meet your app's demand.
                </p>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={12} sm={12}>
          <p className={classes.description} style={{ textAlign: "left" }}>
            Some of the technologies we love and use:
          </p>
          <Divider />
          <GridContainer>
            {technologies.map(({ title, icon, width }) => (
              <GridItem md={4} sm={6}>
                {" "}
                <p className={classes.description}>
                  {" "}
                  <img width={width || "20px"} src={icon} />
                  <span style={{ marginLeft: "10px" }}>{title}</span>
                </p>
              </GridItem>
            ))}
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

SectionServices.propTypes = {
  classes: PropTypes.object
};

export default withStyles(servicesStyle)(SectionServices);
