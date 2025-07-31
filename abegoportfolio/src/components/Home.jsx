import React from "react";
import { Grid, Paper } from "@mui/material";
import Hello from "./Hello";

function Home() {
  return (
    <Grid container direction="column" spacing={2} style={{ height: "100vh" }}>
      {/* Welcome */}
      <Grid id="welcome" item xs={12} sx={{ minHeight: "300px" }}>
        <Paper style={{ padding: 20 }}>
          <Hello />
        </Paper>
      </Grid>

      {/* About me*/}
      <Grid id="aboutme" item xs={12}>
        <Paper style={{ padding: 20 }}>
          TODO add About section here, include a linkable nave system for Life,
          Education, Experience
        </Paper>
      </Grid>

      {/* Skills */}
      <Grid id="skills" item xs={12}>
        <Paper style={{ padding: 20 }}>TODO create Skils section</Paper>
      </Grid>

      {/* Porfolio section*/}
      <Grid id="portfolio" item xs={12}>
        <Paper style={{ padding: 20 }}>TODO create Skils section</Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
