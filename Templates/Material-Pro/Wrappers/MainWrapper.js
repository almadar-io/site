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
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
// core components
import "../_shared/material-kit-pro-react-v1.7.0/src/assets/scss/material-kit-pro-react.scss";
import headerStyle from "../_shared/material-kit-pro-react-v1.7.0/src/assets/jss/material-kit-pro-react/components/headerStyle.jsx";
import aboutUsStyle from "../_shared/material-kit-pro-react-v1.7.0/src/assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";
import MainWrapperLinks from "./MainWrapperLinks";
import MainWrapperFooter from "./MainWrapperFooter";
import { ThemeProvider } from "@material-ui/styles";
import { compose, withState } from "recompose";
import { matchPath } from "react-router";
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Drawer,
  Grid,
  Typography,
  Icon
} from "@material-ui/core";

const enhance = compose(withState("mobileOpen", "setMobileOpen", false));

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const {
      classes,
      theme,
      color,
      links,
      brand,
      fixed,
      absolute,
      children,
      logo,
      title,
      width,
      height,
      location,
      history,
      match,
      routeList,
      mobileOpen,
      setMobileOpen,
      ...rest
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ...rest })
    );
    return (
      <ThemeProvider theme={theme}>
        <AppBar className={appBarClasses}>
          <Toolbar
            style={{ justifyContent: "center" }}
            className={classes.container}
          >
            <Grid container>
              <Grid style={{ marginTop: "10px" }} item>
                <Link to={`/`}>
                  {logo && (
                    <img
                      style={{ marginRight: "10px" }}
                      src={logo}
                      width={width || "35"}
                      height={height || "auto"}
                      title="Markab"
                    />
                  )}
                </Link>
              </Grid>
              <Grid style={{ marginTop: "10px" }} item>
                {title && (
                  <Typography
                    style={{ fontWeight: 300 }}
                    variant="h5"
                    component="h5"
                  >
                    {title}
                  </Typography>
                )}
              </Grid>
              <Grid style={{ marginLeft: "auto" }} item>
                <Hidden mdUp>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setMobileOpen(!mobileOpen)}
                  >
                    <Icon>menu</Icon>
                  </IconButton>
                </Hidden>
                <Hidden mdUp implementation="js">
                  <Drawer
                    variant="temporary"
                    anchor={"right"}
                    open={mobileOpen}
                    classes={{
                      paper: classes.drawerPaper
                    }}
                    onClose={() => setMobileOpen(false)}
                  >
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={() => setMobileOpen(false)}
                      className={classes.closeButtonDrawer}
                    >
                      <Icon>close</Icon>
                    </IconButton>
                    <MainWrapperLinks
                      classes={classes}
                      routeList={routeList}
                      handleRouteClick={() => setMobileOpen(false)}
                      isActive={routeName => {
                        if (routeName === "contact") {
                          return false;
                        }
                        if (routeName === "/") {
                          if (location.pathname !== "/") {
                            return false;
                          }
                          return true;
                        }
                        const active =
                          matchPath(location.pathname, { path: routeName }) !=
                          null;
                        return active;
                      }}
                    />
                  </Drawer>
                </Hidden>
                <Hidden smDown implementation="css" className={classes.hidden}>
                  <div className={classes.collapse}>
                    <MainWrapperLinks
                      classes={classes}
                      routeList={routeList}
                      isActive={routeName => {
                        if (routeName === "contact") {
                          return false;
                        }
                        if (routeName === "/") {
                          if (location.pathname !== "/") {
                            return false;
                          }
                          return true;
                        }
                        const active =
                          matchPath(location.pathname, { path: routeName }) !=
                          null;
                        return active;
                      }}
                    />
                  </div>
                </Hidden>
              </Grid>
            </Grid>
          </Toolbar>
          <Hidden mdUp implementation="js">
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper
              }}
              onClose={this.handleDrawerToggle}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.closeButtonDrawer}
              >
                <Close />
              </IconButton>
              <div className={classes.appResponsive}>
                <MainWrapperLinks
                  routeList={routeList}
                  classes={classes}
                  isActive={routeName => {
                    if (routeName === "contact") {
                      return false;
                    }
                    if (routeName === "/") {
                      if (location.pathname !== "/") {
                        return false;
                      }
                      return true;
                    }
                    const active =
                      matchPath(location.pathname, { path: routeName }) != null;
                    return active;
                  }}
                />
              </div>
            </Drawer>
          </Hidden>
        </AppBar>
        <div className={classes.content}>{childrenWithProps}</div>
        <MainWrapperFooter />
      </ThemeProvider>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default compose(
  withStyles(headerStyle, aboutUsStyle),
  enhance
)(Header);
