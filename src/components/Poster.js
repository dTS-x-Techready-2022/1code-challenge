import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import poster from "../assets/images/Poster.png";
import { COLORS } from "../values/colors";

export default function Poster() {
  return (
    <Container>
      <Card sx={{ position: "relative", mt: 8 }}>
        <CardMedia
          component="img"
          height="200"
          image={poster}
          sx={{ position: "relative" }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            top: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
            Want to ask something, Just Call!
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ backgroundColor: "white", color: COLORS.primaryFont, p: 2 }}
          >
            Hot line: 007-005-3009
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
