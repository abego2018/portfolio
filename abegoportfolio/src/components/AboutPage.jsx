import React, { useState } from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import AboutPageNavBox from "./AboutPageNavBox";

const aboutItems = [
  {
    key: "theme",
    description:
      "I grew up watching CRT televisions. I remember one day I almost spilled my water. A few drops fell onto the screen and I was amazed by the red, green and blue rectangles I saw. This theme is currently a light-theme based on those three colors. The logo I created is meant to be reminiscent of those TVs and the color saturations that I remember.",
  },
  {
    key: "Languages and Libraries",
    description: "React, Material UI, CSS",
  },
  {
    key: "What's next",
    description:
      "I am working on a dark theme pallete. I am also expanding on the portfolio to incorporate my other portfolios for art and woodworking. See the repo - ",
  },
];
function AboutPage() {
  const [selectedKey, setSelectedKey] = useState("theme"); // default selected

  const activeItem = aboutItems.find((item) => item.key === selectedKey);

  return (
    <Container sx={{ py: 4 }}>
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="subtitle">About This Page</Typography>
      </Box>

      {/* Tabs on their own independent row/plane */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3, // space below the tabs
        }}
      >
        <AboutPageNavBox
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
          items={aboutItems}
        />
      </Box>

      {/* Content area stays the same size, independent of tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 600,
            height: 200, // fixed height
            p: 3,
            overflowY: "auto",
          }}
        >
          {activeItem ? (
            <>
              <Typography variant="body1">{activeItem.description}</Typography>
            </>
          ) : (
            <Typography variant="body2">
              Select a tab to see its description.
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
}

export default AboutPage;
