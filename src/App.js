import "./css/index.css";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import MainHomePage from "./Components/Pages2/MainHomePage";
import { FruitsPage } from "./Components/Pages2/FruitsPage";
import { Box } from "@mui/material";
function App() {
  const param = useParams();
  console.log("consloe", param);
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
