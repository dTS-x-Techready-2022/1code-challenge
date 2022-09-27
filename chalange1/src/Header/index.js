import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";

export const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "2rem",
        }}
      >
        <div style={{ margin: "20px" }}>
          <InstagramIcon />
          <TwitterIcon />
          <Facebook />
        </div>
        <div>
          <div>Booking</div>
          <div>Waza</div>
        </div>
        <div>708-508-4500</div>
      </div>
      <hr />
    </>
  );
};
