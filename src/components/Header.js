
import React from 'react';
import {Container, Grid, Typography,Rating,Stack} from '@mui/material';

// Icon
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

// img
import Logo from "../img/logo.png";



const Header = (props) => {
  return (
    <Container fixed style={{marginTop:'1rem'}}>
          <Grid container spacing={3}>
            <Grid item xs={1}>
                <Typography variant='body1' align='center'>
                    <img src={Logo} width="80"/>
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <Typography variant='h5' align='left'>
                    Pan Pasific Sonargaon /Dhaka,BD
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <RoomIcon color="disabled" align="center"/>
                    </Grid>
                    <Grid item xs={11}>
                    <Typography  variant='body1' align="left">107 Kazi Nazrul Islam Avanue, Dhaka 1215, Bangladesh </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <LocalPhoneIcon color="disabled" align="center"/>
                    </Grid>
                    <Grid item xs={11}>
                    <Typography  variant='body1' align="left">Panpasific.Com:550-208-008</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} align="center">
                <Typography  variant='h4' align="center">4.5 / 5</Typography>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />         
                </Grid>
          </Grid>
    </Container>
  );
};

export default Header;