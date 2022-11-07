import React from "react";
import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { SecondNavBarComponent } from "./BrowerComponent/SecondNavBarComponent";
import CategoryItemsCarousel from "./Components/CategoryItemsCarousel";
import { DiscountComponent } from "./Components/DiscountComponent";
import { HeroImageComponent } from "./Components/HeroImageComponent";
import { TopProductComponent } from "./TopProducts/TopProductComponent";
import { ExploreCate } from "./ExploreProducts/ExploreProduct";
import { NavBarComponents } from "./NavBar/NavBarComponent";
import BottomHeroComponent from "./Components/BottomHeroComponent";
import BenefitComponent from "./Components/BenefitComponent";
import FooterComponent from "./Components/FooterComponent";
import CopyWriteComponent from "./Components/CopyWriteComponent";

function App() {
  const secondProduct = useSelector(
    (state) => state.products.items.SecondProduct
  );

  const thirdProduct = useSelector(
    (state) => state.products.items.ThirdProduct
  );

  return (
    <Box>
      <NavBarComponents />
      <Divider />
      <SecondNavBarComponent />
      <HeroImageComponent />
      <ExploreCate />
      <CategoryItemsCarousel
        heading="Featured Products"
        products={secondProduct}
      />
      <DiscountComponent />
      <CategoryItemsCarousel
        heading="Daily Best Sells"
        products={thirdProduct}
      />
      <TopProductComponent />
      <BottomHeroComponent />
      <BenefitComponent />
      <Divider />
      <FooterComponent />
      <Divider />
      <CopyWriteComponent />
    </Box>
  );
}
export default App;
