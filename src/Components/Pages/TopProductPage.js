import React from "react";
import { Box } from "@mui/material";
import TopProductComponent from "../TopProductComponent";
import Apple from "../../Images/Products/image 6.png";
import Orange from "../../Images/Products/image 7.png";
import Potato from "../../Images/Products/image 8.png";
import Carrot from "../../Images/Products/image 9.png";
import peach from "../../Images/Products/image 3.png";
import Satobary from "../../Images/Products/image 5.png";
import vage from "../../Images/Products/image 4.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
function TopProductPage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box>
        <TopProductComponent
          image={Orange}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
          sells="Top Sells"
        />
        <TopProductComponent
          image={vage}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
        />
        <TopProductComponent
          image={Satobary}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
        />
      </Box>
      <Box>
        <TopProductComponent
          image={peach}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
          sells="Top Rated"
        />
        <TopProductComponent
          image={vage}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
        />
        <TopProductComponent
          image={Apple}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
        />
      </Box>

      <Box>
        <TopProductComponent
          image={Carrot}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
          sells="Trending Items"
        />
        <TopProductComponent
          image={Potato}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
        />
        <TopProductComponent
          image={Orange}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
        />
      </Box>

      <Box>
        <TopProductComponent
          image={Apple}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
          sells="Recently Added"
        />
        <TopProductComponent
          image={Carrot}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
        />
        <TopProductComponent
          image={Satobary}
          ProductName="Orange 1kg"
          icon1={<StarBorderIcon />}
          icon2={<StarRateIcon />}
          realPrice="$2"
          discountPrice="$3.99"
        />
      </Box>
    </Box>
  );
}

export default TopProductPage;
