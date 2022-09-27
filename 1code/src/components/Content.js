import Container from '@mui/material/Container';
import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Divider } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import StarIcon from '@mui/icons-material/Star';
import Navbar from './Navbar';

const Content = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Pan Pasific Sonargaon / Dhaka, BD" secondary={
                                <React.Fragment>
                                    <div><LocationOnIcon fontSize='12'/> Jl. Nazrul Islam, No.22, Perumahan Z, Indonesia</div>
                                    <div><PhoneIcon fontSize='12'/> Panpasific Number Phone, 021-222933</div>
                                </React.Fragment>
                            } />
                        </ListItem>
                    </Grid>
                    <Grid item xs={4}>
                        4.5/5
                        <Box>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <img width={"100%"} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            <Navbar />
        </Container>
    );
}

export default Content;