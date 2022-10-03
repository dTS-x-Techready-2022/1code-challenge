import React from "react";
import { Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import waza from "../img/waza.jpg";

export const Navbar = () => {
  return (
    <Grid
      className="navbar"
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item xs={4}>
        <div>
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <img alt="waza" src={waza}></img>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>708-508-4500</div>
      </Grid>
    </Grid>
  );
};
