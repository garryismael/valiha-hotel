import { Breakfast } from "@/domain/entities/breakfast";
import { Payment } from "@/domain/entities/payment";
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
    editBreakfast: (state, action: PayloadAction<BreakfastPayload>) => {
      const index = state.reservations.findIndex(
        (reservation) => reservation.id === action.payload.reservationId
      );
      if (index >= 0) {
        const reservation = state.reservations[index];
        const breakfasts = reservation.breakfasts.map((breakfast) =>
          breakfast.id === action.payload.breakfast.id
            ? action.payload.breakfast
            : breakfast
        );
        reservation.breakfasts = breakfasts;
        state.reservations[index].breakfasts = breakfasts;
      }
    },
    editShuttle: (state, action: PayloadAction<ShuttlePayload>) => {
      const index = state.reservations.findIndex(
        (reservation) => reservation.id === action.payload.reservationId
      );
      if (index >= 0) {
        const reservation = state.reservations[index];
        const shuttles = reservation.shuttles.map((shuttle) =>
          shuttle.id === action.payload.shuttle.id
            ? action.payload.shuttle
            : shuttle
        );
        reservation.shuttles = shuttles;
        state.reservations[index].shuttles = shuttles;
      }
    },
    removeShuttle: (state, action: PayloadAction<ShuttlePayload>) => {
      const index = state.reservations.findIndex(
        (reservation) => reservation.id === action.payload.reservationId
      );
      if (index >= 0) {
        const reservation = state.reservations[index];
        const shuttles = reservation.shuttles.filter(
          (shuttle) => shuttle.id !== action.payload.shuttle.id
        );
        reservation.shuttles = shuttles;
        state.reservations[index].shuttles = shuttles;
      }
    },
    removeBreakfast: (state, action: PayloadAction<BreakfastPayload>) => {
      const index = state.reservations.findIndex(
        (reservation) => reservation.id === action.payload.reservationId
      );
      if (index >= 0) {
        const reservation = state.reservations[index];
        const breakfasts = reservation.breakfasts.filter(
          (breakfast) => breakfast.id !== action.payload.breakfast.id
        );
        reservation.breakfasts = breakfasts;
        state.reservations[index].breakfasts = breakfasts;
      }
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
    editPayment: (state, action: PayloadAction<Payment>) => {
      const index = state.reservations.findIndex(
        (reservation) => reservation.payment.id === action.payload.id
      );
      console.log(index);
      if (index >= 0) {
        const reservation = state.reservations[index];
        reservation.payment = action.payload;
        state.reservations[index] = reservation;
      }
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
  removeBreakfast,
  removeShuttle,
  editBreakfast,
  editShuttle,
  editPayment,
} = ReservationSlice.actions;

export default ReservationSlice.reducer;
