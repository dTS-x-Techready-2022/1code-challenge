import React from "react";
import {
  Box,
  Button,
  Grid,
  ListItemText,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { COLORS } from "../values/colors";

import cover from "../assets/images/cover.png";
import logoPacific from "../assets/images/logo-pan pacific.png";
import { LocalPhone, LocationOn } from "@mui/icons-material";

export default function Cover() {
  const pages = ["Hotel Review", "Service", "Photo", "Rating", "About"];

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs textAlign="left">
              <img src={logoPacific} alt="logo" height={120} />
            </Grid>
            <Grid item xs={8} textAlign="left">
              <Box>
                <Stack>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ color: COLORS.primaryFont }}
                  >
                    Pan Pacific Sonargon/ Dhaka,BD
                  </Typography>
                  <Grid
                    container
                    item
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: COLORS.box,
                        color: COLORS.secondayFont,
                        borderRadius: "none",
                        marginRight: 1,
                        padding: 0.5,
                        height: "24px",
                        width: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOn sx={{ height: "18px", width: "18px" }} />
                    </Box>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ color: COLORS.secondayFont }}
                    >
                      107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh
                    </Typography>
                  </Grid>
                  <Grid container item sx={{ alignItems: "center" }}>
                    <Box
                      sx={{
                        backgroundColor: COLORS.box,
                        color: COLORS.secondayFont,
                        borderRadius: "none",
                        marginRight: 1,
                        padding: 0.5,
                        height: "24px",
                        width: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocalPhone sx={{ height: "18px", width: "18px" }} />
                    </Box>
                    <Typography
                      variant="body1"
                      gutterBottom
                      sx={{ color: COLORS.secondayFont }}
                    >
                      Panpacific.com: 550-208-0088
                    </Typography>
                  </Grid>
                </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs
              textAlign="right"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
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
              </Box>
            </Grid>
          </Grid>
          <img src={cover} alt="logo" width={"100%"} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  p: 0,
                  my: 2,
                  mr: 2,
                  color: COLORS.secondayFont,
                  display: "block",
                  textTransform: "none",
                }}
              >
                <Typography variant="body1">{page}</Typography>
              </Button>
            ))}
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
