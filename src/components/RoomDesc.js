import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material';

export default function RoomDesc() {
   return (
      <>
         <Container>
            <Grid container mt={3} py={3} style={{ display: 'flex', alignItems: 'center' }}>
               <Grid item md="8" xs={12} style={{ textAlign: 'left', }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Room Description</Typography>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro quidem minima nam magni deleniti, veniam similique praesentium itaque ut, ducimus illum iure rem repellendus corrupti maiores dolore dicta. Ad?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro quidem minima nam magni deleniti, veniam similique praesentium itaque ut, ducimus illum iure rem repellendus corrupti maiores dolore dicta. Ad?
                  </p>
               </Grid>
            </Grid>
         </Container>
      </>
   )
}
