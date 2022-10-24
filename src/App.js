import "./css/index.css";
import { Route, Routes } from "react-router-dom";
import MainHomePage from "./Components/Pages2/MainHomePage";
import { FruitsPage } from "./Components/Pages2/FruitsPage";
import { Box } from "@mui/material";
import Cart from "./Components/AddToCartItems";
import { WishlistConponent } from "./Components/WishlistConponent";
function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/Vegetables" element={<FruitsPage />} />
        <Route path="/Fruits" element={<FruitsPage />} />
        <Route path="/Coffe&teas" element={<FruitsPage />} />
        <Route path="/Meat" element={<FruitsPage />} />
        <Route path="/cart-products" element={<Cart />} />
        <Route path="/wishlist-products" element={<WishlistConponent />} />
      </Routes>
    </Box>
  );
}

export default App;
