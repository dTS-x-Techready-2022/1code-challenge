import FacebookIconOutlined from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, Divider, Grid, ThemeProvider, Typography } from '@mui/material';
//gambar
import "@fontsource/playfair-display/400.css"
import "@fontsource/playfair-display/500.css"
import "@fontsource/playfair-display/600.css"
import "@fontsource/playfair-display/700.css"
import navImage from "../assets/images/navImage.png" 
const theme = createTheme();
theme.typography.h3 = {
    fontFamily: 'playfair-display',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  };

const NavBar = () => {
    
    return (
       <>
       <nav className="nav">
            <Grid container>
                <Grid item xs={4} textAlign="right">
                    <div className="sosmed">
                        <InstagramIcon/>
                        <TwitterIcon/>
                        <FacebookIconOutlined/>
                    </div>
                </Grid>
                <Grid className='img' item xs ={4}>
                    <img alt="gambar" src={navImage} height="40px"/>
                </Grid>
                <Grid className='phone' item xs ={4} textAlign="end">
                    <ThemeProvider theme={theme}>
                        <Typography variant="h3">708-508-4500</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
            <Divider/>
       </nav>
       </>
    )
}

export default NavBar