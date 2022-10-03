import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  TextField,
  Typography,
} from "@mui/material";
import { COLORS } from "../values/colors";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const listMenu = ["Our Story", "Photos", "Review", "News", "Contact"];

  return (
    <Box sx={{ backgroundColor: COLORS.bgSecondary, mt: 8 }}>
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            alignItems: "center",
            py: 4,
          }}
        >
          <Grid item xs textAlign="left">
            <Grid container spacing={4}>
              <Grid item textAlign="center">
                <img src={logo} alt="logo" width={80} />
              </Grid>

              <Grid item>
                <Typography variant="h6" sx={{ color: COLORS.secondayFont }}>
                  009-008-0045 <br /> www.wazabooking.com
                </Typography>
              </Grid>

              <Grid item textAlign="left">
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
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{ color: COLORS.primaryFont, textAlign: "center" }}
            >
              Dont want to miss
              <br />
              Travel & Tour offers
            </Typography>

            <Grid
              container
              spacing={2}
              sx={{ my: 1, justifyContent: "center" }}
            >
              <Grid item xs={6}>
                <TextField id="email" label="Email" type="email" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: COLORS.primary,
                    px: 8,
                    py: 2,
                    borderRadius: "none",
                  }}
                >
                  Signup
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs sx={{ marginLeft: 8 }}>
            <Typography variant="h6" sx={{ color: COLORS.primaryFont }}>
              Smart Booking
            </Typography>
            <List>
              {listMenu.map((menus, i) => (
                <Typography
                  variant="body1"
                  sx={{ color: COLORS.secondayFont }}
                  key={i}
                >
                  {menus}
                </Typography>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
