import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import Hello from "./Hello";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ minHeight: "100vh", padding: 16 }}
    >
      {/* Welcome */}
      <Grid item xs={12} style={{ width: "100%", maxWidth: 800 }}>
        <Paper style={{ padding: 20 }}>
          <Hello />
        </Paper>
      </Grid>

      {/* About Me */}
      <Grid item xs={12} style={{ width: "100%", maxWidth: 800 }}>
        <Paper style={{ padding: 20 }}>
          <AboutMe />
        </Paper>
      </Grid>

      {/* Skills */}
      <Grid item xs={12} style={{ width: "100%", maxWidth: 800 }}>
        <Paper style={{ padding: 20 }}>
          <Portfolio />
        </Paper>
      </Grid>

      {/* Portfolio */}
      <Grid item xs={12} style={{ width: "100%", maxWidth: 800 }}>
        <Paper style={{ padding: 20 }}>TODO create Portfolio section</Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
