import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

export const ExploerSilder = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const items = useSelector((state) => state.products.items.FisrtProduct);
  return (
    <div className="App">
      <Slider {...settings}>
        {items?.map((name) => {
          return (
            <Box
              className="product_cart"
              sx={{
                marginBottom: "20px",
                background: `${name.bgColor}`,
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
              <Container key={name.id}>
                <img
                  src={name.image}
                  alt="fruite"
                  style={{ paddingTop: "20px", textAlign: "center" }}
                />

                <Typography
                  compenent="h3"
                  sx={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "#253D4E",
                  }}
                >
                  {name.name}
                </Typography>
                <Typography
                  component="p"
                  sx={{ color: "#ADADAD", fontSize: "14px" }}
                >
                  {name.Items}
                </Typography>
              </Container>
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};
