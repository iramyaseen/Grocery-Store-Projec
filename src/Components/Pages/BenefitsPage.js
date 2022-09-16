import React from "react";
import { Box } from "@mui/system";
import { ReactComponent as BestPrice } from "../../Images/Svg/BestPrice.svg";
import { ReactComponent as RefoundAble } from "../../Images/Svg/refundabble.svg";
import { ReactComponent as FreeDelivery } from "../../Images/Svg/freeDelivery.svg";

function BenefitsPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <BestPrice />
        </Box>
        <Box>
          <h4>Best Prices & Deals</h4>
          <p>Don’t miss our daily amazing deals and prices</p>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <RefoundAble />
        </Box>
        <Box>
          <h4>Refundable </h4>
          <p>If your items have damage we agree to refund it</p>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <FreeDelivery />
        </Box>
        <Box>
          <h4>Free delivery</h4>
          <p>Do purchase over $50 and get free delivery anywhere</p>
        </Box>
      </Box>
    </Box>
  );
}

export default BenefitsPage;
