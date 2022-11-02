import React from "react";
import { Avatar, Box, Toolbar, Typography } from "@mui/material";
import AvatarImage from "../assets/Images/Ellipse 2.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AvatarComponent = () => {
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
      <Toolbar
        sx={{
          paddingLeft: {
            sm: "20px",
            xs: "20px",
          },
        }}
      >
        <Avatar alt="Remy Sharp" src={AvatarImage} />
        <Typography sx={{ textTransform: "capitalize", paddingLeft: "10px" }}>
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
              Ramzi Cherif
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Setting</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Typography>
      </Toolbar>
    </Box>
  );
};
