import React from "react";
import { Grid, Paper } from "@mui/material";

function Home() {
  return (
    <Grid container direction="column" spacing={2} style={{ height: "100vh" }}>
      {/* Section 1 */}
      <Grid item xs={12}>
        <Paper style={{ padding: 20 }}>Section 1 Content</Paper>
      </Grid>
      TODO add Hello and about section here
      {/* Section 2 */}
      <Grid item xs={12}>
        <Paper style={{ padding: 20 }}>Section 2 Content</Paper>
      </Grid>
      TODO add About section here, include a linkable nave system for Life,
      Education, Experience
      {/* Section 3 */}
      <Grid item xs={12}>
        <Paper style={{ padding: 20 }}>Section 3 Content</Paper>
      </Grid>
      TODO create Skils section
    </Grid>
  );
}

export default Home;
