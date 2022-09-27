import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container, Divider } from '@mui/material';

export default function Navbar() {
  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <InstagramIcon sx={{ marginRight: '5px' }} />
          <TwitterIcon sx={{ marginRight: '5px' }} />
          <FacebookIcon />
        </div>
        <div>
          <h2>Waza</h2>
        </div>
        <div>
          <h4>708.508.4500</h4>
        </div>
      </Container>
      <Divider />
    </>
  );
}
