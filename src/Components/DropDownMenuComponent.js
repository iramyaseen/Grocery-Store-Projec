import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
export const DropDownMenuComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const items = useSelector((state) => state.products.items.Categories);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "capitalize",
          color: "#253D4E",
          padding: "12px",
          width: "143px",
          fontWeight: "bold",
        }}
      >
        All Categories
        <ExpandMoreIcon id="change" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items?.map((cate, key) => {
          return (
            <Box key={key}>
              <MenuItem onClick={handleClose}>
                <NavLink to="/Vegetables">{cate.val2}</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/Fruits">{cate.val3}</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/Coffe&teas">{cate.val4}</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/Meat">{cate.val5}</NavLink>
              </MenuItem>
            </Box>
          );
        })}
      </Menu>
    </Box>
  );
};
