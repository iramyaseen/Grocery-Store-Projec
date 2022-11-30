import { Box, Typography } from "@mui/material";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function TopProductLists() {
  const items = useSelector((state) => state.products.items.FisrtProduct);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box className="fruites App" sx={{ paddingTop: "25px" }}>
      <Slider {...settings}>
        {items?.map((product) => {
          return (
            <Box
              className="top_product"
              sx={{
                display: "block",
                alignItems: "center",
                marginBottom: "20px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  background: "#F4F6FA",
                  width: "80%",
                  padding: "20px 0px",
                }}
              >
                <img
                  src={product.image}
                  alt="product"
                  style={{ margin: "0 auto" }}
                />
              </Box>
              <Box sx={{ paddingLeft: "10px" }}>
                <Typography
                  variant="p"
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  component="p"
                  sx={{ paddingTop: "4px", paddingBottom: "8px" }}
                >
                  <Typography component="span" sx={{ color: "#FDC040" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography component="span" sx={{ color: "#FDC040" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography component="span" sx={{ color: "#FDC040" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography component="span" sx={{ color: "#FDC040" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography component="span" sx={{ color: "#D4D4D4" }}>
                    {<StarBorderIcon />}
                  </Typography>
                </Typography>

                <Box>
                  <Typography
                    component="span"
                    sx={{
                      color: "#3BB77E",
                      paddingRight: "10px",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    $2
                  </Typography>
                  <Typography component="span" sx={{ color: "#ADADAD" }}>
                    <s>$3.21</s>
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}

export default TopProductLists;
