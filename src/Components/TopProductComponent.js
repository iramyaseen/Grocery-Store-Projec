import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TopProductLists from "./TopProductsLists";

export const TopProductComponent = () => {
  return (
    <Box
      className="nav_bar nav_bars_items"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-between",
        marginTop: "30px",
        marginBottom: "80px",
        paddingLeft: "30px",
        paddingRight: "80px",
      }}
    >
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "25%",
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
        <TopProductLists />
      </Box>
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "25%",
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
        <TopProductLists />
      </Box>
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "25%",
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
        <TopProductLists />
      </Box>
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
          width: "25%",
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
        <TopProductLists />
      </Box>
    </Box>
  );
};
