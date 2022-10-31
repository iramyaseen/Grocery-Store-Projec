import { Box, Divider } from "@mui/material";
import React from "react";
import BenefitComponent from "../BenefitComponent";
import BottomHeroPage from "../BottomHeroComponent";
import CopyWriteComponent from "../CopyWriteComponent";
import DailyBestSaleComponent from "../DailyBestSaleComponent";
import { DiscountComponent } from "../DiscountComponent";
import { ExploreCate } from "../ExploreComponent";
import { FeaturedProductsPage } from "../FeactureProduct";
import { CategoryItemsCarousel } from "../CategoryItemsCarousel";
import FooterComponent from "../FooterComponent";
import { HeroComponent } from "../HeroComponent";
import { NavBarComponents } from "../NavBarComponents";
import { SecondNavbarComponent } from "../SecondNavbarComponent";
import { TopProductComponent } from "../TopProductComponent";

export const MainHomePage = () => {
  return (
    <Box>
      <NavBarComponents />
      <Divider />
      <SecondNavbarComponent />
      <HeroComponent />
      <ExploreCate />
      {/* <FeaturedProductsPage /> */}
      <CategoryItemsCarousel heading="Featured Products" />
      <CategoryItemsCarousel heading="Daily Best Sales" />
      <DiscountComponent />
      {/* <DailyBestSaleComponent /> */}
      <TopProductComponent />
      <BottomHeroPage />
      <BenefitComponent />
      <Divider />
      <FooterComponent />
      <Divider />
      <CopyWriteComponent />
    </Box>
  );
};
