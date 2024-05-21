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
    padding: theme.spacing(2),
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.headline}>
        Empowering Developers.
        <br></br>
        <br></br>
        Scaling with AI.
      </Typography>
    </div>
  );
};

export default HeroSection;
