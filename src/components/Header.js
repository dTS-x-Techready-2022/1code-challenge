import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import { COLORS } from "../values/colors";
import { Container, IconButton, Typography } from "@mui/material";

import logo from "../assets/images/logo.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Header() {
  return (
    <Container>
      <Box sx={{ marginTop: 2, height: "60px" }}>
        <Grid
          container
          spacing={3}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid item xs textAlign="left">
            <IconButton sx={{ color: COLORS.secondayFont }}>
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: COLORS.secondayFont }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: COLORS.secondayFont }}>
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <img src={logo} alt="logo" height={40} />
          </Grid>
          <Grid item xs textAlign="right">
            <Typography variant="h6" sx={{ color: COLORS.secondayFont }}>
              708-508-4500
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
