
import React from 'react';
import { Divider,Typography,Grid,Container } from '@mui/material';

// Icon
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = (props) => {
  return (
    <Container fixed style={{marginTop:'1rem'}}>
        <Grid container spacing={3}>
            <Grid item xs={2}>
                <Typography variant='body1' align='left'>
                    <InstagramIcon color="disabled" />
                    <TwitterIcon color="disabled" />
                    <FacebookIcon color="disabled" />
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='h4' align='center'>
                    Waza
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='body1' align='right'>
                    758-508-4500
                </Typography>
            </Grid>
        </Grid>
        <Divider />
    </Container>
  );
};

export default Navbar;