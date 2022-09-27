import React, {Component} from 'react';
import {Box, Container} from "@mui/material";
import hotel from '../hotel.png';
import panpacific from '../panpacific.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';

class Overview extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>

                        <img src={panpacific} alt="panpacific"/>
                        <Box sx={{
                            marginLeft: 2,
                            textAlign: "left"
                        }}>
                            <h2 sx={{
                                margin: 0
                            }}>Pan Pacific Sonargaon/ Dhaka,BD</h2>
                            <div>
                                <LocationOnIcon></LocationOnIcon> 107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh
                            </div>
                            <div>
                                <LocationOnIcon></LocationOnIcon> Panpacific.Com: 550-208-0088
                            </div>
                        </Box>
                    </Box>
                    <img src={hotel} alt="hotel"/>
                </Container>
            </div>
        );
    }
}

export default Overview;