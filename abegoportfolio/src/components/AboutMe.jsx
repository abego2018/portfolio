import react from "react";

function AboutMe() {
  return (
    <Container>
      <Grid container spacing={2}>
        {" "}
        {/* spacing adds a gap between items */}
        <Grid item xs={12} sm={6}>
          {" "}
          {/* Takes full width on extra-small, half on small and up */}
          <Box sx={{ p: 2, border: "1px solid grey" }}>Box 1 Content</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 2, border: "1px solid grey" }}>Box 2 Content</Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
