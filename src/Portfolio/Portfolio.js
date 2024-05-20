import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./Portfolio.styles";
import { Route, Switch } from "react-router-dom";
import ClientNotification from "Templates/_shared/ClientNotification/ClientNotification";
import OrbitalHomePage from "./OrbitalHomePage/OrbitalHomePage";
import theme from "Theme";
import MainWrapper from "Templates/Wrappers/MainWrapper";
// import OrbitalAboutPage from "./OrbitalAboutPage/OrbitalAboutPage";
// import OrbitalServicesPage from "./OrbitalServicesPage/OrbitalServicesPage";
// import OrbitalProductPage from "./OrbitalProductPage/OrbitalProductPage";
// import OrbitalContactPage from "./OrbitalContactPage/OrbitalContactPage";
// import OrbitalPricingPage from "./OrbitalPricingPage/OrbitalPricingPage.jsx";
// import OrbitalChat from "./OrbitalProductPage/Sections/OrbitalChat";
// import OrbitalCMS from "./OrbitalProductPage/Sections/OrbitalCMS";
// import OrbitalEcommerce from "./OrbitalProductPage/Sections/OrbitalEcommerce";
// import { Socket } from "../@markab.io/react";
// import { Crud } from "../../../../orbital-react-services/crud-service/crud-service-mst";
// import Chat from "../../OrbitalChat/Chat/Chat.js";

const MainWrapperContainer = ({
  children,
  logo,
  classes,
  routeList,
  ...rest
}) => {
  return (
    <MainWrapper
      brand="Markab"
      logo={logo}
      fixed
      color="white"
      theme={theme}
      classes={classes}
      routeList={routeList}
      {...rest}
    >
      {children}
    </MainWrapper>
  );
};
const Portfolio = ({
  contacts,
  rootStore,
  user,
  offlineStorage,
  config,
  contacts_createModel,
  form,
  location,
  match,
  history,
  classes,
  notifications,
  saveNotification,
  removeNotification,
  logo,
  title,
  ...rest
}) => {
  return (
    <Switch>
      <Route
        path="/"
        render={props => {
          return (
            <MainWrapperContainer title={title} logo={logo} {...props} {...rest}>
              <OrbitalHomePage onContactUs={contacts_createModel} />
              <ClientNotification
                notifications={notifications}
                handleClose={(event, reason, notification) => {
                  removeNotification(notification);
                }}
              />
            </MainWrapperContainer>
          );
        }}
      />
    </Switch>
  );
};

export default withStyles(styles, { defaultTheme: theme })(Portfolio);
