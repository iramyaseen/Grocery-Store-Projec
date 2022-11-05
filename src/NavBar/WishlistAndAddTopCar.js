import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Heart } from "../assets/Images/Svg/li_heart.svg";
import { ReactComponent as Shopping } from "../assets/Images/Svg/li_shopping-cart.svg";
import { useSelector } from "react-redux";
import { AddToCardDropDown } from "./AddToCardDropDown";
import { WishlistDropDownCart } from "./WishListDropDownCart";

export const WishlistAndAddTopCart = () => {
  const { cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  const { wishTotalQuantity, wishTotalAmount } = useSelector(
    (state) => state.wish
  );
  return (
    <Box
      sx={{
        position: "relative",
        gap: "40px",
        display: {
          md: "none",
          sm: "none",
          xs: "none",
          lg: "flex",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Heart />
        <Typography
          component="span"
          sx={{
            position: "absolute",
            width: "28px",
            height: "28px",
            lineHeight: "0.",
            left: "7%",
            bottom: "21px",
            background: "#3BB77E",
            border: "3px solid #FFFFFF",
            borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
          }}
        >
          {wishTotalQuantity}
        </Typography>
        <Box>
          <Typography
            sx={{
              paddingLeft: "15px",
              fontSize: "15px",
              color: "#253D4E",
              fontWeight: "500",
            }}
          >
            <WishlistDropDownCart />
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Shopping />
        <Typography
          component="span"
          sx={{
            position: "absolute",
            width: "28px",
            height: "28px",
            lineHeight: "0.",
            left: "63%",
            bottom: "21px",
            background: "#3BB77E",
            border: "3px solid #FFFFFF",
            borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
          }}
        >
          {cartTotalQuantity}
        </Typography>
        <Box>
          <Typography
            sx={{
              paddingLeft: "15px",
              fontSize: "15px",
              color: "#253D4E",
              fontWeight: "500",
            }}
          >
            <AddToCardDropDown />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
