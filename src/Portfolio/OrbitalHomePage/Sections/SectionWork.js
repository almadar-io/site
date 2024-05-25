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

// core components
import GridContainer from "Components/Grid/GridContainer.jsx";

import GridItem from "Components/Grid/GridItem.jsx";
import CustomInput from "Components/CustomInput/CustomInput.jsx";
import Button from "Components/CustomButtons/Button.jsx";
import workStyle from "Assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";
import { compose, withState } from "recompose";
import { withStyles, Typography } from "@material-ui/core";

const enhance = compose(
  withState("contactUs", "setContactUs", {
    name: null,
    email: null,
    message: null
  })
);

class SectionWork extends React.Component {
  render() {
    const { classes, onContactUs, setContactUs, contactUs } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <Typography variant="h3" component="h3" className={classes.title}>
              Work with us
            </Typography>
            <h4 className={classes.description}>How can we help?</h4>
            <h4 className={classes.description}>
              Email us at
              <span> </span>
              <a href="mailto:samalghanmi@almadar.io">samalghanmi@almadar.io</a>
            </h4>
            <form>
              <GridContainer>
                {/* <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: ev => {
                        let name = ev.target.value;
                        setContactUs(prevState => ({ ...prevState, name }));
                      }
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: ev => {
                        let email = ev.target.value;
                        setContactUs(prevState => ({ ...prevState, email }));
                      }
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Idea"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    onChange: ev => {
                      let message = ev.target.value;
                      setContactUs(prevState => ({ ...prevState, message }));
                    }
                  }}
                />
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  className={classes.mrAuto + " " + classes.mlAuto}
                  onClick={() => onContactUs(contactUs)}
                >
                  <Button color="primary">Send us your idea</Button>
                </GridItem> */}
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

SectionWork.propTypes = {
  classes: PropTypes.object
};

export default withStyles(workStyle)(enhance(SectionWork));
