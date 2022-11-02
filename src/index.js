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
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefulatMiddleware) =>
    getDefulatMiddleware().concat(productApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
