import React from "react";
import { Box, Container, Typography } from "@mui/material";
import data from "../Data.json";

function FirstProductsComponents({ bgColor }) {
  return (
    <Box
      sx={{
        background: `${bgColor}`,
      }}
    >
      {data &&
        data.map((name) => {
          return (
            <Container key={name.id}>
              {/* {.id} */}
              <img
                src={JSON[key].image}
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
          );
        })}
    </Box>
  );
}

export default FirstProductsComponents;
