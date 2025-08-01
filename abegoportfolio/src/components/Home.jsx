import React, { useState, useEffect } from "react";
import { Grid, Paper, Box } from "@mui/material";
import Hello from "./Hello";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import ScrollToTopArrow from "./ScrollToTopArrow";

function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        // Show arrow after scrolling 300px
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "100vh", padding: 16 }}
      >
        {/* Welcome */}
        <Grid item xs={12} style={{ width: "100%", maxWidth: 800 }}>
          <Paper style={{ padding: 20 }}>
            <Hello />
          </Paper>
        </Grid>

        {/* About Me */}
        <Grid
          id="aboutme"
          item
          xs={12}
          style={{ width: "100%", maxWidth: 800 }}
        >
          <Paper style={{ padding: 20 }}>
            <AboutMe />
          </Paper>
        </Grid>

        {/* Portfolio */}
        <Grid
          id="portfolio"
          item
          xs={12}
          style={{ width: "100%", maxWidth: 800 }}
        >
          <Paper style={{ padding: 20 }}>
            <Portfolio />
          </Paper>
        </Grid>

        {/* Contact */}
        <Grid
          id="contact"
          item
          xs={12}
          style={{ width: "100%", maxWidth: 800 }}
        >
          <Paper style={{ padding: 20 }}>
            <Contact />
          </Paper>
        </Grid>
      </Grid>
      {showArrow && (
        <Box
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 24,
            left: 24,
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          <ScrollToTopArrow />
        </Box>
      )}
    </>
  );
}

export default Home;
