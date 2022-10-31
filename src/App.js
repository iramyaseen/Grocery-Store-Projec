import "./css/index.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { FruitsPage } from "./Components/Pages/FruitsPage";
import { MainHomePage } from "./Components/Pages/MainHomePage";
function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MainHomePage />} />
        <Route path="/Vegetables" element={<FruitsPage />} />
        <Route path="/Fruits" element={<FruitsPage />} />
        <Route path="/Coffe&teas" element={<FruitsPage />} />
        <Route path="/Meat" element={<FruitsPage />} />
      </Routes>
    </Box>
  );
}
export default App;
