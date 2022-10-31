import React, { useRef } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as Shopping } from "../Images/Svg/li_shopping-cart_White.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { CategoriesNavBar } from "./CateNavBarComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DailyBestSaleComponent() {
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
          dots: true,
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
  const items = useSelector((state) => state.products.items.ThirdProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerClick = (product) => {
    dispatch(addToCart(product));
    navigate("/cart-products");
  };
  return (
    <Box>
      <Box
        className="nav_bars_items"
        sx={{
          display: "flex",
          width: "100%",
          textAlign: "center",
          justifyContent: "space-between",
          paddingLeft: "30px",
          paddingRight: "80px",
          paddingTop: "80px",
          paddingBottom: "25px",
        }}
      >
        <h1>Daily Best Sells</h1>
        <CategoriesNavBar />
        <Box sx={{}}></Box>
      </Box>
      <Box className="App">
        <Slider {...settings}>
          {items?.map((name) => {
            return (
              <Box
                key={name.id}
                sx={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(173, 173, 173, 0.25)",
                  borderRadius: "3px",
                  position: "relative",
                  marginRight: "50px",
                }}
                className="silder_div"
              >
                <Box>
                  <Button
                    sx={{
                      padding: "6px 10px",
                      background: "#FFD480",
                      color: "white",
                      "&:hover": {
                        background: "#FFD480",
                      },
                      textTransform: "capitalize",
                    }}
                  >
                    Save 10%
                  </Button>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "30px",
                  }}
                >
                  <Box>
                    <img src={name.image} alt="fruite" />
                  </Box>
                  <Box sx={{ paddingBottom: "10px" }}>
                    <Box>
                      <Typography
                        component="p"
                        sx={{
                          color: "#ADADAD",
                          fontSize: "15px",
                          fontWeight: "lighter",
                          paddingTop: "20px",
                        }}
                      >
                        {name.type}
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          color: "#253D4E",
                          fontWeight: "bold",
                          fontSize: "19px",
                          paddingBottom: "8px",
                        }}
                      >
                        {name.name}
                      </Typography>
                      <Box>
                        <Typography component="p">
                          <Typography
                            component="span"
                            sx={{ color: "#FDC040" }}
                          >
                            {<StarRateIcon />}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ color: "#FDC040" }}
                          >
                            {<StarRateIcon />}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ color: "#FDC040" }}
                          >
                            {<StarRateIcon />}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{ color: "#FDC040" }}
                          >
                            {<StarRateIcon />}
                          </Typography>

                          <Typography
                            component="span"
                            sx={{
                              paddingTop: "10px",
                              fontSize: "12px",
                              color: "#ADADAD",
                            }}
                          >
                            {<StarBorderIcon />}(4)
                          </Typography>
                        </Typography>

                        <Typography
                          component="p"
                          sx={{ paddingBottom: "20px" }}
                        >
                          <Typography component="span">
                            {name.by}
                            <Typography
                              component="span"
                              sx={{ color: "#3bb77e", paddingLeft: "5px" }}
                            >
                              {name.owner}
                            </Typography>
                          </Typography>
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
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
                          {name.price}
                        </Typography>
                        <Typography component="span" sx={{ color: "#ADADAD" }}>
                          <s>{name.realPrice}</s>
                        </Typography>
                      </Box>
                      <Typography
                        component="p"
                        sx={{
                          paddingRight: "10px",
                          fontSize: "18px",
                          paddingBottom: "10px",
                        }}
                      >
                        Sold:{name.sold}
                      </Typography>
                      <Button
                        sx={{
                          background: "#3BB77E",
                          color: "white",
                          textTransform: "capitalize",
                          padding: "12px 50px",
                          "&:hover": {
                            background: "#3BB77E",
                          },
                        }}
                        onClick={() => handlerClick(name)}
                      >
                        <Typography
                          component="span"
                          sx={{ color: "white", paddingRight: "5px" }}
                        >
                          {<Shopping />}
                        </Typography>
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}

export default DailyBestSaleComponent;
