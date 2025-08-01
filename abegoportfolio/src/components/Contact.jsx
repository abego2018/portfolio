import { Container, Box, Grid, Typography, Button } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <Container sx={{ height: "60vh" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center", // horizontal center
        }}
      >
        <Typography variant="subtitle2">Contact Me</Typography>
      </Box>
    </Container>
  );
}

export default Contact;
