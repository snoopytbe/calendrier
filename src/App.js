import React from "react";
import "./styles/styles.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { theme, useStyles } from "./styles/styles";
import Calendrier from "./components/Calendrier";

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Typography variant="h4">Calendrier</Typography>
        <br />
        <Calendrier />
      </div>
    </ThemeProvider>
  );
}
