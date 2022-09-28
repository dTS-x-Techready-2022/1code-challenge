import { Container, Divider } from '@mui/material';
import React from 'react';

export default function Navbar() {
  return (
    <Container>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          <li style={{ marginRight: '3rem' }}>Hotel Overview</li>
          <li style={{ marginRight: '3rem' }}>Service</li>
          <li style={{ marginRight: '3rem' }}>Photo</li>
          <li style={{ marginRight: '3rem' }}>Rating</li>
          <li>About</li>
        </ul>
      </nav>
      <Divider />
    </Container>
  );
}
