import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
    color: "#fff",
    height: "100vh",
    backgroundColor: "#FFFEF8",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    padding: theme.spacing(2),
  },
  dev:{
    color: theme.palette.secondary.secondary,
  },
  ai:{
    color: theme.palette.secondary.secondary,
  }
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" component="p" className={classes.headline}>
        Empowering <span className={classes.dev}>Developers.</span>
        <br></br>
        Scaling with <span className={classes.ai}>AI.</span>
      </Typography>
    </div>
  );
};

export default HeroSection;
