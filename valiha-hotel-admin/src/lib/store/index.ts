import { configureStore } from "@reduxjs/toolkit";
import { CategorySlice } from "./slices/category-slice";

export const store = configureStore({
  reducer: {
    category: CategorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
