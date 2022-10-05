import { Box } from "@mui/material";
import React from "react";
import CategoriesNavBarComponents from "../CategoriesNavBarComponents";
import ProductCardsComponents from "../ProductCardsComponents";
import Radish from "../../Images/Radish.png";
import Potatos from "../../Images/Products/image 8.png";
import Tomatos from "../../Images/Rectangle 19.png";
import Broccoli from "../../Images/Products/Rectangle 199.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ReactComponent as Shopping } from "../../Images/Svg/SmallShopping.svg";

function FeaturedProductsPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginRight: "60px",
          marginTop: "70px",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <span style={{ fontSize: "30px", fontWeight: "600" }}>
          Featured Products
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
          justifyContent: "space-around",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            border: "1px solid rgba(173, 173, 173, 0.25)",
            borderRadius: "3px",
            width: "280px",
          }}
        >
          <ProductCardsComponents
            Proimage={Radish}
            type="Vegetables"
            proName="Redish 500g"
            fillstars={<StarRateIcon />}
            emptyStar={<StarBorderIcon />}
            spanStar="(4)"
            by="By"
            owner="Mr.food"
            price="$2"
            realPrice="$3.99"
            addIcons={<Shopping />}
            addToCard="Add"
          />
        </Box>

        <Box
          sx={{
            border: "1px solid rgba(173, 173, 173, 0.25)",
            borderRadius: "3px",
            width: "280px",
          }}
        >
          <ProductCardsComponents
            Proimage={Potatos}
            type="Vegetables"
            proName="Potatos 1kg"
            fillstars={<StarRateIcon />}
            emptyStar={<StarBorderIcon />}
            spanStar="(4)"
            by="By"
            owner="Mr.food"
            price="$2"
            realPrice="$3.99"
            addIcons={<Shopping />}
            addToCard="Add"
          />
        </Box>
        <Box
          sx={{
            border: "1px solid rgba(173, 173, 173, 0.25)",
            borderRadius: "3px",
            width: "280px",
          }}
        >
          <ProductCardsComponents
            Proimage={Tomatos}
            type="Fruits"
            proName="Tomatos 200g"
            fillstars={<StarRateIcon />}
            emptyStar={<StarBorderIcon />}
            spanStar="(4)"
            by="By"
            owner="Mr.food"
            price="$2"
            realPrice="$3.99"
            addIcons={<Shopping />}
            addToCard="Add"
          />
        </Box>
        <Box
          sx={{
            border: "1px solid rgba(173, 173, 173, 0.25)",
            borderRadius: "3px",
            width: "280px",
          }}
        >
          <ProductCardsComponents
            Proimage={Broccoli}
            type="Vegetables"
            proName="Broccoli 1kg"
            fillstars={<StarRateIcon />}
            emptyStar={<StarBorderIcon />}
            spanStar="(4)"
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
