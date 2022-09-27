
import React from 'react';
import {Container} from '@mui/material';

// img
import BannerImage from "../img/banner.png";

const Banner = (props) => {
  return (
    <Container fixed style={{marginTop:'1rem'}}>
        <img src={BannerImage} width="100%"/>
    </Container>
  );
};

export default Banner;