import React from "react";
import { Box, Typography } from "@mui/material";
import TopProductComponent from "../TopProductComponent";
function TopProductPage() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",

        marginTop: "30px",
        marginBottom: "80px",
        border: "2px solid red",
      }}
    >
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "25%",
          border: "2px solid green",
        }}
      >
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
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "25%",
          border: "2px solid green",
        }}
      >
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
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "25%",
          border: "2px solid green",
        }}
      >
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
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "25%",
          border: "2px solid green",
        }}
      >
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
