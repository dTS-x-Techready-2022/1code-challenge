import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { COLORS } from "../values/colors";

export default function Services() {
  return (
    <Container>
      <Grid container item xs={8}>
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: COLORS.primaryFont }}
          >
            Services
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: COLORS.secondayFont }}
          >
            Wheter you are travelling for business or pleasure
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
