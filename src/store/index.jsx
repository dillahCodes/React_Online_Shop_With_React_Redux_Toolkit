import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import { loadCartState, saveCartState } from "../util/local-storage";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },

  preloadedState: {
    cart: loadCartState(),
  },
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});
