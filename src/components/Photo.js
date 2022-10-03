import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../values/colors";

import img1 from "../assets/images/photos-1.png";
import img2 from "../assets/images/photos-2.png";
import img3 from "../assets/images/photos-3.png";
import img4 from "../assets/images/photos-4.png";
import img5 from "../assets/images/photos-5.png";

export default function Photo() {
  return (
    <Container>
      <Grid container item sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: COLORS.primaryFont }}
        >
          Photos
        </Typography>

        <Grid container columnSpacing={2} sx={{ my: 2 }}>
          <Grid item xs={6}>
            <img src={img1} alt="photos1" width={"100%"} height={"100%"} />
          </Grid>

          <Grid container item xs={6} rowSpacing={1}>
            <Grid container item columnSpacing={2}>
              <Grid item xs={6}>
                <img src={img2} alt="photos2" width={"100%"} />
              </Grid>
              <Grid item xs={6}>
                <img src={img3} alt="photos3" width={"100%"} />
              </Grid>
            </Grid>
            <Grid container item columnSpacing={2}>
              <Grid item xs={6}>
                <img src={img4} alt="photos5" width={"100%"} />
              </Grid>
              <Grid item xs={6}>
                <img src={img5} alt="photos5" width={"100%"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
