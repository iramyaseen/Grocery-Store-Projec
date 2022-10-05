import React from "react";
import { Box } from "@mui/system";
import { Button, Container, Typography } from "@mui/material";

function ProductCardsComponents({
  Proimage,
  proName,
  type,
  fillstars,
  spanStar,
  by,
  owner,
  price,
  realPrice,
  addIcons,
  addToCard,
}) {
  return (
    <>
      <Container>
        <Box
          sx={{
            paddingTop: "20px",
            textAlign: "center",
            height: "144px",
            width: "224px",
          }}
        >
          <img src={Proimage} alt="fruite" />
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
          {type}
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
          {proName}
        </Typography>
        <Typography component="p">
          <Typography component="span" sx={{ color: "#FDC040" }}>
            {fillstars}
          </Typography>
          <Typography component="span" sx={{ color: "#FDC040" }}>
            {fillstars}
          </Typography>
          <Typography component="span" sx={{ color: "#FDC040" }}>
            {fillstars}
          </Typography>
          <Typography component="span" sx={{ color: "#FDC040" }}>
            {fillstars}
          </Typography>
          <Typography component="span" sx={{ color: "#D4D4D4" }}>
            {fillstars}
          </Typography>
          <Typography
            component="span"
            sx={{ paddingTop: "10px", fontSize: "12px", color: "#ADADAD" }}
          >
            {spanStar}
          </Typography>
        </Typography>
        <Typography component="p" sx={{ paddingBottom: "20px" }}>
          <Typography component="span">
            {by}
            <Typography
              component="span"
              sx={{ color: "#3bb77e", paddingLeft: "5px" }}
            >
              {owner}
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
              {price}
            </Typography>
            <Typography component="span" sx={{ color: "#ADADAD" }}>
              <s>{realPrice}</s>
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
              <span>{addIcons}</span>
              <span
                style={{
                  textTransform: "capitalize",
                  paddingLeft: "5px",
                }}
              >
                {addToCard}
              </span>
            </Button>
          </Box>
        </Typography>
      </Container>
    </>
  );
}

export default ProductCardsComponents;
