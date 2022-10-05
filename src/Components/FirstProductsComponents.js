import React from "react";
import { Box, Container, Typography } from "@mui/material";
import data from "../Data";

function FirstProductsComponents({ bgColor }) {
  return (
    <Box
      sx={{
        background: `${bgColor}`,
      }}
    >
      {data.map((name) => {
        return (
          <Container key={name.id}>
            {/* {.id} */}
            <p>
              <img
                src={name.image}
                alt="fruite"
                style={{ paddingTop: "20px" }}
              />
            </p>
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
