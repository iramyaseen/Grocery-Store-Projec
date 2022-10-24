import React from "react";
import { Avatar, Box, Toolbar, Typography } from "@mui/material";
import AvatarImage from "../Images/Ellipse 2.png";
import AvatarDropDown from "./AvatarDropDown";
function AvatarComponents() {
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
          <AvatarDropDown />
          {/* Ramzi Cherif */}
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default AvatarComponents;
