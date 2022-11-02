import React, { useState } from "react";
import { Box } from "@mui/material";
import CategoriesNavBar from "../Components/CateNavBar";
import { useSelector } from "react-redux";
import { ExploerSilder } from "./ExploreCurolse";

export const ExploreCate = () => {
  const [navCategoryItem, setNavCategoryItem] = useState("All");
  const items = useSelector((state) => state.products.items.Categories);
  return (
    <Box className="Navbar_component">
      <Box
        className="nav_bars_items"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "50px",
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
        <CategoriesNavBar
          currentSelectedItem={navCategoryItem}
          setNavCategoryItem={setNavCategoryItem}
          items={items}
        />
      </Box>
      <ExploerSilder />
    </Box>
  );
};
