import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("Wishlist")
    ? JSON.parse(localStorage.getItem("Wishlist"))
    : [],
  wishTotalQuantity: 0,
  wishTotalAmount: 0,
};

const wishlistSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("Wishlist", JSON.stringify(state.cartItems));
    },
    removeFromWish(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItems) => cartItems.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("Wishlist", JSON.stringify(state.cartItems));
    },
    decreaseWish(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItems) => cartItems.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("Wishlist", JSON.stringify(state.cartItems));
    },
    clearWish(state, action) {
      state.cartItems = [];
      localStorage.setItem("Wishlist", JSON.stringify(state.cartItems));
    },

    getTotalsWish(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.wishTotalQuantity = quantity;
      state.wishTotalAmount = total;
    },
  },
});

export const {
  addToWish,
  removeFromWish,
  decreaseWish,
  clearWisht,
  getTotalsWish,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
