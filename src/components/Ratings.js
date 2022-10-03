import React from "react";
import {
  Container,
  Divider,
  Grid,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { COLORS } from "../values/colors";
import maps from "../assets/images/maps.png";

export default function Ratings() {
  const sliderPoint = [
    {
      title: "Hygienic",
      point: 3.5,
    },
    {
      title: "Quality",
      point: 4.1,
    },
    {
      title: "Address",
      point: 4.3,
    },
    {
      title: "Establishment",
      point: 4.8,
    },
    {
      title: "Cost Value",
      point: 4.7,
    },
    {
      title: "Rooms",
      point: 4.8,
    },
  ];

  return (
    <Container>
      <Grid container sx={{ mt: 8 }}>
        <Grid container item direction={"column"} xs={8} columnSpacing={2}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: COLORS.primaryFont }}
          >
            Reviews
          </Typography>

          <Grid
            item
            sx={{
              display: "flex",
              marginBottom: 2,
            }}
          >
            <Grid
              item
              xs={3}
              sx={{
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              <ListItemText
                sx={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "center",
                }}
                primary={<Typography variant="h4">4.5</Typography>}
                secondary={<Typography variant="subtitle2">/5</Typography>}
              />
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: COLORS.secondayFont }}
              >
                From 2.5k reviews
              </Typography>
            </Grid>

            <Grid container item xs={9} spacing={4}>
              {sliderPoint.map((d, i) => (
                <>
                  <Grid container item xs={6} columnSpacing={2} key={i}>
                    <Grid item xs={9}>
                      <Typography variant="body1" fontWeight={500}>
                        {d.title}
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          height: "8px",
                          backgroundColor: COLORS.bgSecondary,
                          mt: 1,
                        }}
                      >
                        <Box
                          width={(d.point / 5) * 100 + "%"}
                          height={"100%"}
                          sx={{ backgroundColor: COLORS.primary }}
                        ></Box>
                      </Box>
                    </Grid>
                    <Grid container item xs={3}>
                      <ListItemText
                        sx={{
                          display: "flex",
                          alignItems: "end",
                          justifyContent: "center",
                        }}
                        primary={
                          <Typography variant="body1">{d.point}</Typography>
                        }
                        secondary={
                          <Typography variant="caption">/5</Typography>
                        }
                      />
                    </Grid>
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>

          <Divider />
        </Grid>

        {/* maps */}
        <Grid item xs={4} sx={{ p: 2 }}>
          <img alt="maps" src={maps} width="100%" height="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
