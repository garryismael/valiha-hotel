import { configureStore } from "@reduxjs/toolkit";
import { CategorySlice } from "./slices/category-slice";
import { ReservationSlice } from "./slices/reservation-slice";
import { RoomSlice } from "./slices/room-slice";
import { UserSlice } from "./slices/user-slide";
import { LocationSlice } from "./slices/location-slice";

export const store = configureStore({
  reducer: {
    category: CategorySlice.reducer,
    room: RoomSlice.reducer,
    user: UserSlice.reducer,
    reservation: ReservationSlice.reducer,
    location: LocationSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
