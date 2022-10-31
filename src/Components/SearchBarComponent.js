import { Divider, InputBase, styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../Images/Svg/li_search.svg";
import { useSelector } from "react-redux";
import { DropDownMenuComponent } from "./DropDownMenuComponent";

const BoxSearch = styled("div")({
  background: "#F3F3F3",
  display: "flex",
  width: "480px",
  lineHeight: "0.4",
  height: "52px",
  borderRadius: "5px 0px 0px 5px",
});
export const SearchBarComponent = () => {
  const [query, setQuery] = useState("");
  const [isActive, setisActive] = useState(false);
  const items = useSelector((state) => state.products.items.data);
  const clickHandler = () => {
    setisActive(!isActive);
  };
  return (
    <Box>
      <Toolbar>
        <BoxSearch>
          <Toolbar>
            <DropDownMenuComponent />
            <Divider orientation="vertical" variant="middle" flexItem />
          </Toolbar>
          <Toolbar
            sx={{
              maxWidth: "300px",
              marginRight: "40px",
            }}
          >
            <InputBase
              onChange={(e) => setQuery(e.target.value)}
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
          width: "21%",
        }}
      >
        {items
          ?.filter((val) => {
            if (query === "") {
              return val;
            } else if (val.name.toLowerCase().includes(query.toLowerCase())) {
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
};
