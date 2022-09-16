import { RadioButtonCheckedSharp } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import CategoriesNavBarComponents from "../CategoriesNavBarComponents";
import ProductCardsComponents from "../ProductCardsComponents";
import Radish from "../../Images/Radish.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ReactComponent as Shopping } from "../../Images/Svg/li_shopping-cart.svg";

function FeaturedProductsPage() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        Featured Products
        <CategoriesNavBarComponents
          nav1="All"
          nav2="Vegetables"
          nav3="Fruits"
          nav4="Coffe & teas"
          nav5="Meat"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ border: "2px solid red", width: "300px" }}>
          <ProductCardsComponents
            image={Radish}
            type="Vegetables"
            proName="Redish 500g"
            fillstars={<StarRateIcon />}
            emptyStar={<StarBorderIcon />}
            spanStar="4"
            by="By"
            owner="Mr.food"
            price="$2"
            realPrice="$3.99"
            addIcons={<Shopping />}
            addToCard="Add"
          />
        </Box>
        <Box sx={{ border: "2px solid red", width: "300px" }}>
          <ProductCardsComponents
            image={Radish}
            type="Vegetables"
            proName="Redish 500g"
            fillstars={<StarRateIcon />}
            emptyStar={<StarBorderIcon />}
            spanStar="4"
            by="By"
            owner="Mr.food"
            price="$2"
            realPrice="$3.99"
            addIcons={<Shopping />}
            addToCard="Add"
          />
        </Box>
        <Box sx={{ border: "2px solid red", width: "300px" }}>
          <ProductCardsComponents
            image={Radish}
            type="Vegetables"
            proName="Redish 500g"
            fillstars={<StarRateIcon />}
            emptyStar={<StarBorderIcon />}
            spanStar="4"
            by="By"
            owner="Mr.food"
            price="$2"
            realPrice="$3.99"
            addIcons={<Shopping />}
            addToCard="Add"
          />
        </Box>
        <Box sx={{ border: "2px solid red", width: "300px" }}>
          <ProductCardsComponents
            image={Radish}
            type="Vegetables"
            proName="Redish 500g"
            fillstars={<StarRateIcon />}
            emptyStar={<StarBorderIcon />}
            spanStar="4"
            by="By"
            owner="Mr.food"
            price="$2"
            realPrice="$3.99"
            addIcons={<Shopping />}
            addToCard="Add"
          />
        </Box>
      </Box>
    </>
  );
}

export default FeaturedProductsPage;
