import React from 'react'
import { Container, Divider, Grid, Typography } from '@mui/material';

export default function Photos() {
   return (
      <>
         <Container>
            <Typography variant="h5" py={2} sx={{ fontWeight: 'bold' }} style={{ textAlign: 'left', }}>Photos</Typography>
            <Grid container={'true'}>
               <Grid item={'true'} md="6" xs={12} style={{ textAlign: 'left', }}>
                  <img src="photo1.png" style={{ width: '100%' }} />
               </Grid>
               <Grid item={'true'} md="6" px={1} xs={12} style={{ textAlign: 'left', }}>
                  <Grid container={'true'} item >
                     <Grid item={'true'} md="6" px={2} pb={2} xs={12}>
                        <img src="photo2.png" style={{ width: '100%' }} />
                     </Grid>
                     <Grid item={'true'} md="6" px={2} pb={2} xs={12}>
                        <img src="photo3.png" style={{ width: '100%' }} />
                     </Grid>
                     <Grid item={'true'} md="6" px={2} pb={2} xs={12}>
                        <img src="photo4.png" style={{ width: '100%' }} />
                     </Grid>
                     <Grid item={'true'} md="6" px={2} pb={2} xs={12}>
                        <img src="photo1.png" style={{ width: '100%' }} />
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Container>
      </>
   )
}
