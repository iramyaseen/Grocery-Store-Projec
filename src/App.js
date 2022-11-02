// import "./assets/css/index.css";
// import { Route, Routes } from "react-router-dom";
import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { SecondNavBarComponent } from "./BrowerComponent/SecondNavBarComponent";
import CategoryItemsCarousel from "./Components/CategoryItemsCarousel";
import { DiscountComponent } from "./Components/DiscountComponent";
import { HeroImageComponent } from "./Components/HeroImageComponent";
import { TopProductComponent } from "./TopProducts/TopProductComponent";
import { ExploreCate } from "./ExploreProducts/ExploreProduct";
import { NavBarComponents } from "./NavBar/NavBarComponent";
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
      {/* <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/Vegetables" element={<FruitsPage />} />
        <Route path="/Fruits" element={<FruitsPage />} />
        <Route path="/Coffe&teas" element={<FruitsPage />} />
        <Route path="/Meat" element={<FruitsPage />} />
      </Routes> */}
    </Box>
  );
}
export default App;
