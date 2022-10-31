import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const margin = {
  marginRight: "30px",
};

export const CategoriesNavBar = () => {
  const items = useSelector((state) => state.products.items.Categories);
  return (
    <Box className="items">
      {items?.map((Categories) => {
        return (
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography component="p" style={margin}>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#3BB77E" : "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  };
                }}
              >
                {Categories.val1}
              </NavLink>
            </Typography>
            <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
              <NavLink
                to={`/Vegetables`}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#3BB77E" : "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  };
                }}
              >
                {Categories.val2}
              </NavLink>
            </Typography>
            <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
              <NavLink
                to="/Fruits"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#3BB77E" : "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  };
                }}
              >
                {Categories.val3}
              </NavLink>
            </Typography>
            <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
              <NavLink
                to="/Coffe&teas"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#3BB77E" : "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  };
                }}
              >
                {Categories.val4}
              </NavLink>
            </Typography>
            <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
              <NavLink
                to="/Meat"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#3BB77E" : "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                  };
                }}
              >
                {Categories.val5}
              </NavLink>
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
