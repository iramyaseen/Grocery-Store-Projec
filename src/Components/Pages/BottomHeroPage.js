import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";
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
      <Container>
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
          <img src={AppStore} />
        </Button>
        <Button>
          <img src={GooglePlay} />
        </Button>
      </Container>
      <Box sx={{ paddingTop: "80px" }}>
        <img height="600px" src={App} />
      </Box>
    </Box>
  );
}

export default BottomHeroPage;
