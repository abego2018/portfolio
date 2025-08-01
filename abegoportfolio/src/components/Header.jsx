import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  Typography,
  Stack,
  Box,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../assets/images/Logo.png";
import "./styles.css";

const cycleColors = ["#ff667a", "#66ff99", "#66d9ff"];
function Header() {
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % cycleColors.length);
  };

  const getButtonStyle = () => ({
    width: "auto",
    padding: "4px 12px",
    borderRadius: "50px",
    backgroundColor: cycleColors[colorIndex],
    color: "#000", // optional contrast
    transition: "background-color 0.3s",
  });

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {/* Left List */}
      <List sx={{ display: "flex", gap: 2, padding: 0 }}>
        <Typography variant="h6" sx={{ mr: 2, alignSelf: "center" }}>
          <img id="Logo" src={Logo} alt="Logo" />
        </Typography>

        <ListItem
          button
          component="a"
          href="#aboutme"
          onClick={handleClick}
          sx={getButtonStyle()}
        >
          About
        </ListItem>

        <ListItem
          button
          component="a"
          href="#portfolio"
          onClick={handleClick}
          sx={getButtonStyle()}
        >
          Portfolio
        </ListItem>

        <ListItem
          button
          component="a"
          href="#contact"
          onClick={handleClick}
          sx={getButtonStyle()}
        >
          Contact
        </ListItem>
      </List>

      {/* Right List */}
      <List sx={{ display: "flex", gap: 2, padding: 0 }}>
        <ListItem
          button
          component="a"
          href="https://www.linkedin.com/in/abraham-gonzalez-22b161b5"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: "auto", padding: 0 }}
        >
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>Link</ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>Link</ListItem>
      </List>
    </Box>
  );
}

export default Header;
