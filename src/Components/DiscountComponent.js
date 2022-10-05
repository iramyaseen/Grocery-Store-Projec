import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { ReactComponent as RightArrow } from "../Images/Svg/li_arrow-right.svg";
import image from "../Images/Offer1-img.png";
import discountHeroImage from "../Images/Offer2-img.png";

function DiscountComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          background: "#FFF5E1D9",
          width: "630px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "44px",
          paddingTop: "33px",
          paddingRight: "44px",
        }}
      >
        <Box>
          <Button
            sx={{
              padding: "10px 20px",
              background: "#FFD480",
              color: "white",
              "&:hover": {
                background: "#FFD480",
              },
              textTransform: "capitalize",
              marginBottom: "25px",
            }}
          >
            Free delivery
          </Button>
          <Typography
            variant="h4"
            sx={{ fontWeight: "lighter", paddingBottom: "5px" }}
          >
            Free delivery over $50
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#838383", paddingBottom: "30px" }}
          >
            Shop $50 product and get free
            <br /> delivery anywhre.
          </Typography>
          <Button
            sx={{
              background: "#3BB77E",
              "&:hover": {
                background: "#3BB77E",
              },
              color: "white",
              padding: "15px 30px",
              alignItems: "center",
              marginBottom: "44px",
              textTransform: "capitalize",
              fontSize: "20px",
            }}
          >
            Shop Now {<RightArrow />}
          </Button>
        </Box>
        <Box>
          <img src={image} />
        </Box>
      </Box>

      {/*  */}
      <Box
        sx={{
          background: "#D2EFE1",
          width: "630px",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "33px",
          paddingLeft: "44px",
        }}
      >
        <Box>
          <Button
            sx={{
              padding: "10px 20px",
              background: "#FFD480",
              color: "white",
              "&:hover": {
                background: "#FFD480",
              },
              textTransform: "capitalize",
              marginBottom: "25px",
            }}
          >
            Free delivery
          </Button>
          <Typography
            variant="h4"
            sx={{ fontWeight: "lighter", paddingBottom: "5px" }}
          >
            Organic Food
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#838383", paddingBottom: "30px" }}
          >
            Save up to 60% off on your <br /> first order
          </Typography>
          <Button
            sx={{
              background: "#3BB77E",
              "&:hover": {
                background: "#3BB77E",
              },
              color: "white",
              padding: "15px 30px",
              alignItems: "center",
              marginBottom: "44px",
              textTransform: "capitalize",
              fontSize: "20px",
            }}
          >
            Order Now {<RightArrow />}
          </Button>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            src={discountHeroImage}
            style={{ position: "absolute", bottom: "0%", right: "10%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DiscountComponent;
