import { Box, Typography } from "@mui/material";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";
function TopProductComponent() {
  const items = useSelector((state) => state.products.items.FisrtProduct);

  return (
    <Box sx={{ paddingTop: "25px", border: "2px solid black", width: "100%" }}>
      {items?.map((product) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              width: "100%",
            }}
          >
            <Box sx={{ background: "#F4F6FA", padding: "0px 12px" }}>
              <img src={product.image} alt="product image" />
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
                {product.name}
              </Typography>
              <Typography
                component="p"
                sx={{ paddingTop: "4px", paddingBottom: "8px" }}
              >
                <Typography component="span" sx={{ color: "#FDC040" }}>
                  {<StarRateIcon />}
                </Typography>
                <Typography component="span" sx={{ color: "#FDC040" }}>
                  {<StarRateIcon />}
                </Typography>
                <Typography component="span" sx={{ color: "#FDC040" }}>
                  {<StarRateIcon />}
                </Typography>
                <Typography component="span" sx={{ color: "#FDC040" }}>
                  {<StarRateIcon />}
                </Typography>
                <Typography component="span" sx={{ color: "#D4D4D4" }}>
                  {<StarBorderIcon />}
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
                  $2
                </Typography>
                <Typography component="span" sx={{ color: "#ADADAD" }}>
                  <s>$3.21</s>
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default TopProductComponent;
