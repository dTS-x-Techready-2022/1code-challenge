import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

export default function RoomServices() {
   return (
      <>
         <Container>
            <Grid item md="8" py={3} xs={12} style={{ textAlign: 'left', }}>
               <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Room Services</Typography>
               <Grid container={'true'} item md="8" sx={12}>
                  <Grid item md="3" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; air cooling
                     </span>
                     <br />
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; smart ironing
                     </span>
                  </Grid>
                  <Grid item md="3" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Smart TV
                     </span>
                     <br />
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Garden Balcony
                     </span>
                  </Grid>
                  <Grid item md="3" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Wifi
                     </span>
                     <br />
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; 24/7 Room Service
                     </span>
                  </Grid>
                  <Grid item md="3" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Music Bathub
                     </span>
                     <br />
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AppsIcon />&nbsp; Swimming Pool
                     </span>
                  </Grid>
               </Grid>
            </Grid>
         </Container>
      </>
   )
}
