import React from "react";
import { Box } from "@mui/system";
import HeroImg from "../assets/Images/Hreo-img.png";
import { ReactComponent as Send } from "../assets/Images/Svg/li_send.svg";
import { InputBase, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BoxSearch = styled("div")({
  background: "#F3F3F3",
  display: "flex",
  lineHeight: "0.4",
  height: "52px",
  borderRadius: "5px 0px 0px 5px",
  alignItems: "center",
  paddingLeft: "21px",
  paddingRight: "0px",
  paddingTop: "12px",
  paddingBottom: "12px",
});

export const HeroImageComponent = () => {
  return (
    <Box>
      <Box className="here_image ">
        <Box
          className="Navbar_component "
          sx={{
            border: "2px soild black",
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: {
              md: "100px",
              sm: "100px",
              xs: "100px",
            },
          }}
        >
          <Box
            sx={{
              paddingLeft: {
                lg: "50px",
                sm: "50px",
                md: "50px",
                xs: "20px",
              },
            }}
          >
            <Typography
              component="h1"
              sx={{ fontSize: "55px", fontWeight: "bold", paddingTop: "100px" }}
            >
              Don’t miss our daily <br /> amazing deals
            </Typography>
            <Typography component="p" style={{ color: "#838383" }}>
              Save up to 60% off on your first order
            </Typography>
            <Box sx={{ width: "90%", marginTop: "30px" }}>
              <BoxSearch>
                <Send />
                <span
                  style={{
                    display: "flex",
                  }}
                >
                  <Toolbar component="p">
                    <InputBase
                      sx={{
                        maxWidth: {
                          lg: "300px",
                          md: "200px",
                        },
                        marginLeft: "15px",
                        marginRight: {
                          xs: "70px",
                        },
                      }}
                      placeholder="Enter your email address "
                    />
                  </Toolbar>
                  <Toolbar
                    className="subscribe"
                    sx={{
                      background: "#3BB77E",
                      color: "white",
                    }}
                    component="p"
                  >
                    Subscribe
                  </Toolbar>
                </span>
              </BoxSearch>
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xl: "flex",
                lg: "flex",
                md: "none",
                xs: "none",
              },
            }}
          >
            <img alt="heroImage" src={HeroImg} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
