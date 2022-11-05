import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToWish,
  clearWish,
  decreaseWish,
  getTotalsWish,
  removeFromWish,
} from "../Context/wishlist";
export const WishlistDropDownCart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { wishTotalAmount } = useSelector((state) => state.wish);
  const wish = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotalsWish());
  }, [wish]);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromWish(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseWish(cartItem));
  };
  const handleAddToCart = (cartItem) => {
    dispatch(addToWish(cartItem));
  };
  const handleClearCart = (cartItem) => {
    dispatch(clearWish(cartItem));
  };
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "capitalize",
          color: "#253D4E",
          width: "inherit",
          fontWeight: "bold",
          textAlign: "left",
          lineHeight: "unset",
          padding: "0px",
        }}
      >
        <Box sx={{ display: "block", alignItems: "center" }}>
          Wishlist
          <Typography
            sx={{
              fontSize: "15px",
              color: "#3BB77E",
              fontWeight: "bold",
              "&hover": {
                background: "white",
              },
            }}
          >
            ${wishTotalAmount}
          </Typography>
        </Box>
        <ExpandMoreIcon id="change" style={{ cursor: "pointer" }} />
      </Button>
      <Menu
        sx={{ width: "60%", padding: "0%", left: "0%" }}
        id="basic-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{
            "&:hover": {
              background: "white",
            },
          }}
        >
          <div className="cart-container" style={{ padding: "10px" }}>
            {wish.cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is currently empty</p>
              </div>
            ) : (
              <div>
                <div className="cart-items">
                  {wish.cartItems &&
                    wish.cartItems.map((cartItem) => (
                      <div className="cart-item" key={cartItem.id}>
                        <div className="cart-product">
                          <img src={cartItem.image} alt={cartItem.name} />
                          <div>
                            <h3>{cartItem.name}</h3>
                            <button
                              onClick={() => handleRemoveFromCart(cartItem)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart-product-price">
                          ${cartItem.price}
                        </div>
                        <div className="cart-product-quantity">
                          <button onClick={() => handleDecreaseCart(cartItem)}>
                            -
                          </button>
                          <div className="count">{cartItem.cartQuantity}</div>
                          <button onClick={() => handleAddToCart(cartItem)}>
                            +
                          </button>
                        </div>
                        <div className="cart-product-total-price">
                          ${cartItem.price * cartItem.cartQuantity}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="cart-summary">
                  <button
                    className="clear-btn"
                    onClick={() => handleClearCart()}
                  >
                    Clear Cart
                  </button>
                  <div className="cart-checkout">
                    <div className="subtotal">
                      <span>Total</span>
                      <span className="amount">${wish.cartTotalAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </MenuItem>
      </Menu>
    </Box>
  );
};
