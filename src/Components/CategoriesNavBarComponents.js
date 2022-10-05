import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const margin = {
  marginRight: "30px",
};
function CategoriesNavBarComponents({ nav1, nav2, nav3, nav4, nav5 }) {
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
        {nav1}
      </Typography>
      <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
        {nav2}
      </Typography>{" "}
      <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
        {nav3}
      </Typography>
      <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
        {nav4}
      </Typography>
      <Typography component="p" style={margin} sx={{ cursor: "pointer" }}>
        {nav5}
      </Typography>
    </Box>
  );
}

export default CategoriesNavBarComponents;
