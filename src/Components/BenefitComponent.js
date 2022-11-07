import React from "react";
import { Box } from "@mui/system";
import { ReactComponent as BestPrice } from "../assets/Images/Svg/BestPrice.svg";
import { ReactComponent as RefoundAble } from "../assets/Images/Svg/refundabble.svg";
import { ReactComponent as FreeDelivery } from "../assets/Images/Svg/freeDelivery.svg";
import { Typography } from "@mui/material";

function BenefitComponent() {
  return (
    <Box
      className="nav_bar nav_bars_items Navbar_component "
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingTop: "80px",
        paddingBottom: "20px",
        paddingLeft: "50px",
        paddingRight: "60px",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}
      >
        <Box>
          <BestPrice />
        </Box>
        <Box sx={{ paddingLeft: "10px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Best Prices & Deals
          </Typography>
          <Typography component="p" sx={{ fontSize: "15px", color: "#ADADAD" }}>
            Don’t miss our daily amazing <br /> deals and prices
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}
      >
        <Box>
          <RefoundAble />
        </Box>

        <Box sx={{ paddingLeft: "10px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Refundable
          </Typography>
          <Typography component="p" sx={{ fontSize: "15px", color: "#ADADAD" }}>
            If your items have damage <br /> we agree to refund it
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}
      >
        <Box>
          <FreeDelivery />
        </Box>

        <Box sx={{ paddingLeft: "10px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Free delivery
          </Typography>
          <Typography component="p" sx={{ fontSize: "15px", color: "#ADADAD" }}>
            Do purchase over $50 and <br /> get free delivery anywhere
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BenefitComponent;
