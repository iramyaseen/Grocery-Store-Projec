import React from "react";
import { Box } from "@mui/material";
import { CategoriesNavBar } from "./CateNavBarComponent";
import { FirstFruitesMapFunction } from "./FirstFruitesMapFunction";
import { FruiteMapFunction } from "./FruiteMapFunction";
import { CoffeteasMapFunction } from "./CoffeteasMapFunction";
import { MeatMapFunction } from "./MeatMapFunction";
import { Silder } from "./ReactSilders";
export const FeaturedProductsPage = () => {
  return (
    <Box className="nav_bar" sx={{ width: "100%" }}>
      <Box
        className="nav_bars_items Navbar_component"
        sx={{
          display: "flex",
          width: "100%",
          textAlign: "center",
          justifyContent: "space-between",
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingTop: "80px",
          paddingBottom: "25px",
        }}
      >
        <span style={{ fontSize: "30px", fontWeight: "600" }}>
          Featured Products
        </span>
        <CategoriesNavBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {window.location.pathname === `/Vegetables` ? (
          <FirstFruitesMapFunction />
        ) : window.location.pathname === "/Fruits" ? (
          <FruiteMapFunction />
        ) : window.location.pathname === "/Coffe&teas" ? (
          <CoffeteasMapFunction />
        ) : window.location.pathname === "/Meat" ? (
          <MeatMapFunction />
        ) : (
          <Silder />
        )}
      </Box>
    </Box>
  );
};
