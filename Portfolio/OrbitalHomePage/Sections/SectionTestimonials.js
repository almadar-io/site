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
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/icons
import Star from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
// core components
import GridContainer from "Components/Grid/GridContainer.jsx";

import GridItem from "Components/Grid/GridItem.jsx";
import Card from "Components/Card/Card.jsx";
import CardBody from "Components/Card/CardBody.jsx";
import CardAvatar from "Components/Card/CardAvatar.jsx";
import Muted from "Components/Typography/Muted.jsx";
import Warning from "Components/Typography/Warning.jsx";
import testimonialsStyle from "Assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx";

import kendall from "Assets/img/faces/kendall.jpg";

import christian from "Assets/img/faces/christian.jpg";
import imagesStyles from "Assets/jss/material-kit-pro-react/imagesStyles.jsx";
import { cardTitle } from "Assets/jss/material-kit-pro-react.jsx";
import { withStyles, Grid } from "@material-ui/core";

const style = {
  ...imagesStyles,
  cardTitle,
  ...testimonialsStyle
};

function SectionTestimonials({ ...props }) {
  const { classes, ...rest } = props;
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="cd-section" {...rest}>
      <div
        className={
          classes.testimonials +
          " " +
          classes.sectionDark +
          " " +
          classes.testimonial2
        }
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            {clients.map(({ title, src }) => {
              return (
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <img
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "40px"
                      }}
                      width="150px"
                      src={src}
                      alt="..."
                    />
                    <CardBody>
                    </CardBody>
                  </Card>
                </GridItem>
              );
            })}
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 2 END */}
    </div>
  );
}

SectionTestimonials.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(SectionTestimonials);
