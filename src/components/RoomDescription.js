import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { COLORS } from "../values/colors";

export default function RoomDescription() {
  return (
    <Container>
      <Grid container item xs={8}>
        <Box sx={{ mt: 8, display: "row" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: COLORS.primaryFont }}
          >
            Room Description
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: COLORS.secondayFont }}
          >
            Enjoy our elegant 40 m<sup>2</sup> guest rooms. desgner in warm
            beige tones and tailored to the needs of private and business
            travelers alike. All rooms have a large marble bathroom, a double
            bed, air conditioning, an additional work area with free internet
            access and a walk in closet. Our superior rooms impress with a
            wonderful view of the city and the adjacent park.
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
