import React, { useState } from "react";
import { Box } from "@mui/material";
import { CategoriesNavBar } from "./CateNavBarComponent";
import { useSelector } from "react-redux";
import ProductCarousel from "./productCarousel";

const CategoryItemsCarousel = ({ heading }) => {
  const items = useSelector((state) => state.products.items.Categories);

  const [navCategoryItem, setNavCategoryItem] = useState(items[0] ?? "All");

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
        <CategoriesNavBar
          currentSelectedItem={navCategoryItem}
          setNavCategoryItem={setNavCategoryItem}
          items={items}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ProductCarousel page={navCategoryItem} />
      </Box>
    </Box>
  );
};

export default CategoryItemsCarousel;
