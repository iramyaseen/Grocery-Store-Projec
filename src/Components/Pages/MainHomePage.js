import { Box, Divider } from "@mui/material";
import React from "react";
import BenefitComponent from "../BenefitComponent";
import BottomHeroPage from "../BottomHeroComponent";
import CopyWriteComponent from "../CopyWriteComponent";
import { DiscountComponent } from "../DiscountComponent";
import { ExploreCate } from "../ExploreComponent";
import CategoryItemsCarousel from "../categoryItemsCarousel";
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
      <CategoryItemsCarousel heading="Featured Products" />
      <CategoryItemsCarousel heading="Daily Best Sales" />
      <DiscountComponent />
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
