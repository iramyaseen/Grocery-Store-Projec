import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import AppStore from "../../Images/image 13.png";
import GooglePlay from "../../Images/image 14.png";
import App from "../../Images/App.png";

function BottomHeroPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#C5EAD9",
      }}
    >
      <Box>
        <h1>Shop Faster With Groceyish App</h1>
        <p>Available on both IOS & Android</p>
        <Button>
          <img src={AppStore} />
        </Button>
        <Button>
          <img src={GooglePlay} />
        </Button>
      </Box>
      <Box sx={{ alignItems: "center" }}>
        <img height="600px" src={App} />
      </Box>
    </Box>
  );
}

export default BottomHeroPage;
