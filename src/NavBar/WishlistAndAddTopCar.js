import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Heart } from "../assets/Images/Svg/li_heart.svg";
import { ReactComponent as Shopping } from "../assets/Images/Svg/li_shopping-cart.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { DropDownNavBar } from "../DropDownMenu/DropDownNavBar";

export const WishlistAndAddTopCart = () => {
  const { cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  console.log(cartTotalAmount);
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Heart />
        <NavLink to="/wishlist-products" sx={{ textDecoration: "none" }}>
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
            4
          </Typography>
          <Typography
            sx={{ paddingLeft: "15px", color: "#253D4E", fontWeight: "500" }}
          >
            Wishlist
          </Typography>
        </NavLink>
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
            left: "60%",
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
            <DropDownNavBar name="Add to cart" />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
