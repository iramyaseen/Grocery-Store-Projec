import { styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AvatarComponents from "../AvatarComponents";
import IconsImgComponent from "../IconsImgComponent";
import LogoComponents from "../LogoComponents";
import SearchComponents from "../SearchComponents";
import TwoTopBar from "../TwoTopBar";

const StyledAppBar = styled(Toolbar)({
  display: "flex",
  marginTop: "20px",
  marginBottom: "20px",
  padding: "0%",
});
function AppBarsPages() {
  return (
    <Box sx={{ marginLeft: "40px", marginRight: "40px" }}>
      <StyledAppBar>
        <LogoComponents />
        <SearchComponents />
        <IconsImgComponent />
        <AvatarComponents />
      </StyledAppBar>
      <TwoTopBar />
    </Box>
  );
}

export default AppBarsPages;
