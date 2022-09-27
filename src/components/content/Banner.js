import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import logo from "../../assets/logo.png";
import { display } from "@mui/system";

const Banner = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <img src={logo} alt="logo" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: "2rem",
                fontWeight: "500",
              }}
            >
              Pan Pacific Sonargaon/Dhaka,BD
            </Typography>
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: "1rem",
                fontWeight: "400",
                color: 'rgba(0,0,0, .6)'
              }}
            >
              
              107 Kazi Nazrul Islam Avenue, Dzaka 1215, Bangladesh
            </Typography>
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: "1rem",
                fontWeight: "400",
                color: 'rgba(0,0,0, .6)'
              }}
            >
              
              107 Kazi Nazrul Islam Avenue, Dzaka 1215, Bangladesh
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Banner;
