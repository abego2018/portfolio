import react from "react";
import { Box, Button, Grid, Container } from "@mui/material";

function Hello() {
  return (
    <Container>
      <Grid container spacing={2}>
        {" "}
        {/* spacing adds a gap between items */}
        <Grid item xs={12} sm={6}>
          {" "}
          {/* Takes full width on extra-small, half on small and up */}
          <Box sx={{ p: 2, border: "1px solid grey", borderRadius: 2 }}>
            <p>Hello</p>
            <h2>I am Abego</h2>
            <p>Abraham Gonzalez</p>
            <p>Jr. Full-stack developer</p>
            <Button>Hire Me</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              p: 2,
              border: "1px solid grey",
              borderRadius: 2,
              minHeight: "300px",
            }}
          >
            <img src="https://placehold.co/300x300?text=profilepic" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hello;
