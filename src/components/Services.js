import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material';

export default function Services() {
   return (
      <>
         <Container>
            <Grid item md="8" py={3} xs={12} style={{ textAlign: 'left', }}>
               <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Services</Typography>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </p>
            </Grid>
         </Container>
      </>
   )
}
