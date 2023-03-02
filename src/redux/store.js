import { configureStore } from "@reduxjs/toolkit";
import gadgets from "./gadgetSlice";
import cart from "./cartSlice";

export const store = configureStore({
  reducer: {
    gadgets,
    cart,
  },
});
