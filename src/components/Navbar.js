import { Toolbar, Button, Typography } from "@mui/material";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <SocialMedia />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Waza
        </Typography>
      </Toolbar>
    </div>
  );
};

export default Navbar;
