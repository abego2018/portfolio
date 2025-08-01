import { Container, Box, Typography } from "@mui/material";
import react from "react";

function Portfolio() {
  return (
    <Container sx={{ height: "60vh" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle2">Portfolio</Typography>
      </Box>
    </Container>
  );
}

export default Portfolio;
