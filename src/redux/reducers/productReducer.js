import { ActionType } from "../constant/actionType";
const initalState = {
  products: [],
};

export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
