import React from "react";
import { COLORS } from "../values/colors";
import {
  Air,
  Balcony,
  Bathtub,
  Iron,
  Phone,
  Pool,
  Tv,
  Wifi,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function RoomServices() {
  return (
    <Container>
      <Grid container item xs={8} sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: COLORS.primaryFont }}
        >
          Room Services
        </Typography>

        <Grid container columnSpacing={{ xs: 2, sm: 3, md: 4 }} sx={{ my: 2 }}>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Air sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Air cooling
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
              <Tv sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Smart TV
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
              <Wifi sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Wifi
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
              <Bathtub sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Music Bathub
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
              <Iron sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Smart Ironing
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
              <Balcony sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Garden Balcony
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
              <Phone sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                24/7 Room Service
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
              <Pool sx={{ height: "24px", width: "24px", mr: 1 }} />
              <Typography variant="body1" sx={{ color: COLORS.secondayFont }}>
                Swimming Pool
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
