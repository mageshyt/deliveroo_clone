import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./basket/basket.slice";

export const store = configureStore({
  reducer: {
    cart: BasketReducer,
  },
});
