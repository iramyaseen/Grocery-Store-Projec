import React from "react";
import { Divider, styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import AvatarComponents from "../AvatarComponents";
import IconsImgComponent from "../IconsImgComponent";
import SearchComponents from "../SearchComponents";
import LogoComponents from "../LogoComponents";

const StyledAppBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
  marginBottom: "20px",
  padding: "0%",
});

export const AppNavBarPage = () => {
  return (
    <Box>
      <Box sx={{ marginLeft: "40px", marginRight: "40px" }}>
        <StyledAppBar>
          <LogoComponents />
          <SearchComponents />
          <IconsImgComponent />
          <AvatarComponents />
        </StyledAppBar>
      </Box>
      <Divider />
      <Box
        sx={{
          marginTop: "15px",
          marginBottom: "20px",
        }}
      ></Box>
    </Box>
  );
};
