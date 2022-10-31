import React from "react";
import { styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import LogoComponent from "./LogoComponent";
import { SearchBarComponent } from "./SearchBarComponent";
import { TwoIconsComponents } from "./TwoIconsComponents";
import { AvatarComponent } from "./AvatarComponent";

const StyledAppBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
  marginBottom: "20px",
  padding: "0%",
});

// <Box sx={{ width: "100%", paddingLeft: "50px", paddingRight: "50px" }}>
//   <Box
//     sx={{
//       marginTop: "15px",
//       marginBottom: "20px",
//     }}
//   >
//     <StyledAppBar className="Navbar_component">
//       <LogoComponent />
//       <SearchBarComponent />
//       <TwoIconsComponents />
//       <AvatarComponent />
//     </StyledAppBar>
//   </Box>
// </Box>

export const NavBarComponents = () => {
  return <></>;
};
