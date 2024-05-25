import React from "react";
import Card from "Components/Card/Card.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
// react components for routing our app without refresh
import projectsStyle from "Assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
import { withStyles } from "@material-ui/core";
const OrbitalProductItems = ({ classes, match }) => (
  <GridContainer>
    <GridItem xs={12} sm={4} md={4}>
      <Card plain className={classes.card2}>
        <a href="https://thoughtful.almadar.io" target="_blank">
          <CardHeader image plain>
            <img
              src="https://orbital-clients.s3.amazonaws.com/_Main/orbital-kb.png"
              alt="..."
            />
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                opacity: "1"
              }}
            />
          </CardHeader>
        </a>
        <CardBody plain>
          <a href="https://thoughtful.almadar.io" target="_blank">
            <h4 className={classes.cardTitle}>Orbital Knowledge Base</h4>
          </a>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={4} md={4}>
      <Card plain className={classes.card2}>
        <a href="http://ecommerce.almadar.io" target="_blank">
          <CardHeader image plain>
            <img
              src="https://orbital-clients.s3.amazonaws.com/_Main/orbital-ecommerce-admin.png"
              alt="..."
            />
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                opacity: "1"
              }}
            />
          </CardHeader>
        </a>
        <CardBody plain>
          <a href="http://ecommerce.almadar.io" target="_blank">
            <h4 className={classes.cardTitle}>Orbital E-Commerce</h4>
          </a>
        </CardBody>
      </Card>
    </GridItem>
    {/* <GridItem xs={12} sm={4} md={4}>
      <Card plain className={classes.card2}>
        <a href="http://cms.almadar.io" target="_blank">
          <CardHeader image plain>
            <img
              src="https://orbital-clients.s3.amazonaws.com/_Main/orbital-cms.png"
              alt="..."
            />
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                opacity: "1"
              }}
            />
          </CardHeader>
        </a>
        <CardBody plain>
          <a href="http://cms.almadar.io" target="_blank">
            <h4 className={classes.cardTitle}>Orbital CMS</h4>
          </a>
        </CardBody>
      </Card>
    </GridItem> */}
    {/* <GridItem xs={12} sm={4} md={4}>
      <Card plain className={classes.card2}>
        <a href="http://chat.almadar.io" target="_blank">
          <CardHeader image plain>
            <img
              src="https://orbital-clients.s3.amazonaws.com/_Main/orbital-chat.png"
              alt="..."
            />
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                opacity: "1"
              }}
            />
          </CardHeader>
        </a>
        <CardBody plain>
          <a href="http://chat.almadar.io" target="_blank">
            <h4 className={classes.cardTitle}>Orbital Chat</h4>
          </a>
        </CardBody>
      </Card>
    </GridItem> */}
    <GridItem xs={12} sm={4} md={4}>
      <Card plain className={classes.card2}>
        <a href="http://rides.almadar.io" target="_blank">
          <CardHeader image plain>
            <img
              src="https://orbital-clients.s3.amazonaws.com/_Main/orbital-rides.png"
              alt="..."
            />
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                opacity: "1"
              }}
            />
          </CardHeader>
        </a>
        <CardBody plain>
          <a href="http://rides.almadar.io" target="_blank">
            <h4 className={classes.cardTitle}>Orbital Rides</h4>
          </a>
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
);
export default withStyles(projectsStyle)(OrbitalProductItems);
