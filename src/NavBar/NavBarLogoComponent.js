import React from "react";
import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logoImage from "../assets/Images/svgexport-6 1.png";
import { NavLink } from "react-router-dom";

export const NavBarLogoComponent = () => {
  return (
    <Toolbar>
      <Box component="img" src={logoImage}></Box>
      <Box>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography
            component="h1"
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
            component="p"
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
        </NavLink>
      </Box>
    </Toolbar>
  );
};
