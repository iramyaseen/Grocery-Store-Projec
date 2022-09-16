import { Box } from "@mui/system";
import React from "react";

const margin = {
  marginRight: "30px",
};
function CategoriesNavBarComponents({ nav1, nav2, nav3, nav4, nav5 }) {
  return (
    <Box sx={{ display: "flex" }}>
      <p style={margin}>{nav1}</p>
      <p style={margin}>{nav2}</p>
      <p style={margin}>{nav3}</p>
      <p style={margin}>{nav4}</p>
      <p style={margin}>{nav5}</p>
    </Box>
  );
}

export default CategoriesNavBarComponents;
