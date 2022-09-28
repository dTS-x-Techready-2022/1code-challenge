import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container, Divider, Grid, Typography } from '@mui/material';

export default function Navbar() {
   return (
      <>
         <Container>
            <Grid container py={4} style={{ display: 'flex', alignItems: 'center' }}>
               <Grid item md={4} xs={12} style={{ textAlign: 'left', }}>
                  <InstagramIcon />
                  &nbsp;&nbsp;&nbsp;
                  <TwitterIcon />
                  &nbsp;&nbsp;&nbsp;
                  <FacebookIcon />
               </Grid>
               <Grid item md={4} xs={12} style={{}}>
                  <img src="logo.JPG" style={{ width: '100px' }} />
               </Grid>
               <Grid item md={4} xs={12} style={{ textAlign: 'right' }}>
                  <Typography mt={5} mb={2} variant="h5" >708-508-4500</Typography>
               </Grid>
            </Grid>
         </Container>

         <Divider />
      </>
   )
}
