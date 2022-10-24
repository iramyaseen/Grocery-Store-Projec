import React from "react";
import { Box, Typography } from "@mui/material";
import TopProductComponent from "../TopProductComponent";
function TopProductPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "60px",
        marginRight: "60px",
        marginTop: "30px",
        marginBottom: "80px",
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
