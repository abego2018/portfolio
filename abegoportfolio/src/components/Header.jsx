import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  Typography,
  Stack,
  Box,
} from "@mui/material";

function Header() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {/* Left List */}
      <List sx={{ display: "flex", gap: 2, padding: 0 }}>
        <Typography variant="h6" sx={{ mr: 2, alignSelf: "center" }}>
          Logo
        </Typography>
        <ListItem sx={{ width: "auto", padding: 0 }}>About</ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>Portfolio</ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>Contact</ListItem>
      </List>

      {/* Right List */}
      <List sx={{ display: "flex", gap: 2, padding: 0 }}>
        <ListItem sx={{ width: "auto", padding: 0 }}>Link</ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>Link</ListItem>
        <ListItem sx={{ width: "auto", padding: 0 }}>Link</ListItem>
      </List>
    </Box>
  );
}

export default Header;
