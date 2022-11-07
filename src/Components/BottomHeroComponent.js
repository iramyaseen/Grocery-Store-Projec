import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";
import AppStore from "../assets/Images/image 13.png";
import GooglePlay from "../assets/Images/image 14.png";
import App from "../assets/Images/App.png";

function BottomHeroComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#C5EAD9",
        paddingLeft: "26px",
        paddingRight: "60px",
      }}
      className="nav_bars_items"
    >
      <Box sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Typography
          variant="h3"
          sx={{ color: "#253D4E", fontWeight: "700", fontSize: "55px" }}
        >
          Shop Faster With <br /> Groceyish App
        </Typography>
        <Typography
          component="p"
          sx={{ color: "#838383", paddingTop: "10px", paddingBottom: "20px" }}
        >
          Available on both IOS & Android
        </Typography>
        <Button>
          <img src={AppStore} alt="product" />
        </Button>
        <Button className="responsive_btn">
          <img src={GooglePlay} alt="product" />
        </Button>
      </Box>
      <Box
        sx={{
          paddingTop: "80px",
          display: {
            lg: "flex",
            md: "none",
            xs: "none",
          },
        }}
      >
        <img height="600px" src={App} alt="product" />
      </Box>
    </Box>
  );
}

export default BottomHeroComponent;
