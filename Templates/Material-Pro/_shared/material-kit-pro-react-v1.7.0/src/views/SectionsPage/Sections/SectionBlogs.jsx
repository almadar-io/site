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
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import Info from "../../../components/Typography/Info.jsx";
import Danger from "../../../components/Typography/Danger.jsx";
import Success from "../../../components/Typography/Success.jsx";
import Button from "../../../components/CustomButtons/Button.jsx";

import blogsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

import cardBlog4 from "../../../assets/img/examples/card-blog4.jpg";
import office2 from "../../../assets/img/office2.jpg";
import blog5 from "../../../assets/img/examples/blog5.jpg";
import blog6 from "../../../assets/img/examples/blog6.jpg";
import blog7 from "../../../assets/img/examples/blog7.jpg";
import blog8 from "../../../assets/img/examples/blog8.jpg";
import bg5 from "../../../assets/img/bg5.jpg";

function SectionBlogs({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 1 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <Typography variant="h3" component="h3" className={classes.title}>Latest Blogposts</Typography>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <Link to="#pablito" onClick={e => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <Info>
                      <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </Link>
                    </h3>
                    <p className={classes.description1}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </Link>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </Link>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={7} md={7}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        <TrendingUp />
                        TRENDING
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        6 insights into the French Fashion landscape
                      </Link>
                    </h3>
                    <p className={classes.description1}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </Link>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </Link>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <Link to="#pablito" onClick={e => e.preventDefault()}>
                        <img src={office2} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 1 END */}
      {/* Blogs 2 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <Typography variant="h3" component="h3" className={classes.title}>Latest Blogposts 2</Typography>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <Link to="#pablito" onClick={e => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <Link to="#pablo" onClick={e => e.preventDefault()}>
                          Autodesk looks to future of 3D printing with Project
                          Escher
                        </Link>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <Link to="#pablo" onClick={e => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </Link>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <Link to="#pablito" onClick={e => e.preventDefault()}>
                        <img src={blog5} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog5})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Success>
                        <h6 className={classes.cardCategory}>STARTUPS</h6>
                      </Success>
                      <h4 className={classes.cardTitle}>
                        <Link to="#pablo" onClick={e => e.preventDefault()}>
                          Lyft launching cross-platform service this week
                        </Link>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <Link to="#pablo" onClick={e => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </Link>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <Link to="#pablito" onClick={e => e.preventDefault()}>
                        <img src={blog7} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog7})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Danger>
                        <h6 className={classes.cardCategory}>
                          <TrendingUp />
                          ENTERPRISE
                        </h6>
                      </Danger>
                      <h4 className={classes.cardTitle}>
                        <Link to="#pablo" onClick={e => e.preventDefault()}>
                          6 insights into the French Fashion landscape
                        </Link>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <Link to="#pablo" onClick={e => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </Link>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 2 END */}
      {/* Blogs 3 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <Typography variant="h3" component="h3" className={classes.title}>Latest Blogposts 3</Typography>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <Link to="#pablito" onClick={e => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Info>
                      <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </Link>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </Link>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </Link>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <Link to="#pablito" onClick={e => e.preventDefault()}>
                        <img src={office2} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        <TrendingUp />
                        TRENDING
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        6 insights into the French Fashion landscape
                      </Link>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </Link>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </Link>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <Link to="#pablito" onClick={e => e.preventDefault()}>
                        <img src={blog8} alt="..." />
                      </Link>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog8})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog8})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Success>
                      <h6 className={classes.cardCategory}>STARTUPS</h6>
                    </Success>
                    <h3 className={classes.cardTitle}>
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        Lyft launching cross-platform service this week
                      </Link>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </Link>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <Link to="#pablo" onClick={e => e.preventDefault()}>
                        <b>Megan Rose</b>
                      </Link>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 3 END */}
      {/* Blogs 4 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <Typography variant="h3" component="h3" className={classes.title}>Latest Blogposts 4</Typography>
              <br />
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <Link to="#pablito" onClick={e => e.preventDefault()}>
                    <img src={bg5} alt="..." />
                  </Link>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${bg5})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>FASHION</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <Link to="#pablo" onClick={e => e.preventDefault()}>
                      Autodesk looks to future of 3D
                    </Link>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <Link to="#pablito" onClick={e => e.preventDefault()}>
                    <img src={blog6} alt="..." />
                  </Link>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${blog6})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Success>
                    <h6 className={classes.cardCategory}>LIFESTYLE</h6>
                  </Success>
                  <h3 className={classes.cardTitle}>
                    <Link to="#pablo" onClick={e => e.preventDefault()}>
                      We will breathe clean air and exercise
                    </Link>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 4 END */}
    </div>
  );
}

SectionBlogs.propTypes = {
  classes: PropTypes.object
};

export default withStyles(blogsStyle)(SectionBlogs);