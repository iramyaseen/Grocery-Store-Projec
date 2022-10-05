import React from "react";
import { Box } from "@mui/material";
// import peach from "../../Images/Products/image 3.png";
// import Vegetables from "../../Images/Products/image 4.png";
// import strawberry from "../../Images/Products/image 5.png";
// import Apple from "../../Images/Products/image 6.png";
// import Orange from "../../Images/Products/image 7.png";
// import Potato from "../../Images/Products/image 8.png";
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
        <FirstProductsComponents />
        {/* {Data.map((name) => {
          return (
            <FirstProductsComponents
              image={name.image}
              name={name.name}
              bgColor="#DEF9EC"
              items={name.Items}
            />
          );
        })} */}
      </Box>
      <FeaturedProductsPage />
    </Box>
  );
}

export default CategoriesProductPage;
