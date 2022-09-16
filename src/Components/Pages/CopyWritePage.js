import React from "react";
import { Box } from "@mui/material";
import payment from "../../Images/Payment.png";
import { ReactComponent as Facebook } from "../../Images/Svg/facebook.svg";
import { ReactComponent as Instagram } from "../../Images/Svg/instagram.svg";
import { ReactComponent as Twitter } from "../../Images/Svg/twitter.svg";
import { ReactComponent as LinkedIn } from "../../Images/Svg/linkedIn.svg";

function CopyWritePage() {
  return (
    <Box>
      <Box>
        <p>© 2022, All rights reserved</p>
      </Box>
      <Box>
        <img src={payment} />
      </Box>
      <Box sx={{ background: "red" }}>
        <Facebook />
        <LinkedIn />
        <Instagram />
        <Twitter />
      </Box>
    </Box>
  );
}

export default CopyWritePage;
