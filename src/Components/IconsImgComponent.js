import React from "react";
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Heart } from "../Images/Svg/li_heart.svg";
import { ReactComponent as Shopping } from "../Images/Svg/li_shopping-cart.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function IconsImgComponent() {
  return (
    <Box sx={{ position: "relative", display: "flex", gap: "40px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Heart />
        <Typography
          component="span"
          sx={{
            position: "absolute",
            width: "28px",
            height: "28px",
            lineHeight: "0.",
            left: "7%",
            top: "-9px",
            background: "#3BB77E",
            border: "3px solid #FFFFFF",
            borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
          }}
        >
          4
        </Typography>
        <Typography
          sx={{ paddingLeft: "15px", color: "#253D4E", fontWeight: "500" }}
        >
          Wishlist
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Shopping />
        <Typography
          component="span"
          sx={{
            position: "absolute",
            width: "28px",
            height: "28px",
            lineHeight: "0.",
            left: "66%",
            top: "-9px",
            background: "#3BB77E",
            border: "3px solid #FFFFFF",
            borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
          }}
        >
          2
        </Typography>
        <Box>
          <Typography
            sx={{
              paddingLeft: "15px",
              fontSize: "15px",
              color: "#253D4E",
              fontWeight: "500",
            }}
          >
            My cart
          </Typography>
          <Typography
            sx={{
              paddingLeft: "15px",
              fontSize: "15px",
              color: "#3BB77E",
              fontWeight: "bold",
            }}
          >
            $21
          </Typography>
        </Box>
        <ExpandMoreIcon id="change" />
      </Box>
    </Box>
  );
}

export default IconsImgComponent;
