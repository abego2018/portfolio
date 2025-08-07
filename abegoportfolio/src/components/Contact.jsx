import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Link,
} from "@mui/material";
import React, { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { name, email, message });
    // Add your form submission logic here
  };

  return (
    <Container sx={{ py: 4, maxWidth: 800 }}>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Contact Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "row", // force side-by-side layout
          flexWrap: "nowrap", // prevent stacking on small screens
        }}
      >
        {/* Form Box */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="subtitle1">Contact Form</Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Short Message"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "var(--crt-blue)",
              borderRadius: "25px",
              color: "#333333",
            }}
          >
            Submit
          </Button>
        </Box>
        {/* Info Box */}
        {/*<Box
          sx={{
            flex: 1,
            p: 2,
            border: "1px solid grey",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          TODO Create a contact card that will match the rest of the site
          <Typography variant="subtitle1">Abraham Gonzalez</Typography>
          <Typography>Boise ID 83709</Typography>
          <Typography>Email: abraham.gm08@gmail.com</Typography>
          <Typography>Jr. Full-stack Developer</Typography>
        </Box> */}
        <Card
          sx={{
            flex: 1,
            p: 2,
            border: "1px solid grey",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardHeader
            title="Abraham Gonzalez"
            subheader="Jr Full-Stack Developer"
          />
          <CardContent>
            <Typography variant="body2">
              Email: abraham.gm08@gmail.com
            </Typography>
            <Typography variant="body2">Phone: 424-381-8795</Typography>
            <Typography variant="body2">
              GitHub:{" "}
              <Link
                href="https://github.com/abego2018"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/abego2018
              </Link>
            </Typography>
            <Typography variant="body2">
              LinkedIn:
              <Link
                href="https://github.com/abego2018"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/abraham-gonzalez-22b161b5
              </Link>
            </Typography>
            <Typography></Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Contact;
