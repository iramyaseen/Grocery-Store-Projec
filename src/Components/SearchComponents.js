import { Divider, InputBase, styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DropMeunBar from "./DropMeunBar";
import { ReactComponent as SearchIcon } from "../Images/Svg/li_search.svg";
import { useSelector } from "react-redux";

const BoxSearch = styled("div")({
  background: "#F3F3F3",
  display: "flex",
  width: "480px",
  lineHeight: "0.4",
  height: "52px",
  borderRadius: "5px 0px 0px 5px",
});
function SearchComponents() {
  const [quary, setQuary] = useState("");
  const [isActive, setisActive] = useState(false);
  const items = useSelector((state) => state.products.items.data);
  const clickHandler = () => {
    setisActive(!isActive);
  };
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
          <Toolbar
            sx={{
              maxWidth: "300px",
              marginLeft: "15px",
              width: {
                sm: "200px",
                marginRight: "55px",
              },
              marginRight: {
                xs: "70px",
              },
            }}
          >
            <InputBase
              onChange={(e) => setQuary(e.target.value)}
              sx={{
                maxWidth: "300px",
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
              onClick={clickHandler}
            />
          </Toolbar>
          <Toolbar className="search">
            <SearchIcon />
          </Toolbar>
        </BoxSearch>
      </Toolbar>
      <Box
        className={isActive ? "searchBsrs" : "searchBsr"}
        sx={{
          background: "#F3F3F3",
          position: "absolute",
          paddingLeft: "30px",
          marginLeft: "25px",
          width: "37.8%",
        }}
      >
        {items
          ?.filter((val) => {
            if (quary === "") {
              return val;
            } else if (val.name.toLowerCase().includes(quary.toLowerCase())) {
              return val;
            }
          })
          .map((value, key) => {
            return (
              <div key={key}>
                <p style={{ cursor: "pointer" }}> {value.name}</p>
              </div>
            );
          })}
      </Box>
    </Box>
  );
}

export default SearchComponents;
