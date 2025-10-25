import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Card",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      let newProducts = state.filter((cardProduct) => {
        cardProduct.id !== action.payload;
      });
      return newProducts;
    },
  },
});

export default cartSlice.reducer;

export let { addItem, removeItem } = cartSlice.actions;
