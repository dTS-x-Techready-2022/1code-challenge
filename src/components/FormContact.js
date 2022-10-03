import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS } from "../values/colors";

export default function FormContact() {
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
      <Grid item xs={8}>
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: COLORS.primaryFont }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: COLORS.secondayFont }}
          >
            We'll take care of your privacy (Email, Contact Information)
          </Typography>
        </Box>

        <Grid container columnSpacing={2} sx={{ my: 4 }}>
          <Grid item xs={4}>
            <TextField id="name" label="Name" type="text" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField id="email" label="Email" type="email" fullWidth />
          </Grid>
        </Grid>

        <Grid container columnSpacing={2} sx={{ my: 4 }}>
          <Grid item xs={4}>
            <TextField
              id="hotelAddress"
              label="Hotel Address"
              type="text"
              fullWidth
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
        </Grid>

        <Grid container item xs={8} sx={{ my: 4 }}>
          <TextField
            id="reviewLabel"
            label="Review Label"
            type="text"
            fullWidth
          />
        </Grid>

        <Grid container item xs={8} sx={{ my: 4 }}>
          <TextField
            id="yourReview"
            label="Your Review"
            type="text"
            fullWidth
            rows={5}
            multiline
          />
        </Grid>

        <Grid container item xs={8} sx={{ my: 4 }}>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: COLORS.secondayFont }}
              >
                Save my informations on this website
              </Typography>
            }
          />
        </Grid>

        <Grid container item xs={8} sx={{ my: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: COLORS.primary,
              px: 8,
              py: 2,
              borderRadius: "none",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
