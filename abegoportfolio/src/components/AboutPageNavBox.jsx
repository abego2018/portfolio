// AboutMeNavBox.jsx
import React from "react";
import { List, ListItemButton, Box, Typography } from "@mui/material";

function AboutPageNavBox({ selectedKey, setSelectedKey, items }) {
  const activeItem = items.find((item) => item.key === selectedKey);

  return (
    <Box>
      <List sx={{ display: "flex", gap: 2, padding: 0 }}>
        {items.map(({ key }) => (
          <ListItemButton
            key={key}
            onClick={() => setSelectedKey(key)}
            selected={selectedKey === key}
            sx={{ borderRadius: 2 }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default AboutPageNavBox;
