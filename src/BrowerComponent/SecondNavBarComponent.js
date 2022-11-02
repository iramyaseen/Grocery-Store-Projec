import { Box, Link, Toolbar, Typography } from "@mui/material";
import { ReactComponent as LayoutImag } from "../assets/Images/Svg/li_layout-grid.svg";
import { ReactComponent as Vector } from "../assets/Images/Svg/Frame.svg";
import { ReactComponent as Deal } from "../assets/Images/Svg/hot deals 1.svg";
import { ReactComponent as Percentctor } from "../assets/Images/Svg/li_percent.svg";
import { ReactComponent as Megaphone } from "../assets/Images/Svg/li_megaphone.svg";
import { ReactComponent as Call } from "../assets/Images/Svg/Call.svg";
import { useState } from "react";
import { BrowsDropDwonComponent } from "./BrowerDropDown";
export const SecondNavBarComponent = () => {
  const [active, setActive] = useState();
  function handleNone() {
    setActive(!active);
  }
  return (
    <Box
      className="nav_bar Navbar_component"
      sx={{
        paddingLeft: {
          lg: "50px",
          sm: "50px",
          md: "50px",
          xs: "20px",
        },
        paddingRight: "90px",
        paddingBottom: "30px",
        paddingTop: "30px",
        alignItems: "center",
      }}
    >
      <Box
        className="app_bar_two"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              background: "#3bb77e",
              position: "inherit",
              color: "white",
              display: "flex",
              cursor: "pointer",
            }}
            onClick={handleNone}
          >
            <Toolbar
              component="span"
              className="categories_btn"
              sx={{
                position: "inherit",
              }}
            >
              <LayoutImag />
              <span style={{ paddingLeft: "10px" }}> brows all categories</span>
            </Toolbar>
            <Box className="hida_component">
              <BrowsDropDwonComponent />
            </Box>
          </Box>
        </Box>
        <Box
          id="display_None"
          className="categories_btn"
          sx={{
            display: {
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Vector />
            <Link href="#" variant="body2" className="FirstLink">
              Home
            </Link>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Deal />
            <Link href="#" variant="body2" className="linkes">
              Hot deals
            </Link>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Percentctor />
            <Link href="#" variant="body2" className="linkes">
              Promotions
            </Link>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Megaphone />
            <Link href="#" variant="body2" className="linkes">
              New products
            </Link>
          </Box>
        </Box>
        <Box
          id="display_none"
          className="categories_btn"
          sx={{
            display: {
              lg: "flex",
              md: "none",
              sm: "none",
              xs: "none",
            },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Call className="call" />
          <Link href="#" variant="body2" className="numberLink">
            1233-7777
          </Link>
          <Typography className="support" component="span">
            24/7 support center
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
