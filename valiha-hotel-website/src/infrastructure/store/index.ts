import { configureStore } from "@reduxjs/toolkit";
import { BookingSlice } from "./slices/booking-slice";
import { BlogSlice } from "./slices/blog-slice";
import { CarSlice } from "./slices/car-slice";

export const store = configureStore({
  reducer: {
    booking: BookingSlice.reducer,
    blog: BlogSlice.reducer,
    car: CarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
