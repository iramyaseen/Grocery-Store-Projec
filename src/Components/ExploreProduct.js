import React from "react";
import { Box } from "@mui/material";
import CategoriesNavBar from "../Categories/CategoriesComponent";
import { ProductSlides } from "../ProductSlides/ProductSlides";
import { useSelector } from "react-redux";

export const ExploreProduct = ({ name, products }) => {
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
          {name}
        </span>
        <CategoriesNavBar items={items} />
      </Box>
      <ProductSlides products={products} />
    </Box>
  );
};
