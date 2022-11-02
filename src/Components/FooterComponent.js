import { Box, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Address } from "../assets/Images/Svg/li_map-pin.svg";
import { ReactComponent as CallPhone } from "../assets/Images/Svg/li_phone.svg";
import { ReactComponent as Email } from "../assets/Images/Svg/li_mail.svg";
import { ReactComponent as WorkHoure } from "../assets/Images/Svg/li_clock-9.svg";
// import LogoComponent from "./LogoComponent";

function FooterComponent() {
  return (
    <Box className="nav_bar">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingLeft: "60px",
          paddingRight: "60px",
        }}
      >
        <Box sx={{ paddingTop: "40px", alignItems: "center" }}>
          {/* <LogoComponent /> */}

          <Typography
            component="p"
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Address />
            <Typography component="span" sx={{ paddingLeft: "7px" }}>
              Address:
            </Typography>
            <Typography component="span">1762 School House Road</Typography>
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            <CallPhone />
            <Typography component="span" sx={{ paddingLeft: "7px" }}>
              Call Us:
            </Typography>
            <Typography component="span">1233-777</Typography>
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            <Email />
            <Typography component="span" sx={{ paddingLeft: "7px" }}>
              Email:
            </Typography>
            <Typography component="span">groceyish@contact.com</Typography>
          </Typography>
          <Typography component="p">
            <WorkHoure />
            <Typography component="span" sx={{ paddingLeft: "7px" }}>
              Work Hours:
            </Typography>
            <Typography component="span">
              8:00 - 20:00, Sunday - Thursday
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "40px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Account
          </Typography>
          <Typography
            component="p"
            sx={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            Wishlist
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Cart
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Track Order
          </Typography>
          <Typography component="p">Shipping Details</Typography>
        </Box>
        {/*  */}
        <Box sx={{ paddingTop: "40px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Useful links
          </Typography>
          <Typography
            component="p"
            sx={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            About Us
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Conact
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Hot deals
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Promotions
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            New products
          </Typography>
        </Box>
        {/*  */}
        <Box sx={{ paddingTop: "40px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Help Center
          </Typography>
          <Typography
            component="p"
            sx={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            Payments
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Refund
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Checkout
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Shipping
          </Typography>
          <Typography component="p" sx={{ paddingBottom: "20px" }}>
            Q&A
          </Typography>
          <Typography component="p">Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FooterComponent;
