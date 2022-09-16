import React from "react";
import { Box } from "@mui/system";
import HeroBg from "../../Images/hero-bg.png";
import HeroImg from "../../Images/Hreo-img.png";

function HeroLogopage() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <img height="500px" width="100%" src={HeroBg} /> */}
      <Box>
        <h1>
          Don’t miss our daily <span>amazing deals</span>.
        </h1>
        <p>Save up to 60% off on your first order</p>
      </Box>
      <Box sx={{}}>
        <img src={HeroImg} />
      </Box>
    </Box>
  );
}

export default HeroLogopage;
