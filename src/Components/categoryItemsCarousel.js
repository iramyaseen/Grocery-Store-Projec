import React, { useState } from "react";
import { Box } from "@mui/material";
import { FirstFruitesMapFunction } from "./FirstFruitesMapFunction";
import { FruiteMapFunction } from "./FruiteMapFunction";
import { CoffeteasMapFunction } from "./CoffeteasMapFunction";
import { MeatMapFunction } from "./MeatMapFunction";
import { Silder } from "./ReactSilders";

const CategoryItemsCarousel = ({ heading }) => {
  const [navCategoryItem, setNavCategoryItem] = useState("/");

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
        <span style={{ fontSize: "30px", fontWeight: "600" }}>{heading}</span>

        <div>
          <span onClick={() => setNavCategoryItem("/")}>All</span>
          <span onClick={() => setNavCategoryItem("vegetables")}>
            Vegetables
          </span>
          <span onClick={() => setNavCategoryItem("fruits")}>Fruits</span>
          <span onClick={() => setNavCategoryItem("coffee")}>Coffe & teas</span>
          <span onClick={() => setNavCategoryItem("meat")}>Meat</span>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {navCategoryItem === `vegetables` ? (
          <FirstFruitesMapFunction />
        ) : navCategoryItem === "fruits" ? (
          <FruiteMapFunction />
        ) : navCategoryItem === "coffee" ? (
          <CoffeteasMapFunction />
        ) : navCategoryItem === "meat" ? (
          <MeatMapFunction />
        ) : (
          <Silder />
        )}
      </Box>
    </Box>
  );
};

export default CategoryItemsCarousel;
