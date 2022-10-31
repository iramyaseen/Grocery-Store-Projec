import { Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { ReactComponent as LayoutImag } from "../Images/Svg/li_layout-grid.svg";
import { ReactComponent as Vector } from "../Images/Svg/Frame.svg";
import { ReactComponent as Deal } from "../Images/Svg/hot deals 1.svg";
import { ReactComponent as Percentctor } from "../Images/Svg/li_percent.svg";
import { ReactComponent as Megaphone } from "../Images/Svg/li_megaphone.svg";
import { ReactComponent as Call } from "../Images/Svg/Call.svg";
import { BrowsDropDwonComponent } from "./BrowsDropDownComponent";
import { useState } from "react";
export const SecondNavbarComponent = () => {
  const [active, setActive] = useState();
  function handleNone() {
    setActive(!active);
  }
  // if (active) {
  //   document.getElementById("display_none").style.display = "none";
  //   document.getElementById("display_None").style.display = "none";
  // } else {
  //   document.getElementById("display_none").style.display = "flex";
  //   document.getElementById("display_None").style.display = "flex";
  // }
  return (
    <Box
      className="nav_bar Navbar_component"
      sx={{
        paddingLeft: "80px",
        paddingRight: "110px",
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
          <Button
            sx={{
              background: "#3bb77e",
              position: "inherit",
              color: "white",
              display: "flex",
              "&:hover": {
                background: "#3bb77e",
              },
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
          </Button>
        </Box>
        <Box
          id="display_None"
          className="categories_btn"
          sx={{
            display: "flex",
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
            display: "flex",
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
