// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.qty++;
      } else {
        state.items.push({ ...newItem, qty: 1 });
      }

      state.totalAmount += newItem.price;
    },
    deleteItem: (state, action) => {
      const id = action.payload.id;
      state.items = state.items.filter((item) => item.id !== id);

      state.totalAmount = state.items.reduce((total, item) => total + item.qty * item.price, 0);
    },
    incrementQty: (state, action) => {
      const id = action.payload.id;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.qty++;
        state.totalAmount += item.price;
      }
    },
    decrementQty: (state, action) => {
      const id = action.payload.id;
      const item = state.items.find((item) => item.id === id);

      if (item && item.qty === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalAmount = state.items.reduce((total, item) => total + item.qty * item.price, 0);
      } else if (item) {
        item.qty--;
        state.totalAmount = state.items.reduce((total, item) => total + item.qty * item.price, 0);
      }
    },
  },
});

export const { addItem, deleteItem, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
