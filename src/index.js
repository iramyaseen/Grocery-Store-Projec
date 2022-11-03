import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productSlice, { productsFetch } from "./Context/productSlice";
import { productApi } from "./Context/productApi";
import cartSlice, { getTotals } from "./Context/cartSlice";
import wishlist, { getTotalsWish } from "./Context/wishlist";
import { wishProductsFetch } from "./Context/wishProductSlice";
import { wishProductApi } from "./Context/wishListProductApi";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    wish: wishlist,
    [productApi.reducerPath]: productApi.reducer,
    [wishProductApi.reducerPath]: wishProductApi.reducer,
  },
  middleware: (getDefulatMiddleware) =>
    getDefulatMiddleware().concat(productApi.middleware),
  // eslint-disable-next-line no-dupe-keys
  middleware: (getDefulatMiddleware) =>
    getDefulatMiddleware().concat(wishProductApi.middleware),
});
store.dispatch(productsFetch());
store.dispatch(getTotals());
store.dispatch(wishProductsFetch());
store.dispatch(getTotalsWish());

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
