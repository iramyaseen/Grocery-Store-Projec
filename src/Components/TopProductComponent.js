import { Box } from "@mui/material";
import React from "react";

function TopProductComponent({
  image,
  ProductName,
  realPrice,
  icon1,
  icon2,
  discountPrice,
  sells,
}) {
  return (
    <Box>
      <h1>{sells}</h1>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Box sx={{ background: "#F4F6FA" }}>
          <img src={image} alt="product image" />
        </Box>
        <Box>
          <p>{ProductName}</p>
          <p>
            <span>
              {icon1}
              {icon2}4
            </span>
          </p>
          <p>
            {realPrice}
            <span>
              <s>{discountPrice}</s>
            </span>
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default TopProductComponent;
