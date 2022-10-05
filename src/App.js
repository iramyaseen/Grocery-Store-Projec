import { Box, Divider } from "@mui/material";
import AppBarsPages from "./Components/Pages/AppBarsPages";
import BenefitsPage from "./Components/Pages/BenefitsPage";
import BottomHeroPage from "./Components/Pages/BottomHeroPage";
import CategoriesProductPage from "./Components/Pages/CategoriesProductPage";
import CopyWritePage from "./Components/Pages/CopyWritePage";
import DailyBestSalepage from "./Components/Pages/DailyBestSalePage";
import DiscountPage from "./Components/Pages/DiscountPage";
import FooterPage from "./Components/Pages/FooterPage";
import HeroLogopage from "./Components/Pages/HeroLogopage";
import TopProductPage from "./Components/Pages/TopProductPage";
import "./css/index.css";
function App() {
  return (
    <Box>
      <AppBarsPages />
      <HeroLogopage />
      <CategoriesProductPage />
      <DiscountPage />
      <DailyBestSalepage />
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

export default App;
