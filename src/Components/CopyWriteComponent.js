import React from "react";
import { Box } from "@mui/material";
import payment from "../Images/Payment.png";
import { ReactComponent as Facebook } from "../Images/Svg/facebook.svg";
import { ReactComponent as Instagram } from "../Images/Svg/instagram.svg";
import { ReactComponent as Twitter } from "../Images/Svg/twitter.svg";
import { ReactComponent as LinkedIn } from "../Images/Svg/linkedIn.svg";

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
      <Box>
        <p>© 2022, All rights reserved</p>
      </Box>
      <Box>
        <img src={payment} alt="image" />
      </Box>
      <Box sx={{ display: "flex" }}>
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
