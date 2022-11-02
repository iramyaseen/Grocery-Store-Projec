import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
export const DropDownNavBar = ({ name, dropDown }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
        {name}
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
        {dropDown?.map((cate, key) => {
          return (
            <Box key={key}>
              <MenuItem onClick={handleClose}>
                <NavLink to="/Vegetables">{cate}</NavLink>
              </MenuItem>
            </Box>
          );
        })}
      </Menu>
    </Box>
  );
};
