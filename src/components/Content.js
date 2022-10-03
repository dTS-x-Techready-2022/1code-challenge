import React from "react";
import logo from "../img/Desktop - 6 2-8.jpg";
import banner from "../img/Desktop - 6 2-7.jpg";
import { Container, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export const Content = () => {
  return (
    <div>
      <Grid
        className="header"
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid xs={2}>
          <img src={logo} alt="" />
        </Grid>
        <Grid
          sx={{
            textAlign: "left",
          }}
          xs={6}
        >
          <div>
            <h1 className="title">Pan Pacific Sonargaon/Dhaka,BD</h1>
            <p className="address">
              <LocationOnIcon /> Bangladesh
            </p>
            <p className="phone">
              <PhoneIcon /> 1234829230
            </p>
          </div>
        </Grid>
        <Grid xs={4}>
          <h2>4,5/5</h2>
        </Grid>
      </Grid>
      <Grid spacing={0}>
        <Grid xs={12}>
          {" "}
          <img src={banner} alt="banner" />
        </Grid>
      </Grid>
    </div>
  );
};
