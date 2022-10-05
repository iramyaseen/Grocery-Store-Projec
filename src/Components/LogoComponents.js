import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logoImage from "../Images/svgexport-6 1.png";

function LogoComponents() {
  return (
    <Toolbar>
      <Box component="img" src={logoImage}></Box>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: "20px",
            color: "#3BB77E",
            fontWeight: "700",
            lineHeight: "1.167",
            textTransform: "capitalize",
          }}
        >
          Groceyish
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "12px",
            color: "#ADADAD",
            fontWeight: "500",
            lineHeight: "1.167",
            textTransform: "uppercase",
          }}
        >
          GROCERY
        </Typography>
      </Box>
    </Toolbar>
  );
}

export default LogoComponents;
