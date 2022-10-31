import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { ReactComponent as LayoutImag } from "../Images/Svg/li_layout-grid.svg";
import { ReactComponent as Vector } from "../Images/Svg/Frame.svg";
import { ReactComponent as Deal } from "../Images/Svg/hot deals 1.svg";
import { ReactComponent as Percentctor } from "../Images/Svg/li_percent.svg";
import { ReactComponent as Megaphone } from "../Images/Svg/li_megaphone.svg";
import { ReactComponent as Call } from "../Images/Svg/Call.svg";
import { DropDownMenuComponent } from "./DropDownMenuComponent";
import { Link, Typography } from "@mui/material";
export const BrowsDropDwonComponent = () => {
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
          width: "143px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        <LayoutImag />
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
                <Box sx={{ display: "flex" }}>
                  <Vector />
                  <Link href="#" variant="body2" className="FirstLink">
                    Home
                  </Link>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <Box sx={{ display: "flex" }}>
                  <Deal />
                  <Link href="#" variant="body2" className="linkes">
                    Hot deals
                  </Link>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <Box sx={{ display: "flex" }}>
                  <Percentctor />
                  <Link href="#" variant="body2" className="linkes">
                    Promotions
                  </Link>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box sx={{ display: "flex" }}>
                  <Megaphone />
                  <Link href="#" variant="body2" className="linkes">
                    New products
                  </Link>
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Call className="call" />
                  <Link href="#" variant="body2" className="numberLink">
                    1233-7777
                  </Link>
                </Box>
              </MenuItem>
            </Box>
          );
        })}
      </Menu>
    </Box>
  );
};
