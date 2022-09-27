import logo from './logo.svg';
import './App.css';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PhoneIcon from '@mui/icons-material/Phone';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessibleIcon from '@mui/icons-material/Accessible';

function App() {
   return (
      <div className="App" style={{ backgroundColor: '#fbf9f6' }}>

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

         <Container>
            <Grid container my={4} style={{ display: 'flex', alignItems: 'center' }}>

               <Grid item md={1} xs={12} style={{ textAlign: 'left', }}>
                  <img src="logo2.JPG" style={{ width: '80px' }} />
               </Grid>

               <Grid item md={6} xs={12} style={{ textAlign: 'left', }}>
                  <Typography mb={2} variant="h4" >Pan Pacific Sonargaon/ Dhaka, BD</Typography>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                     <PinDropIcon />107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                     <PhoneIcon />Panpacific.Com: 550 208 0088
                  </span>
               </Grid>

               <Grid item md={5} xs={12} style={{ textAlign: 'right' }}>
                  <img src="rate.JPG" style={{ width: '100px' }} />
               </Grid>

               <Grid item xs={12} mt={5} mb={3}>
                  <img src="hero.png" style={{ width: '100%' }} />
               </Grid>

               <Grid item xs={12} my={2} style={{ textAlign: 'left', }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                     <Typography variant="h7" mr={4} style={{ color: 'green' }}>Hotel Overview</Typography>
                     <Typography variant="h7" mr={4}>Service</Typography>
                     <Typography variant="h7" mr={4}>Photo</Typography>
                     <Typography variant="h7" mr={4}>Rating</Typography>
                     <Typography variant="h7" mr={4}>About</Typography>
                  </span>
               </Grid>

            </Grid>
         </Container>

         <Divider />

         <Container>
            <Grid container py={4} style={{ display: 'flex', alignItems: 'center' }}>
               <Grid item md="8" my={2} xs={12} style={{ textAlign: 'left', }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Room Description</Typography>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro quidem minima nam magni deleniti, veniam similique praesentium itaque ut, ducimus illum iure rem repellendus corrupti maiores dolore dicta. Ad?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro quidem minima nam magni deleniti, veniam similique praesentium itaque ut, ducimus illum iure rem repellendus corrupti maiores dolore dicta. Ad?
                  </p>
               </Grid>

               <Grid item md="8" my={2} xs={12} style={{ textAlign: 'left', }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Services</Typography>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
               </Grid>

               <Grid item md="8" my={2} xs={12} style={{ textAlign: 'left', }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Room Services</Typography>
                  <Grid item md="4" my={2} xs={12} style={{ textAlign: 'left', }}>
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AcUnitIcon />air cooling
                     </span>
                     <br />
                     <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AccessibleIcon />smart ironing
                     </span>
                  </Grid>
               </Grid>

            </Grid>
         </Container>
      </div >
   );
}

export default App;
