import React from "react";
import Footer from "../_shared/material-kit-pro-react-v1.7.0/src/components/Footer/Footer.jsx";
import footerStyle from "../_shared/material-kit-pro-react-v1.7.0/src/assets/jss/material-kit-pro-react/components/footerStyle.jsx";
import Favorite from "@material-ui/icons/Favorite";
import { List, ListItem, withStyles } from '@material-ui/core';
const MainWrapperFooter = ({ classes }) => {
  return (
    <Footer
      content={
        <div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()}{" "}
            Markab Limited Liability Company
          </div>
        </div>
      }
    />
  );
};

export default withStyles(footerStyle)(MainWrapperFooter);
