import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import data from "../../Data.json";
import { NavLink } from "react-router-dom";
const margin = {
  marginRight: "30px",
};

export const CategoriesNavBarPage = () => {
  return (
    <>
      {data["Categories"].map((Categories) => {
        return (
          <Box sx={{ display: "flex" }}>
            <Typography
              component="p"
              sx={{
                color: "#3BB77E",
                cursor: "pointer",
              }}
              style={margin}
            >
              <NavLink to="/">{Categories.val1}</NavLink>
            </Typography>
            <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
              <NavLink to="/Vegetables">{Categories.val2}</NavLink>
            </Typography>
            <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
              <NavLink to="/Fruits">{Categories.val3}</NavLink>
            </Typography>
            <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
              <NavLink to="/Coffe&teas">{Categories.val4}</NavLink>
            </Typography>
            <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
              <NavLink to="/Meat">{Categories.val5}</NavLink>
            </Typography>
          </Box>
        );
      })}
    </>
  );
};
