import React from "react";
import { Box, Typography } from "@mui/material";

// import TopProductComponent from "../TopProductComponent";
// import Apple from "../../Images/Products/image 6.png";
// import Orange from "../../Images/Products/image 7.png";
// import Potato from "../../Images/Products/image 8.png";
// import Carrot from "../../Images/Products/image 9.png";
// import peach from "../../Images/Products/image 3.png";
// import Satobary from "../../Images/Products/image 5.png";
// import vage from "../../Images/Products/image 4.png";

import TopProductComponent from "../TopProductComponent";
function TopProductPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "60px",
        marginRight: "60px",
      }}
    >
      <Box sx={{ marginTop: "60px", position: "relative" }}>
        <Typography component="h1" className="mySaless">
          <Typography
            component="h1"
            className="saled"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Top sells
          </Typography>
        </Typography>
        <TopProductComponent />
      </Box>

      <Box sx={{ marginTop: "60px", position: "relative" }}>
        <Typography component="h1" className="mySaless">
          <Typography
            component="h1"
            className="saled"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Top Rated{" "}
          </Typography>
        </Typography>
        <TopProductComponent />
      </Box>

      <Box sx={{ marginTop: "60px", position: "relative" }}>
        <Typography component="h1" className="mySaless">
          <Typography
            component="h1"
            className="saled"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Trending Items
          </Typography>
        </Typography>
        <TopProductComponent />
      </Box>

      <Box sx={{ marginTop: "60px", position: "relative" }}>
        <Typography component="h1" className="mySaless">
          <Typography
            component="h1"
            className="saled"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Recently Added
          </Typography>
        </Typography>
        <TopProductComponent />
      </Box>
    </Box>
  );
}

export default TopProductPage;
