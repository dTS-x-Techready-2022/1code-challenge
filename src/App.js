import logo from './logo.svg';
import './App.css';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Submenu from './components/Submenu';
import RoomDesc from './components/RoomDesc';
import RoomServices from './components/RoomServices';
import Services from './components/Services';
import HotelServices from './components/HotelServices';
import Photos from './components/Photos';
import Ratings from './components/Ratings';

function App() {
   return (
      <div className="App" style={{ backgroundColor: '#fbf9f6' }}>

         <Navbar />

         <Hero />

         <Submenu />

         <RoomDesc />

         <Services />

         <RoomServices />

         <HotelServices />

         <Photos />

      </div >
   );
}

export default App;
