// AboutMe.jsx
import React, { useState } from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import AboutMeNavBox from "./AboutMeNavBox";

const aboutItems = [
  {
    key: "life",
    description:
      "Outside of development, I am a father of three, an artist, in several mediums, and a general lover of art and music.   (Link to art stuff)",
    image: "https://placehold.co/300x300?text=Life",
  },
  {
    key: "education",
    description:
      "I have gone through the Long Beach 18-week developer bootcamp as well as classes through, freeCodeCamp.com, Udemy, LinkedIn and Microsoft Learning",
    image: "https://placehold.co/300x300?text=Education",
  },
  {
    key: "experience",
    description:
      "I am familiar with the following languages and libraries: HTML5, CSS5, JS, React, Material UI, Bootstrap, Python, SQLite",
    image: "https://placehold.co/300x300?text=Experience",
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
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              bgcolor: "#f9f9f9",
              maxHeight: "350px",
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
                  maxHeight: "350px",
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
          <Typography variant="subtitle1">A little</Typography>
          <Typography variant="h4">About Me</Typography>
          <Box
            sx={{
              p: 2,
              border: "1px solid grey",
              borderRadius: 2,
              maxHeight: "350px",
              maxWidth: "300px",
            }}
          >
            <AboutMeNavBox
              selectedKey={selectedKey}
              setSelectedKey={setSelectedKey}
              items={aboutItems}
            />
            <Button>Download Resume</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;
