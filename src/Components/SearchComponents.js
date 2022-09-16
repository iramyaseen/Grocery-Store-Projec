import { Divider, InputBase, styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DropMeunBar from "./DropMeunBar";
const BoxSearch = styled("div")({
  background: "#F3F3F3",
  display: "flex",
  width: "497px",
  justifyContent: "space-between",
  lineHeight: "0.4",
});

function SearchComponents() {
  return (
    <Box>
      <Toolbar>
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
              sx={{ background: "red", width: "200px" }}
              placeholder="Search here "
            />
          </Toolbar>
          <Toolbar>hello</Toolbar>
        </BoxSearch>
      </Toolbar>
    </Box>
  );
}

export default SearchComponents;
