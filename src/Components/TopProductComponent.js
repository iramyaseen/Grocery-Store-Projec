import { Box, Typography } from "@mui/material";
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
    <Box sx={{ marginTop: "60px" }}>
      <Typography
        component="h1"
        className="mySaless"
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {sells}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <Box sx={{ background: "#F4F6FA", padding: "0px 12px" }}>
          <img src={image} alt="product image" />
        </Box>
        <Box sx={{ paddingLeft: "10px" }}>
          <Typography
            variant="p"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {ProductName}
          </Typography>
          <Typography
            component="p"
            sx={{ paddingTop: "4px", paddingBottom: "8px" }}
          >
            <Typography component="span" sx={{ color: "#FDC040" }}>
              {icon1}
            </Typography>
            <Typography component="span" sx={{ color: "#FDC040" }}>
              {icon1}
            </Typography>
            <Typography component="span" sx={{ color: "#FDC040" }}>
              {icon1}
            </Typography>
            <Typography component="span" sx={{ color: "#FDC040" }}>
              {icon1}
            </Typography>
            <Typography component="span" sx={{ color: "#D4D4D4" }}>
              {icon2}
            </Typography>
          </Typography>

          <Box>
            <Typography
              component="span"
              sx={{
                color: "#3BB77E",
                paddingRight: "10px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {realPrice}
            </Typography>
            <Typography component="span" sx={{ color: "#ADADAD" }}>
              <s>{discountPrice}</s>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TopProductComponent;
