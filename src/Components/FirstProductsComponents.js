import { Box, Container, Typography } from "@mui/material";
import React from "react";

function FirstProductsComponents({ bgColor, image, name, items }) {
  return (
    <Box
      sx={{
        background: `${bgColor}`,
      }}
    >
      <Container>
        <img src={image} alt="fruite" style={{ paddingTop: "20px" }} />
        <Typography
          compenent="h3"
          sx={{
            fontSize: "17px",
            fontWeight: "bold",
            color: "#253D4E",
          }}
        >
          {name}
        </Typography>
        <Typography component="p" sx={{ color: "#ADADAD", fontSize: "14px" }}>
          {items}
        </Typography>
      </Container>
    </Box>
  );
}

export default FirstProductsComponents;
