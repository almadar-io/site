import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
    color: "#fff",
    height: "100vh",
    backgroundImage: `url(/images/hero-circle.webp)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    color: "#fff",
    textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    padding: theme.spacing(2),
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.headline}>
        Empowering Developers.
      </Typography>
      <div></div>
      <Typography variant="h2" className={classes.headline}>
        Scaling with AI.
      </Typography>
    </div>
  );
};

export default HeroSection;
