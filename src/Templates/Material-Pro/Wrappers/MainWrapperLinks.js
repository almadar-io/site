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
/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Routes } from "Templates/Wrappers/Routes";

// @material-ui/icons
import headerLinksStyle from "../_shared/material-kit-pro-react-v1.7.0/src/assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

import {
  withStyles,
  List,
  ListItem,
  Hidden,
  Drawer,
  IconButton,
  Icon
} from "@material-ui/core";

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = (e, target) => {
    var isMobile = navigator.userAgent.match(
      /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
    );
    if (isMobile) {
      // if we are on mobile device the scroll into view will be managed by the browser
    } else {
      e.preventDefault();
      var targetScroll = document.getElementById(target.replace("#", ""));
      scrollGo(document.documentElement, targetScroll.offsetTop, 500);
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val + 700;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const { classes, routeList, isActive, handleRouteClick } = props;
  return (
    <>
      <List className={classes.list + " " + classes.mlAuto}>
        <Routes
          handleRouteClick={(e, target) => {
            smoothScroll(e, target);
            handleRouteClick(e, target);
          }}
          classes={classes}
          isActive={isActive}
          routeList={routeList}
        />
      </List>
    </>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
