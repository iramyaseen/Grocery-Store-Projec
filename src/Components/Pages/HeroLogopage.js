import React from "react";
import { Box } from "@mui/system";
import HeroImg from "../../Images/Hreo-img.png";
import { ReactComponent as Send } from "../../Images/Svg/li_send.svg";
import { InputBase, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BoxSearch = styled("div")({
  background: "#F3F3F3",
  display: "flex",
  lineHeight: "0.4",
  height: "52px",
  borderRadius: "5px 0px 0px 5px",
  alignItems: "center",
  paddingLeft: "12px",
  paddingRight: "0px",
  paddingTop: "12px",
  paddingBottom: "12px",
});
function HeroLogopage() {
  return (
    <Box className="hero_section" sx={{ position: "relative" }}>
      <Box
        className="here_image"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "60px",
        }}
      >
        <Box sx={{}}>
          <Typography
            component="h1"
            sx={{ fontSize: "55px", fontWeight: "bold", paddingTop: "100px" }}
          >
            Don’t miss our daily amazing deals
          </Typography>
          <Typography component="p" style={{ color: "#838383" }}>
            Save up to 60% off on your first order
          </Typography>
        </Box>
        <Box>
          <img src={HeroImg} />
        </Box>
      </Box>
      <Box sx={{ position: "absolute", top: "67%", left: "60px" }}>
        <BoxSearch>
          <Send />
          <Toolbar>
            <InputBase
              sx={{
                width: "300px",
                marginLeft: "15px",
                width: {
                  sm: "200px",
                  marginRight: "55px",
                },
                marginRight: {
                  xs: "70px",
                },
              }}
              placeholder="Enter your email address "
            />
          </Toolbar>
          <Toolbar
            className="subscribe"
            sx={{ background: "#3BB77E", color: "white" }}
            component="p"
          >
            Subscribe
          </Toolbar>
        </BoxSearch>
      </Box>
    </Box>
  );
}

export default HeroLogopage;
