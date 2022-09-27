import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Header = () => {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </Grid>
          <Grid item xs={4}>
            Waze
          </Grid>
          <Grid item xs={4}>
            708-508-4500
          </Grid>
        </Grid>
        <Divider />
      </Box>
    );
}

export default Header;