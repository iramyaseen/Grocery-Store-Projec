import React from "react";
import { Box, Button, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ReactComponent as Shopping } from "../Images/Svg/SmallShopping.svg";
import { useSelector } from "react-redux";
export const FirstFruitesMapFunction = () => {
  const productsData = useSelector(
    (state) => state.allProduct.products.firstVagetable
  );

  return productsData?.map((name) => {
    return (
      <Box className="border" sx={{ border: "2px soild red" }}>
        <Box
          sx={{
            paddingTop: "20px",
            textAlign: "center",
            height: "144px",
            width: "224px",
          }}
        >
          <img src={name.image} alt="fruite" />
        </Box>
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
          <Typography component="span" sx={{ color: "#D4D4D4" }}>
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
            {<StarBorderIcon />}
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
        <Typography
          component="p"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
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
          <Box>
            <Button
              sx={{
                background: "#DEF9EC",
                color: "#3BB77E",
                fontWeight: "bold",
                padding: "10px 25px",
                fontSize: "15px",
                "&:hover": {
                  background: "#DEF9EC",
                },
              }}
            >
              <span>{<Shopping />}</span>
              <span
                style={{
                  textTransform: "capitalize",
                  paddingLeft: "5px",
                }}
              >
                Add
              </span>
            </Button>
          </Box>
        </Typography>
      </Box>
    );
  });
};
