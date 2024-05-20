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
  container,
  whiteColor,
  title,
  mlAuto,
  mrAuto
} from "../../../material-kit-pro-react.jsx";
import customCheckboxRadioSwitch from "../../customCheckboxRadioSwitchStyle.jsx";
import customSelectStyle from "../../customSelectStyle.jsx";

const basicsStyle = {
  mlAuto,
  mrAuto,
  container,
  ...customSelectStyle,
  ...customCheckboxRadioSwitch,
  sections: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: whiteColor
  }
};

export default basicsStyle;
