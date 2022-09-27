import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import head from "../../assets/head.png";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40px",
        backgroundColor: "#FAF9F5",
        borderBottom: "1px solid #eaeaea",
        padding: "20px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "120px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </Box>
          <img src={head} alt="head" width={100} />
          <Typography variant="h6" component="h2" sx={{
            fontFamily: 'serif',
            fontSize: '1.5rem'
          }}>
            708-508-4500
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
