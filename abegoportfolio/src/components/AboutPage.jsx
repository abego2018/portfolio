import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import AboutMeNavBox from "./AboutMeNavBox";

const aboutItems = [
  {
    key: "theme",
    description: "The theme for this page",
  },
  {
    key: "Languages and Libraries",
    description:
      "I have gone through the Long Beach 18-week developer bootcamp as well as classes through, freeCodeCamp.com, Udemy, LinkedIn and Microsoft Learning",
  },
  {
    key: "What's next",
    description:
      "Planned changes on this page and a link to the Github repository",
  },
];
function AboutPage() {
  const [selectedKey, setSelectedKey] = useState("");

  const activeItem = aboutItems.find((item) => item.key === selectedKey);

  return (
    <Container sx={{ display: "flex" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle2">About This Page</Typography>
        <Box sx={{ display: "flex" }}>
          <AboutMeNavBox
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            items={aboutItems}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default AboutPage;
