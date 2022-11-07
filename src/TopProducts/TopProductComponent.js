import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TopProductLists from "./ProductList";

export const TopProductComponent = () => {
  return (
    <Box
      className="nav_bar nav_bars_items Navbar_component "
      sx={{
        display: "block",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "space-between",
        marginTop: "30px",
        marginBottom: "80px",
        paddingLeft: "50px",
        paddingRight: "60px",
      }}
    >
      <Box
        sx={{
          marginTop: "60px",
          position: "relative",
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
          display: {
            lg: "block",
          },
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
