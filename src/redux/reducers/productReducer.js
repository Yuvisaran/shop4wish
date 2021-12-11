import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
  productInfo: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, productInfo: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return { ...state, productInfo: {} };
    default:
      return state;
  }
};
