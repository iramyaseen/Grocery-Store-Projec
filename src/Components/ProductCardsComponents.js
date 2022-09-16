import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function ProductCardsComponents({
  name,
  bgColor,
  image,
  proName,
  type,
  fillstars,
  emptyStar,
  spanStar,
  by,
  owner,
  price,
  realPrice,
  addIcons,
  addToCard,
  items,
}) {
  return (
    <>
      <Box
        sx={{
          background: `${bgColor}`,
          width: "150px",
          marginLeft: "30px",
          marginBottom: "20px",
        }}
      >
        <img src={image} />
        <p>{type}</p>
        <h3>
          {name}
          {proName}
        </h3>
        <p>{items}</p>
        <p>
          <span>{fillstars}</span>
          <span>{fillstars}</span>
          <span>{fillstars}</span>
          <span>{fillstars}</span>
          <span>{emptyStar}</span>
          <span>{spanStar}</span>
        </p>
        <p>
          <span>
            {by}
            {owner}
          </span>
        </p>
        <p>
          <span>{price}</span>
          <span>{realPrice}</span>
          <Button>
            {addIcons}
            {addToCard}
          </Button>
        </p>
      </Box>
    </>
  );
}

export default ProductCardsComponents;
