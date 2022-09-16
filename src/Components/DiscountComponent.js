import React from "react";
import { Box, Button } from "@mui/material";
import { ReactComponent as RightArrow } from "../Images/Svg/li_arrow-right.svg";
import image from "../Images/Offer1-img.png";

function DiscountComponent() {
  return (
    <Box
      sx={{
        background: "#FFF5E1D9",
        width: "500px",
        display: "flex",
      }}
    >
      <Box>
        <Button sx={{ background: "#FFD480", color: "white" }}>
          Free delivery
        </Button>
        <p>Free delivery over $50</p>
        <p>Shop $50 product and get free delivery anywhre.</p>
        <Button sx={{ background: "#3BB77E" }}>
          Shop Now {<RightArrow />}
        </Button>
      </Box>
      <Box>
        <img src={image} />
      </Box>
    </Box>
  );
}

export default DiscountComponent;
