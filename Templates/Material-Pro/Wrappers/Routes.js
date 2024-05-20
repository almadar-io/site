import React from "react";
import { ListItem, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "Templates/_shared/material-kit-pro-react-v1.7.0/src/components/CustomButtons/Button.jsx";

export const Routes = ({
  handleRouteClick,
  currentRoute,
  routeList,
  classes
}) => {
  return (
    <React.Fragment>
      {routeList.map((route, index) => {
        const target = `#${route.url.replace("/", "")}`;
        return (
          <ListItem
            selected={index === currentRoute}
            className={classes.listItem}
            key={index}
            button
          >
            {route.type === "button" ? (
              <Button
                href={target}
                color="white"
                className={classes.navButton}
                round
                onClick={e => handleRouteClick(e, target)}
              >
                <Icon className={classes.icons}>{route.icon}</Icon>
              </Button>
            ) : route.type === "external" ? (
              <a href={route.url} target="_blank" className={classes.navLink}>
                <Icon>{route.icon}</Icon>
                {route.name}
              </a>
            ) : (
              <a
                href={target}
                onClick={e => handleRouteClick(e, target)}
                className={classes.navLink}
              >
                <Icon>{route.icon}</Icon>
                {route.name}
              </a>
            )}
          </ListItem>
        );
      })}
    </React.Fragment>
  );
};
