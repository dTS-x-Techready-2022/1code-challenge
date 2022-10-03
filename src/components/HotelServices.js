import React from "react";
import { COLORS } from "../values/colors";
import {
  Coffee,
  DevicesOther,
  FitnessCenter,
  LocalAirport,
  LocalDining,
  Spa,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function HotelServices() {
  return (
    <Container>
      <Grid container item xs={8} sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: COLORS.primaryFont }}
        >
          Hotel Services
        </Typography>

        <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} sx={{ my: 2 }}>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FitnessCenter sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Personal GYM
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Spa sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Wellness & Spa
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Coffee sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Natural Coffee
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <DevicesOther sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Smart Rooms
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} sx={{ my: 2 }}>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalDining sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Buffet
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LocalAirport sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Airport Pickup
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
