import React from "react";
import { FirstFruitesMapFunction } from "../MapProduct.js/FirestProductMapFunction";
import { FruiteMapFunction } from "../MapProduct.js/FruiteMapFunction";
import { CoffeteasMapFunction } from "../MapProduct.js/CoffeteasMapFunction";
import { MeatMapFunction } from "../MapProduct.js/MeatMapFunction";
import { Silder } from "./Silders";

export const ProductSlides = ({ page, products }) => {
  return (
    <div className="App">
      {page === "Vegetables" ? (
        <FirstFruitesMapFunction />
      ) : page === "Fruits" ? (
        <FruiteMapFunction />
      ) : page === "Coffe & teas" ? (
        <CoffeteasMapFunction />
      ) : page === "Meat" ? (
        <MeatMapFunction />
      ) : (
        <Silder products={products} />
      )}
    </div>
  );
};
