import { configureStore } from "@reduxjs/toolkit";
import { BookingSlice } from "./slices/booking-slice";

export const store = configureStore({
  reducer: {
    booking: BookingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
