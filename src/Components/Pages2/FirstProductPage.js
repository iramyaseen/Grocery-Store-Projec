import React from "react";
import { Box, Container, Typography } from "@mui/material";
import data from "../../Data.json";
export const FirstProductPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "space-between",
        marginLeft: "30px",
        marginRight: "80px",
      }}
    >
      {data["FisrtProduct"].map((name) => {
        return (
          <Box
            sx={{
              background: `${name.bgColor}`,
              paddingBottom: "20px",
            }}
          >
            <Container key={name.id}>
              <img
                src={name.image}
                alt="fruite"
                style={{ paddingTop: "20px" }}
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
    </Box>
  );
};
