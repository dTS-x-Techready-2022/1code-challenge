import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook, Twitter } from '@mui/icons-material';

import logo from '../assets/logo.png';

export const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" style={{  backgroundColor: '#faf9f5', color: 'grey' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <InstagramIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Twitter sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Facebook sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} centered>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
              <img src={logo} />
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '12px',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              708-508-4500
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
