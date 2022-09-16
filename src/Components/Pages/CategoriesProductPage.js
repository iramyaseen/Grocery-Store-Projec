import React from "react";
import { Box } from "@mui/material";
import ProductCardsComponents from "../ProductCardsComponents";
import peach from "../../Images/Products/image 3.png";
import Vegetables from "../../Images/Products/image 4.png";
import strawberry from "../../Images/Products/image 5.png";
import Apple from "../../Images/Products/image 6.png";
import Orange from "../../Images/Products/image 7.png";
import Potato from "../../Images/Products/image 8.png";
import Carrot from "../../Images/Products/image 9.png";
import CategoriesNavBarComponents from "../CategoriesNavBarComponents";
import FeaturedProductsPage from "./FeaturedProductsPage";
function CategoriesProductPage() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        Explore Categories
        <CategoriesNavBarComponents
          nav1="All"
          nav2="Vegetables"
          nav3="Fruits"
          nav4="Coffe & teas"
          nav5="Meat"
        />
      </Box>

      <Box sx={{ display: "flex" }}>
        <ProductCardsComponents
          name="peach"
          bgColor="#FEEFEA"
          image={peach}
          items="20 items"
        />
        <ProductCardsComponents
          name="Vegetables"
          bgColor="#FFF3FF"
          image={Vegetables}
          items="20 items"
        />
        <ProductCardsComponents
          name="strawberry"
          bgColor="#F2FCE4"
          image={strawberry}
          items="20 items"
        />
        <ProductCardsComponents
          name="Apple"
          bgColor="#FEEFEA"
          image={Apple}
          items="20 items"
        />
        <ProductCardsComponents
          name="Orange"
          bgColor="#ECFFEC"
          image={Orange}
          items="20 items"
        />
        <ProductCardsComponents
          name="Potato"
          bgColor="#FFFCEB"
          image={Potato}
          items="20 items"
        />
        <ProductCardsComponents
          name="Carrot"
          bgColor="#DEF9EC"
          image={Carrot}
          items="20 items"
        />
      </Box>
      <FeaturedProductsPage />
    </Box>
  );
}

export default CategoriesProductPage;
