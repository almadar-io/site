import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
    flexDirection: "column",
  },
  headline: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    padding: theme.spacing(2),
  },
  dev: {
    color: theme.palette.secondary.secondary,
  },
  ai: {
    color: theme.palette.secondary.secondary,
  },
  ctaButton: {
    marginTop: theme.spacing(2),
  },
}));

const HeroSection = ({onCta}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3" component="p" className={classes.headline}>
          Empowering <span className={classes.dev}>Developers.</span>
          <br />
          Scaling with <span className={classes.ai}>AI.</span>
        </Typography>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.ctaButton}
            onClick={onCta}
          >
            Connect with us
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
