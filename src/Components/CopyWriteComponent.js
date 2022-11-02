import React from "react";
import { Box } from "@mui/material";
import payment from "../assets/Images/Payment.png";
import { ReactComponent as Facebook } from "../assets/Images/Svg/facebook.svg";
import { ReactComponent as Instagram } from "../assets/Images/Svg/instagram.svg";
import { ReactComponent as Twitter } from "../assets/Images/Svg/twitter.svg";
import { ReactComponent as LinkedIn } from "../assets/Images/Svg/linkedIn.svg";

function CopyWriteComponent() {
  return (
    <Box
      className="nav_bar"
      sx={{
        paddingLeft: "60px",
        paddingRight: "60px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: "30px",
        marginBottom: "30px",
        alignItems: "center",
      }}
    >
      <Box sx={{ paddingBottom: "30px" }}>
        <p>© 2022, All rights reserved</p>
      </Box>
      <Box sx={{ paddingBottom: "30px" }}>
        <img src={payment} alt="product" />
      </Box>
      <Box sx={{ display: "flex", paddingBottom: "30px" }}>
        <Box
          sx={{
            background: "#3BB77E",
            marginRight: "20px",
            borderRadius: "50%",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Facebook />
        </Box>
        <Box
          sx={{
            background: "#3BB77E",
            marginRight: "20px",
            borderRadius: "50%",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <LinkedIn />
        </Box>
        <Box
          sx={{
            background: "#3BB77E",
            marginRight: "20px",
            borderRadius: "50%",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Instagram />
        </Box>
        <Box
          sx={{
            background: "#3BB77E",
            marginRight: "20px",
            borderRadius: "50%",
            paddingLeft: "12px",
            paddingRight: "12px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Twitter />
        </Box>
      </Box>
    </Box>
  );
}

export default CopyWriteComponent;
