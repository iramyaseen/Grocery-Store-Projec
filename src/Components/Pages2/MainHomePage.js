import React from "react";
import { Box, Divider } from "@mui/material";
import { AppNavBarPage } from "./AppNavBarPage";
import TwoTopBar from "./TwoTopBarPage";
import { HeroImagePage } from "./HeroImagePage";
import { ProductCategoriesPage } from "./ProductCategoriesPage";
import { FirstProductPage } from "./FirstProductPage";
import { FeaturedProductsPage } from "./FeaturedProductsPage";
import { DiscountPage } from "./DiscountPage";
import DailyBestSalePage from "./DailyBestSalePage";
import TopProductPage from "./TopProductPage";
import BenefitsPage from "./BenefitPage";
import BottomHeroPage from "./BottomPage";
import FooterPage from "./FooterPage";
import CopyWritePage from "./CopyWritepage";
function MainHomePage() {
  return (
    <Box>
      <AppNavBarPage />
      <TwoTopBar />
      <HeroImagePage />
      <ProductCategoriesPage />
      <FirstProductPage />
      <FeaturedProductsPage />
      <DiscountPage />
      <DailyBestSalePage />
      <TopProductPage />
      <BottomHeroPage />
      <BenefitsPage />
      <Divider />
      <FooterPage />
      <Divider />
      <CopyWritePage />
    </Box>
  );
}

export default MainHomePage;
