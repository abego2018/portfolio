import React from "react";
import List, { ListItemButton } from "@mui/material";

function Header() {
  return (
    <>
      <List>
        <ListItemButton>About</ListItemButton>
        <ListItemButton>Portfolio</ListItemButton>
        <ListItemButton>Contact</ListItemButton>
      </List>
    </>
  );
}

export default Header;
