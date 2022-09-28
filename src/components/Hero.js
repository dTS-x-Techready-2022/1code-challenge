import { Container, Rating, Typography } from '@mui/material';
import React from 'react';
import Coca from '../assets/coca.png';
import Banner from '../assets/banner.png';

export default function Hero() {
  return (
    <Container>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Coca} alt="logo" style={{ height: '100px', width: '100px' }} />
          <ul style={{ listStyle: 'none' }}>
            <li>
              <h2>Pan Pacific Sonargaon/Dahaka.BD</h2>
            </li>
            <li>
              <span>107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh</span>
            </li>
            <li>
              <span>Panpacific.Com:550 208-0088</span>
            </li>
          </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Typography component="legend" variant="h5">
                4.5/5
              </Typography>
            </li>
            <li>
              <Rating name="read-only" value={4.5} precision={0.5} readOnly />
            </li>
          </ul>
        </div>
      </Container>
      <Container>
        <img src={Banner} alt="banner" />
      </Container>
    </Container>
  );
}
