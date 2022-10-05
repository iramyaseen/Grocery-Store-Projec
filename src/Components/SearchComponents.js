import { Divider, InputBase, styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DropMeunBar from "./DropMeunBar";
import { ReactComponent as SearchIcon } from "../Images/Svg/li_search.svg";
const BoxSearch = styled("div")({
  background: "#F3F3F3",
  display: "flex",
  width: "480px",
  lineHeight: "0.4",
  height: "52px",
  borderRadius: "5px 0px 0px 5px",
});

function SearchComponents() {
  return (
    <Box>
      <Toolbar sx={{ alignItems: "center" }}>
        <BoxSearch>
          <Toolbar
            sx={{
              minHeight: "10px",
              paddingLeft: "0%",
              paddingRight: "0%",
            }}
          >
            <DropMeunBar />
            <Divider orientation="vertical" variant="middle" flexItem />
          </Toolbar>
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
              placeholder="Search here "
            />
          </Toolbar>
          <Toolbar className="search">
            <SearchIcon />
          </Toolbar>
        </BoxSearch>
      </Toolbar>
    </Box>
  );
}

export default SearchComponents;
