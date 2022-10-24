import React, { useRef } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as Shopping } from "../../Images/Svg/li_shopping-cart_White.svg";
import { CategoriesNavBarPage } from "./CategoriesNavBarPage";
import { ReactComponent as ArrowRight } from "../../Images/Svg/li_arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../Images/Svg/li_arrow-left.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function DailyBestSalePage() {
  const carousel = useRef(null);
  const handleNextClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handleBackClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const items = useSelector((state) => state.products.items.ThirdProduct);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerClick = (product) => {
    dispatch(addToCart(product));
    navigate("/cart-products");
  };
  return (
    <Box
      sx={{
        marginTop: "80px",
        width: "100%",
        border: "2px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
          marginBottom: "40px",
        }}
      >
        <h1>Daily Best Sells</h1>
        <CategoriesNavBarPage />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "30px",
          paddingRight: "80px",
          width: "100%",
          overflow: "scroll",
          border: "1px solid black",
        }}
        className="none"
        ref={carousel}
      >
        {items?.map((name) => {
          return (
            <Box
              key={name.id}
              sx={{
                background: "#FFFFFF",
                border: "1px solid rgba(173, 173, 173, 0.25)",
                borderRadius: "3px",
                position: "relative",
                marginRight: "27px",
              }}
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

                      <Typography component="p" sx={{ paddingBottom: "20px" }}>
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
}

export default DailyBestSalePage;
