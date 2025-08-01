// AboutMe.jsx
import React, { useState } from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import AboutMeNavBox from "./AboutMeNavBox";

const aboutItems = [
  {
    key: "life",
    description: "This is some stuff about my life",
    image: "https://placehold.co/400x400?text=Life",
  },
  {
    key: "education",
    description: "This is the education stuff I've learned",
    image: "https://placehold.co/400x400?text=Education",
  },
  {
    key: "experience",
    description: "This is some of the experience I've had",
    image: "https://placehold.co/400x400?text=Experience",
  },
];

function AboutMe() {
  const [selectedKey, setSelectedKey] = useState("");

  const activeItem = aboutItems.find((item) => item.key === selectedKey);

  return (
    <Container>
      <Grid container spacing={2}>
        {/* Left: Image */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              p: 2,
              border: "1px solid grey",
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              bgcolor: "#f9f9f9",
            }}
          >
            {activeItem ? (
              <Box
                component="img"
                src={activeItem.image}
                alt={activeItem.key}
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            ) : (
              <Typography color="text.secondary">
                Select a tab to see an image
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Right: Nav + Description */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 2, border: "1px solid grey", borderRadius: 2 }}>
            <AboutMeNavBox
              selectedKey={selectedKey}
              setSelectedKey={setSelectedKey}
              items={aboutItems}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
