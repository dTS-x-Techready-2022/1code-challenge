import { Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialMedia = () => {
  return (
    <div>
      <Link display="block" variant="body1" href="#" sx={{ mb: 0.5 }}>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </Link>
    </div>
  );
};

export default SocialMedia;
