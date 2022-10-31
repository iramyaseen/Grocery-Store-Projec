import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const CategoriesNavBar = (props) => {
  const { currentSelectedItem, setNavCategoryItem, items } = props;

  const navItemStyle = {
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const activeNavItemStyle = {
    ...navItemStyle,
    color: "#3BB77E",
  };

  return (
    <Box className="items" sx={{ display: "flex" }}>
      {items?.map((category) => {
        return (
          <Typography component="p" style={{ marginRight: "30px" }}>
            <span
              onClick={() => setNavCategoryItem(category)}
              // prettier-ignore
              style={category === currentSelectedItem ? activeNavItemStyle : navItemStyle}
            >
              {category}
            </span>
          </Typography>
        );
      })}
    </Box>
  );
};

export default CategoriesNavBar;
