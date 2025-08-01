// AboutMeNavBox.jsx
import React from "react";
import { List, ListItemButton, Box, Typography } from "@mui/material";

function AboutMeNavBox({ selectedKey, setSelectedKey, items }) {
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

      <Box mt={1} p={2} bgcolor="#f0f0f0" borderRadius={2} minHeight="120px">
        {activeItem ? (
          <>
            <Typography variant="h6" gutterBottom>
              {activeItem.key.charAt(0).toUpperCase() + activeItem.key.slice(1)}
            </Typography>
            <Typography>{activeItem.description}</Typography>
          </>
        ) : (
          <Typography color="text.secondary">
            Select a section to see more.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default AboutMeNavBox;
