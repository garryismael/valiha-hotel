import { Breakfast } from "@/domain/entities/breakfast";
import { Reservation } from "@/domain/entities/reservation";
import { Shuttle } from "@/domain/entities/shuttle";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { reservations: Reservation[] } = {
  reservations: [],
};

export type ShuttlePayload = {
  reservationId: string;
  shuttle: Shuttle;
};

export type BreakfastPayload = {
  reservationId: string;
  breakfast: Breakfast;
};

export const ReservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setReservations: (state, action: PayloadAction<Reservation[]>) => {
      state.reservations = action.payload;
    },
    addReservation: (state, action: PayloadAction<Reservation>) => {
      state.reservations.push(action.payload);
    },
    addShuttle: (state, action: PayloadAction<ShuttlePayload>) => {
      state.reservations = state.reservations.map((reservation) => {
        if (reservation.id != action.payload.reservationId) {
          return reservation;
        }
        reservation.shuttles.push(action.payload.shuttle);
        return reservation;
      });
    },
    addBreakfast: (state, action: PayloadAction<BreakfastPayload>) => {
      state.reservations = state.reservations.map((reservation) => {
        if (reservation.id != action.payload.reservationId) {
          return reservation;
        }
        reservation.breakfasts.push(action.payload.breakfast);
        return reservation;
      });
    },
    editReservation: (state, action: PayloadAction<Reservation>) => {
      state.reservations = state.reservations.map((reservation) =>
        reservation.id != action.payload.id ? reservation : action.payload
      );
    },
    deleteReservation: (state, action: PayloadAction<string>) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload
      );
    },
  },
});

export const {
  setReservations,
  addReservation,
  editReservation,
  deleteReservation,
  addBreakfast,
  addShuttle,
} = ReservationSlice.actions;

export default ReservationSlice.reducer;
