import React from "react";

import Header from "../components/Header";
import { COLORS } from "../values/colors";
import { Box, Divider } from "@mui/material";
import Cover from "../components/Cover";
import RoomDescription from "../components/RoomDescription";
import Services from "../components/Services";
import RoomServices from "../components/RoomServices";
import HotelServices from "../components/HotelServices";
import Photo from "../components/Photo";
import Ratings from "../components/Ratings";
import Reviews from "../components/Reviews";
import FormContact from "../components/FormContact";
import Poster from "../components/Poster";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: COLORS.bgPrimary }}>
      <Header />
      <Divider />
      <Cover />
      <Divider />
      <RoomDescription />
      <Services />
      <RoomServices />
      <HotelServices />
      <Photo />
      <Ratings />
      <Reviews />
      <Divider />
      <FormContact />
      <Poster />
      <Footer/>
    </Box>
  );
}
