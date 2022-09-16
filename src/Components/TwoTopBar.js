import React from "react";
import { Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { ReactComponent as LayoutImag } from "../Images/Svg/li_layout-grid.svg";
import { ReactComponent as Vector } from "../Images/Svg/Frame.svg";
import { ReactComponent as Deal } from "../Images/Svg/hot deals 1.svg";
import { ReactComponent as Percentctor } from "../Images/Svg/li_percent.svg";
import { ReactComponent as Megaphone } from "../Images/Svg/li_megaphone.svg";
import { ReactComponent as Call } from "../Images/Svg/Call.svg";

function TwoTopBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Button
          sx={{
            background: "red",
            "&:hover": {
              background: "red",
            },
          }}
        >
          <Toolbar>
            <LayoutImag />
            Brows All Categories
          </Toolbar>
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Vector />
        <Link href="#" variant="body2">
          Home
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Deal />
        <Link href="#" variant="body2">
          Hot deals
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Percentctor />
        <Link href="#" variant="body2">
          Promotions
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Megaphone />
        <Link href="#" variant="body2">
          New products
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Call />
        <Link href="#" variant="body2">
          1233 - 7777
        </Link>
        <Typography component="span">24/7 support center</Typography>
      </Box>
    </Box>
  );
}

export default TwoTopBar;
