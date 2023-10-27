import { configureStore } from "@reduxjs/toolkit";
import { BookingSlice } from "./slices/booking-slice";
import { BlogSlice } from "./slices/blog-slice";

export const store = configureStore({
  reducer: {
    booking: BookingSlice.reducer,
    blog: BlogSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
