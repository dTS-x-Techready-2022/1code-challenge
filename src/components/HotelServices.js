import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';


export default function HotelServices() {
   return (
      <>
         <Container>
            <Grid item md="8" py={3} xs={12} style={{ textAlign: 'left', }}>
               <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Hotel Services</Typography>
               <Grid container={'true'} item md="8" sx={12}>
                  <Grid item md="3" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Personal Gym
                     </span>
                     <br />
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Buffet
                     </span>
                  </Grid>
                  <Grid item md="3" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Wellness & Spa
                     </span>
                     <br />
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Airport Pickup
                     </span>
                  </Grid>
                  <Grid item md="3" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Natural Coffee
                     </span>
                  </Grid>
                  <Grid item md="3" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Smart Rooms
                     </span>
                  </Grid>
               </Grid>
            </Grid>
         </Container>
      </>
   )
}
