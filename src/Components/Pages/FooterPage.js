import { Box } from "@mui/material";
import React from "react";
import LogoComponents from "../LogoComponents";
import { ReactComponent as Address } from "../../Images/Svg/li_map-pin.svg";
import { ReactComponent as CallPhone } from "../../Images/Svg/li_phone.svg";
import { ReactComponent as Email } from "../../Images/Svg/li_mail.svg";
import { ReactComponent as WorkHoure } from "../../Images/Svg/li_clock-9.svg";

function FooterPage() {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <LogoComponents />
          <p>
            <Address />
            <span>Address:</span>
            <span>1762 School House Road</span>
          </p>
          <p>
            <CallPhone />
            <span>Call Us:</span>
            <span>1233-777</span>
          </p>
          <p>
            <Email />
            <span>Email:</span>
            <span>groceyish@contact.com</span>
          </p>
          <p>
            <WorkHoure />
            <span>Work Hours:</span>
            <span>8:00 - 20:00, Sunday - Thursday</span>
          </p>
        </Box>
        <Box>
          <h3>Account</h3>
          <p>Wishlist</p>
          <p>Cart</p>
          <p>Track Order</p>
          <p>Shipping Details</p>
        </Box>
        {/*  */}
        <Box>
          <h3>Useful links</h3>
          <p>About Us</p>
          <p>Conact</p>
          <p>Hot deals</p>
          <p>Promotions</p>
          <p>New products</p>
        </Box>
        {/*  */}
        <Box>
          <h3>Help Center</h3>
          <p>Payments</p>
          <p>Refund</p>
          <p>Checkout</p>
          <p>Shipping</p>
          <p>Q&A</p>
          <p>Privacy Policy</p>
        </Box>
      </Box>
    </Box>
  );
}

export default FooterPage;
