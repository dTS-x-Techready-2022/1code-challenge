import React from "react";
import {
  Container,
  Grid,
  ListItemText,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowBack, ArrowForward, Search } from "@mui/icons-material";
import { COLORS } from "../values/colors";
import reviewImage1 from "../assets/images/review.png";
import { Box } from "@mui/system";

export default function Reviews() {
  const val = [
    {
      value: "1",
      label: "A",
    },
    {
      value: "2",
      label: "B",
    },
    {
      value: "3",
      label: "C",
    },
  ];
  return (
    <Container>
      <Grid container rowSpacing={4} sx={{ mt: 8 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: COLORS.secondayFont }}
        >
          Showing 2.5k reviews
        </Typography>

        <Grid container item rowSpacing={2}>
          <Grid container item xs={8} columnSpacing={2}>
            <Grid item xs={4}>
              <TextField
                id="name"
                label="Find Review"
                type="text"
                fullWidth
                InputProps={{
                  endAdornment: <Search position="start" />,
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField select id="type" label="Type" type="text" fullWidth>
                {val.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={4}>
              <TextField
                select
                id="type"
                label="Timeline"
                type="text"
                fullWidth
              >
                {val.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Grid container item xs={12} columnSpacing={2} sx={{ my: 2 }}>
            <Grid item xs={4}>
              <img alt="review" src={reviewImage1} width="100%" />
            </Grid>
            <Grid item xs={7} sx={{ alignSelf: "flex-end" }}>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{ color: COLORS.primaryFont }}
                  >
                    Sulaiman Mishbahi
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    gutterBottom
                    sx={{ color: COLORS.secondayFont }}
                  >
                    Camp Traveller
                  </Typography>
                }
              />
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{ color: COLORS.primaryFont }}
                  >
                    This was on the top of the list of best stays/experiences
                    ever.
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    gutterBottom
                    sx={{ color: COLORS.secondayFont }}
                  >
                    The rooms were clean. very comfortable, and the staff was
                    amazing. They went over and beyond to help make our stay
                    enjoyable. I highly recommend this hotel for anyone visiting
                    downtown.
                  </Typography>
                }
                sx={{ mt: 2 }}
              />
            </Grid>

            <Grid
              container
              item
              xs={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                width={"32px"}
                height={"32px"}
                sx={{
                  backgroundColor: COLORS.bgSecondary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowBack
                  sx={{
                    color: COLORS.secondayFont,
                    width: "18px",
                    height: "18px",
                  }}
                />
              </Box>
              <Box
                width={"32px"}
                height={"32px"}
                sx={{
                  backgroundColor: COLORS.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowForward
                  sx={{
                    color: "white",
                    width: "18px",
                    height: "18px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
