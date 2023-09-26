import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: {
    cart,
    pizza,
  },
});
