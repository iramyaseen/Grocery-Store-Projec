import React from "react";
import { Box } from "@mui/material";
import { CategoriesNavBar } from "./CateNavBarComponent";
import { ExploerSilder } from "./Slides/ExploerProductSlide";

export const ExploreCate = () => {
  return (
    <Box className="Navbar_component">
      <Box
        className="nav_bars_items"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "75px",
          paddingRight: "60px",
          paddingTop: "80px",
          paddingBottom: "25px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "30px",
            paddingBottom: "20px",
            fontWeight: "600",
          }}
        >
          Explore Categories
        </span>
        <CategoriesNavBar />
      </Box>
      <ExploerSilder />
    </Box>
  );
};
