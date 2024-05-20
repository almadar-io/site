import React from "react";
import Card from "Components/Card/Card.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import CardHeader from "Components/Card/CardHeader.jsx";
import GridContainer from "Components/Grid/GridContainer.jsx";
import GridItem from "Components/Grid/GridItem.jsx";
// react components for routing our app without refresh
import projectsStyle from "Assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
import { withStyles } from '@material-ui/core';
const SectionClients = ({ classes }) => {
  const clients = [
    {
      title: "American Express",
      src: "https://orbital-clients.s3.amazonaws.com/amex.png"
    },
    {
      title: "Amgen",
      src: "https://orbital-clients.s3.amazonaws.com/amgen.png"
    },
    {
      title: "Landdox",
      src: "https://orbital-clients.s3.amazonaws.com/landdox.png"
    },
    {
      title: "MWI",
      src: "https://orbital-clients.s3.amazonaws.com/mwi.png"
    },
    {
      title: "Space X",
      src: "https://orbital-clients.s3.amazonaws.com/spacex.png"
    },
    {
      title: "Zahra",
      src: "https://orbital-clients.s3.amazonaws.com/zahra.png"
    }
  ];
  return (
    <GridContainer>
      {clients.map(({ title, src }) => {
        return (
          <GridItem xs={12} sm={4} md={4}>
            <Card plain className={classes.card2}>
              <CardHeader image plain>
                <img src={src} alt="..." />
              </CardHeader>
              <CardBody plain>
                <h4 className={classes.cardTitle}>{title}</h4>
              </CardBody>
            </Card>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};
export default withStyles(projectsStyle)(SectionClients);
