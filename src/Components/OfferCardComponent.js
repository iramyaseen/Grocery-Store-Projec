import React from "react";
import { Box, Button, Typography } from "@mui/material";

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
  leftPriduct,
}) {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        border: "1px solid rgba(173, 173, 173, 0.25)",
        borderRadius: "3px",
        position: "relative",
      }}
    >
      <Box>
        <Button
          sx={{
            padding: "6px 10px",
            background: "#FFD480",
            color: "white",
            "&:hover": {
              background: "#FFD480",
            },
            textTransform: "capitalize",
          }}
        >
          Save 10%
        </Button>
      </Box>

      <Box>
        <img src={image} />
      </Box>
      <Box sx={{ paddingLeft: "15px", paddingBottom: "10px" }}>
        <Box>
          <Typography
            component="p"
            sx={{
              color: "#ADADAD",
              fontSize: "15px",
              fontWeight: "lighter",
              paddingTop: "20px",
            }}
          >
            {type}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: "#253D4E",
              fontWeight: "bold",
              fontSize: "19px",
              paddingBottom: "8px",
            }}
          >
            {Name}
          </Typography>
          <Box>
            <Typography component="p">
              <Typography component="span" sx={{ color: "#FDC040" }}>
                {leftRating}
              </Typography>
              <Typography component="span" sx={{ color: "#FDC040" }}>
                {leftRating}
              </Typography>
              <Typography component="span" sx={{ color: "#FDC040" }}>
                {leftRating}
              </Typography>
              <Typography component="span" sx={{ color: "#FDC040" }}>
                {leftRating}
              </Typography>

              <Typography
                component="span"
                sx={{ paddingTop: "10px", fontSize: "12px", color: "#ADADAD" }}
              >
                {Rating}(4)
              </Typography>
            </Typography>

            <Typography component="p" sx={{ paddingBottom: "20px" }}>
              <Typography component="span">
                By
                <Typography
                  component="span"
                  sx={{ color: "#3bb77e", paddingLeft: "5px" }}
                >
                  {user}
                </Typography>
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
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
              {reallPrice}
            </Typography>
            <Typography component="span" sx={{ color: "#ADADAD" }}>
              <s>{discountPrice}</s>
            </Typography>
          </Box>

          {/* <p>BarLine</p> */}
          <Typography
            component="p"
            sx={{
              paddingRight: "10px",
              fontSize: "18px",
              paddingBottom: "10px",
            }}
          >
            Sold:{leftPriduct}
          </Typography>
          <Button
            sx={{
              background: "#3BB77E",
              color: "white",
              textTransform: "capitalize",
              padding: "12px 50px",
              "&:hover": {
                background: "#3BB77E",
              },
            }}
          >
            <Typography
              component="span"
              sx={{ color: "white", paddingRight: "5px" }}
            >
              {cartIcon}
            </Typography>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default OfferCardComponent;
