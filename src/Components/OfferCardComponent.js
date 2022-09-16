import React from "react";
import { Box, Button } from "@mui/material";

function OfferCardComponent({
  image,
  type,
  Name,
  Rating,
  leftRating,
  user,
  reallPrice,
  discountPrice,
  leftProduct,
  cartIcon,
}) {
  return (
    <Box sx={{ border: "2px solid red" }}>
      <Box>
        <img src={image} />
      </Box>
      <Box>
        <p>{type}</p>
        <h3>{Name}</h3>
        <Box>
          <span>
            {Rating}
            {leftRating}4
          </span>
          <p>By{user}</p>
        </Box>
      </Box>
      <Box>
        <span>{reallPrice}</span>
        <span>
          <s>{discountPrice}</s>
        </span>
        <p>BarLine</p>
        <p>Sold:{leftProduct}</p>
        <Button>{cartIcon}Add to Cart</Button>
      </Box>
    </Box>
  );
}

export default OfferCardComponent;
