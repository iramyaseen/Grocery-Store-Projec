import { Box, Divider } from "@mui/material";
import "./css/index.css";
import { Route, Routes } from "react-router-dom";
import MainHomePage from "./Components/Pages/MainHomePage";
import { FruitsPage } from "./Components/Pages/FruitsPage";
import { useParams } from "react-router-dom";
function App() {
  const param = useParams();
  console.log(param);
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
