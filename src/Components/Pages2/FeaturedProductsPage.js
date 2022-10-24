import React, { useRef } from "react";
import { Box } from "@mui/material";
import { CategoriesNavBarPage } from "./CategoriesNavBarPage";
import { ReactComponent as ArrowRight } from "../../Images/Svg/li_arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../Images/Svg/li_arrow-left.svg";
import { FruiteMapFunction } from "../FruiteMapFunction";
import { FirstFruitesMapFunction } from "../FirstFruitesMapFunction";
import { SecondProductMapFunction } from "./SecondProductMapFunction";
import { MeatMapFunction } from "./MeatMapFunction";
import { CoffeteasMapFunction } from "../CoffeteasMapFunction";
export const FeaturedProductsPage = () => {
  const carousel = useRef(null);
  const handleNextClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handleBackClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginRight: "80px",
          marginTop: "80px",
          marginBottom: "25px",
        }}
      >
        <span style={{ fontSize: "30px", fontWeight: "600" }}>
          Featured Products
        </span>
        <CategoriesNavBarPage />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "30px",
          marginRight: "80px",
          width: "1250px",
          overflow: "scroll",
        }}
        className="none"
        ref={carousel}
      >
        {window.location.pathname === `/Vegetables` ? (
          <FirstFruitesMapFunction />
        ) : window.location.pathname === "/Fruits" ? (
          <FruiteMapFunction />
        ) : window.location.pathname === "/Coffe&teas" ? (
          <CoffeteasMapFunction />
        ) : window.location.pathname === "/Meat" ? (
          <MeatMapFunction />
        ) : (
          <SecondProductMapFunction />
        )}
      </Box>
      <Box sx={{ display: "flex", position: "relative" }}>
        <div onClick={handleNextClick} className="RightAngle">
          {<ArrowRight />}
        </div>
        <div onClick={handleBackClick} className="leftAngle">
          {<ArrowLeft />}
        </div>
      </Box>
    </Box>
  );
};
