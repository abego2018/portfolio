import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import Hello from "./Hello";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

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
      <Grid id="aboutme" item xs={12} style={{ width: "100%", maxWidth: 800 }}>
        <Paper style={{ padding: 20 }}>
          <AboutMe />
        </Paper>
      </Grid>

      {/* Portfolio */}
      <Grid
        id="portfolio"
        item
        xs={12}
        style={{ width: "100%", maxWidth: 800 }}
      >
        <Paper style={{ padding: 20 }}>
          <Portfolio />
        </Paper>
      </Grid>

      {/* Contact */}
      <Grid id="contact" item xs={12} style={{ width: "100%", maxWidth: 800 }}>
        <Paper style={{ padding: 20 }}>
          <Contact />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
