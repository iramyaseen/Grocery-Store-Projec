import { Box, Container } from "@mui/material";
import React from "react";
import CategoriesNavBarComponents from "../CategoriesNavBarComponents";
import OfferCardComponent from "../OfferCardComponent";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Radish from "../../Images/imag1.png";
import { ReactComponent as Shopping } from "../../Images/Svg/li_shopping-cart_White.svg";

function DailyBestSalepage() {
  return (
    <Box
      sx={{
        marginTop: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
          marginBottom: "40px",
        }}
      >
        <h1>Daily Best Sells</h1>
        <CategoriesNavBarComponents
          nav1="Featured"
          nav2="Popular"
          nav3="New"
          nav4="Button"
          nav5="Arrow"
        />
      </Box>
      <Box
        sx={{
          display: "flex",

          justifyContent: "space-around",
        }}
      >
        <OfferCardComponent
          image={Radish}
          type="Coffe & teas"
          Name="Coffe 1kg"
          Rating={<StarBorderIcon />}
          leftRating={<StarRateIcon />}
          user="Mr.food"
          reallPrice="$20"
          discountPrice="$25"
          leftPriduct="20/50"
          cartIcon={<Shopping />}
        />

        <OfferCardComponent
          image={Radish}
          type="Coffe & teas"
          Name="Coffe 1kg"
          Rating={<StarBorderIcon />}
          leftRating={<StarRateIcon />}
          user="Mr.food"
          reallPrice="$20"
          discountPrice="$25"
          leftPriduct="20/50"
          cartIcon={<Shopping />}
        />
        <OfferCardComponent
          image={Radish}
          type="Coffe & teas"
          Name="Coffe 1kg"
          Rating={<StarBorderIcon />}
          leftRating={<StarRateIcon />}
          user="Mr.food"
          reallPrice="$20"
          discountPrice="$25"
          leftPriduct="20/50"
          cartIcon={<Shopping />}
        />
        <OfferCardComponent
          image={Radish}
          type="Coffe & teas"
          Name="Coffe 1kg"
          Rating={<StarBorderIcon />}
          leftRating={<StarRateIcon />}
          user="Mr.food"
          reallPrice="$20"
          discountPrice="$25"
          leftPriduct="20/50"
          cartIcon={<Shopping />}
        />
        <OfferCardComponent
          image={Radish}
          type="Coffe & teas"
          Name="Coffe 1kg"
          Rating={<StarBorderIcon />}
          leftRating={<StarRateIcon />}
          user="Mr.food"
          reallPrice="$20"
          discountPrice="$25"
          leftPriduct="20/50"
          cartIcon={<Shopping />}
        />
      </Box>
    </Box>
  );
}

export default DailyBestSalepage;
