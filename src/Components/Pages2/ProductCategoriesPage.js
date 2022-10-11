import React from "react";
import { Box } from "@mui/material";
import { CategoriesNavBarPage } from "./CategoriesNavBarPage";

export const ProductCategoriesPage = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginRight: "60px",
          marginTop: "100px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "30px",
            paddingBottom: "20px",
            fontWeight: "600",
          }}
        >
          Explore Categories
        </span>
        <CategoriesNavBarPage />
      </Box>
    </Box>
  );
};
