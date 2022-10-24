import React from "react";
import { Box, Divider } from "@mui/material";
import { AppNavBarPage } from "../Pages2/AppNavBarPage";
import TwoTopBar from "../Pages2/TwoTopBarPage";
import { HeroImagePage } from "../Pages2/HeroImagePage";
import { ProductCategoriesPage } from "../Pages2/ProductCategoriesPage";
import { FirstProductPage } from "../Pages2/FirstProductPage";
import { FeaturedProductsPage } from "../Pages2/FeaturedProductsPage";
import { DiscountPage } from "../Pages2/DiscountPage";
import DailyBestSalePage from "../Pages2/DailyBestSalePage";
import TopProductPage from "../Pages2/TopProductPage";
import BenefitsPage from "../Pages2/BenefitPage";
import BottomHeroPage from "../Pages2/BottomPage";
import FooterPage from "../Pages2/FooterPage";
import CopyWritePage from "../Pages2/CopyWritepage";
export const FruitsPage = () => {
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
      <BottomHeroPage />
      <TopProductPage />
      <BottomHeroPage />
      <BenefitsPage />
      <Divider />
      <FooterPage />
      <Divider />
      <CopyWritePage />
    </Box>
  );
};
