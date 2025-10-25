import { configureStore } from "@reduxjs/toolkit";
import cardSliceReducer from "./cardSlice";

export const store = configureStore({
  reducer: {
    card: cardSliceReducer,
  },
});
