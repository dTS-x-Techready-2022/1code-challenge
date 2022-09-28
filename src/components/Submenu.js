import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material';

export default function Submenu() {
   return (
      <>
         <Container>
            <Grid item xs={12} mb={4} style={{ textAlign: 'left', }}>
               <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h7" mr={4} style={{ color: 'green' }}>Hotel Overview</Typography>
                  <Typography variant="h7" mr={4}>Service</Typography>
                  <Typography variant="h7" mr={4}>Photo</Typography>
                  <Typography variant="h7" mr={4}>Rating</Typography>
                  <Typography variant="h7" mr={4}>About</Typography>
               </span>
            </Grid>
         </Container>
         <Divider />
      </>
   )
}
