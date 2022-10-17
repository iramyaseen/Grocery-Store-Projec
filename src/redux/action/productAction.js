import { ActionType } from "../constant/actionType";

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionType.SELECTED_PRODUCT,
    payload: product,
  };
};
