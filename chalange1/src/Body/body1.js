import React from "react";
import Pan from "../assets/Pan.png";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Hotel1 from "../assets/Hotel1.png";

export const Body1 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginTop: "1rem" }}>
            <img src={Pan} />
          </div>
          <div>
            <div style={{}}>
              <h2>Pan Pacific Sonargaon/Dhaka,BD</h2>
            </div>
            <div style={{}}>
              <div>
                <LocationOnTwoToneIcon />
                107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh
              </div>
              <div>
                <LocalPhoneIcon />
                Panpaciffic.Com: 550 208 0088
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>4.5</h2>
          </div>
          <div style={{ paddinggTop: "0" }}>
            <h3>5</h3>
          </div>
          <div>
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={Hotel1} />
      </div>
    </>
  );
};
