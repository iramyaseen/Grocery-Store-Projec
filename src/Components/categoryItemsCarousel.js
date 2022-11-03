import React, { useState } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import CategoriesNavBar from "./CateNavBar";
import { ProductSlides } from "../ProductSlides/ProductSlides";

const CategoryItemsCarousel = ({ heading, products }) => {
  const items = useSelector((state) => state.products.items.Categories);

  const [navCategoryItem, setNavCategoryItem] = useState("All");

  return (
    <Box className="nav_bar" sx={{ width: "100%" }}>
      <Box
        className="nav_bars_items"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          paddingLeft: "50px",
          paddingRight: "60px",
          paddingTop: "80px",
          paddingBottom: "25px",
        }}
      >
        <span style={{ fontSize: "30px", fontWeight: "600" }}>{heading}</span>
        <CategoriesNavBar
          currentSelectedItem={navCategoryItem}
          setNavCategoryItem={setNavCategoryItem}
          items={items}
        />
      </Box>
      <Box>
        <ProductSlides page={navCategoryItem} products={products} />
      </Box>
    </Box>
  );
};

export default CategoryItemsCarousel;
