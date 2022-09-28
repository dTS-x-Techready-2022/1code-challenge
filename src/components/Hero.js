import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Hero() {
   return (
      <>
         <Container>
            <Grid container my={4} style={{ display: 'flex', alignItems: 'center' }}>

               <Grid item md={1} xs={12} style={{ textAlign: 'left', }}>
                  <img src="logo2.JPG" style={{ width: '80px' }} />
               </Grid>

               <Grid item md={6} xs={12} style={{ textAlign: 'left', }}>
                  <Typography mb={2} variant="h4" >Pan Pacific Sonargaon/ Dhaka, BD</Typography>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                     <PinDropIcon />&nbsp; 107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                     <PhoneIcon />&nbsp; Panpacific.Com: 550 208 0088
                  </span>
               </Grid>

               <Grid item md={5} xs={12} style={{ textAlign: 'right' }}>
                  <img src="rate.JPG" style={{ width: '100px' }} />
               </Grid>

               <Grid item xs={12} mt={5} mb={3}>
                  <img src="hero.png" style={{ width: '100%' }} />
               </Grid>

            </Grid>
         </Container>
      </>
   )
}
