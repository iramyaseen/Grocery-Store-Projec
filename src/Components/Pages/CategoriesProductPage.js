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
import FirstProductsComponents from "../FirstProductsComponents";
function CategoriesProductPage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginRight: "60px",
          marginTop: "100px",
          alignItems: "center",
        }}
      >
        <span
          style={{ fontSize: "30px", paddingBottom: "20px", fontWeight: "600" }}
        >
          Explore Categories
        </span>
        <CategoriesNavBarComponents
          nav1="All"
          nav2="Vegetables"
          nav3="Fruits"
          nav4="Coffe & teas"
          nav5="Meat"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginRight: "80px",
        }}
      >
        <FirstProductsComponents
          name="Peach"
          bgColor="#FEEFEA"
          image={peach}
          items="20 items"
        />
        <FirstProductsComponents
          name="Vegetables"
          bgColor="#FFF3FF"
          image={Vegetables}
          items="20 items"
        />
        <FirstProductsComponents
          name="Strawberry"
          bgColor="#F2FCE4"
          image={strawberry}
          items="20 items"
        />
        <FirstProductsComponents
          name="Apple"
          bgColor="#FEEFEA"
          image={Apple}
          items="20 items"
        />
        <FirstProductsComponents
          name="Orange"
          bgColor="#ECFFEC"
          image={Orange}
          items="20 items"
        />
        <FirstProductsComponents
          name="Potato"
          bgColor="#FFFCEB"
          image={Potato}
          items="20 items"
        />
        <FirstProductsComponents
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
