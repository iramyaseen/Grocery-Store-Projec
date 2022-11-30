import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import { Avatar, Divider, InputBase, Toolbar, Typography } from "@mui/material";
import { ReactComponent as SearchIcon } from "../assets/Images/Svg/li_search.svg";
import styled from "@emotion/styled";
import { DropDownNavBar } from "./DropDownNavBar";
import { useSelector } from "react-redux";
import AvatarImage from "../assets/Images/Ellipse 2.png";
import { ReactComponent as Heart } from "../assets/Images/Svg/li_heart.svg";
import { ReactComponent as Shopping } from "../assets/Images/Svg/li_shopping-cart.svg";
import { WishlistDropDownCart } from "../NavBar/WishListDropDownCart";
import { AddToCardDropDown } from "../NavBar/AddToCardDropDown";

const BoxSearch = styled("div")({
  background: "#F3F3F3",
  display: "flex",
  width: "480px",
  lineHeight: "0.4",
  height: "52px",
  borderRadius: "5px 0px 0px 5px",
});
export const ResponsiveDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dropDownMenu = useSelector((state) => state.products.items.Categories);
  const { cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  const { wishTotalQuantity, wishTotalAmount } = useSelector(
    (state) => state.wish
  );
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "unset", padding: "0" }}
      >
        {
          <ViewSidebarIcon
            sx={{
              color: "#3bb77e",
              fontSize: "40px",
            }}
          />
        }
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
        <MenuItem>
          <BoxSearch>
            <Toolbar>
              <DropDownNavBar name="All Categories" dropDown={dropDownMenu} />
              <Divider orientation="vertical" variant="middle" flexItem />
            </Toolbar>
            <Toolbar
              sx={{
                maxWidth: "300px",
                marginRight: "40px",
              }}
            >
              <InputBase placeholder="Search here " />
            </Toolbar>
            <Toolbar className="search">
              <SearchIcon />
            </Toolbar>
          </BoxSearch>
        </MenuItem>
        <MenuItem>
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
              <Typography
                sx={{ textTransform: "capitalize", paddingLeft: "10px" }}
              >
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
                </Box>
              </Typography>
            </Toolbar>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box
            sx={{
              position: "relative",
              gap: "40px",
              display: "flex",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Heart />
              <Typography
                component="span"
                sx={{
                  position: "absolute",
                  width: "28px",
                  height: "28px",
                  lineHeight: "0.",
                  left: "7%",
                  bottom: "21px",
                  background: "#3BB77E",
                  border: "3px solid #FFFFFF",
                  borderRadius: "50%",
                  textAlign: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                {wishTotalQuantity}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    paddingLeft: "15px",
                    fontSize: "15px",
                    color: "#253D4E",
                    fontWeight: "500",
                  }}
                >
                  <WishlistDropDownCart />
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Shopping />
              <Typography
                component="span"
                sx={{
                  position: "absolute",
                  width: "28px",
                  height: "28px",
                  lineHeight: "0.",
                  left: "63%",
                  bottom: "21px",
                  background: "#3BB77E",
                  border: "3px solid #FFFFFF",
                  borderRadius: "50%",
                  textAlign: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                {cartTotalQuantity}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    paddingLeft: "15px",
                    fontSize: "15px",
                    color: "#253D4E",
                    fontWeight: "500",
                  }}
                >
                  <AddToCardDropDown />
                </Typography>
              </Box>
            </Box>
          </Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};
