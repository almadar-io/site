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
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor,
  title
} from "../../material-kit-pro-react.jsx";

const infoStyle = {
  infoArea: {
    padding: "0px 0 30px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor[0]
  },
  warning: {
    color: warningColor[0]
  },
  danger: {
    color: dangerColor[0]
  },
  success: {
    color: successColor[0]
  },
  info: {
    color: infoColor[0]
  },
  rose: {
    color: roseColor[0]
  },
  gray: {
    color: blackColor
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem"
  },
  descriptionWrapper: {
    color: blackColor,
    overflow: "hidden"
  },
  title: {
    ...title,
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset"
  },
  description: {
    color: blackColor,
    overflow: "hidden",
    marginTop: "0px",
    "& p": {
      color: blackColor,
      fontSize: "14px"
    }
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};

export default infoStyle;
