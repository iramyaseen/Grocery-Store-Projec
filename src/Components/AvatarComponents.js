import React from "react";
import { Avatar, Box, Toolbar, Typography } from "@mui/material";
import AvatarImage from "../Images/Ellipse 2.png";

function AvatarComponents() {
  return (
    <Box>
      <Toolbar>
        <Avatar alt="Remy Sharp" src={AvatarImage} />
        <Typography>Ramzi Cherif</Typography>
      </Toolbar>
    </Box>
  );
}

export default AvatarComponents;
