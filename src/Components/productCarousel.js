import { FirstFruitesMapFunction } from "./FirstFruitesMapFunction";
import { FruiteMapFunction } from "./FruiteMapFunction";
import { CoffeteasMapFunction } from "./CoffeteasMapFunction";
import { MeatMapFunction } from "./MeatMapFunction";
import { Silder } from "./ReactSilders";

const ProductCarousel = ({ page }) => {
  return (
    <>
      {page === "Vegetables" ? (
        <FirstFruitesMapFunction />
      ) : page === "Fruits" ? (
        <FruiteMapFunction />
      ) : page === "Coffe & teas" ? (
        <CoffeteasMapFunction />
      ) : page === "Meat" ? (
        <MeatMapFunction />
      ) : (
        <Silder />
      )}
    </>
  );
};

export default ProductCarousel;
