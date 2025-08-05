import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  ListItem,
} from "@mui/material";
import react from "react";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Portfolio() {
  return (
    <Container>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="subtitle2">Portfolio</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>PortfolioPage</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>EcommercePage</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>OnlineArtGallery</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Other Project</Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Portfolio;
