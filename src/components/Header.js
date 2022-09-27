import React, {Component} from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Divider, Container, Box} from "@mui/material";
import waza from '../waza.png';


class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: "center"
                    }}>
                        <div>
                            <InstagramIcon/>
                            <TwitterIcon/>
                            <FacebookIcon/>
                        </div>
                        <div>
                            <img src={waza} alt="waza"/>
                        </div>
                        <div>
                            708-508-4500
                        </div>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default Header;