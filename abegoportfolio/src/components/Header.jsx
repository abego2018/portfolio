import React from "react";
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
function Header() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {/* Left List */}
      <List sx={{ display: "flex", gap: 2, padding: 0 }}>
        <Typography variant="h6" sx={{ mr: 2, alignSelf: "center" }}>
          Logo
        </Typography>
        <ListItem
          button
          component="a"
          href="#aboutme"
          sx={{ width: "auto", padding: 0 }}
        >
          About
        </ListItem>
        <ListItem
          button
          component="a"
          href="#portfolio"
          sx={{ width: "auto", padding: 0 }}
        >
          Portfolio
        </ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>Contact</ListItem>
      </List>

      {/* Right List */}
      <List sx={{ display: "flex", gap: 2, padding: 0 }}>
        <ListItem
          button
          component="a"
          href="www.linkedin.com/in/abraham-gonzalez-22b161b5"
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
