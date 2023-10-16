import { Room } from "@/domain/entities/room";
import {
  ClientRequestDto,
  ReservationRequestDto,
} from "@/domain/use-cases/reservation";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ReservationRequestDto = {
  rooms: [],
  checkIn: new Date(),
  checkOut: new Date(),
  parking: false,
  client: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  },
  breakfasts: [],
  shuttles: [],
};

export const BookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setCheckIn: (state, action: PayloadAction<Date>) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action: PayloadAction<Date>) => {
      state.checkOut = action.payload;
    },
    addRoom: (state, action: PayloadAction<Room>) => {
      let rooms: Room[] = [...state.rooms, action.payload];
      state.rooms = rooms;
    },
    setParking: (state, action: PayloadAction<boolean>) => {
      state.parking = action.payload;
    },
    setClient: (state, action: PayloadAction<ClientRequestDto>) => {
      state.client = action.payload;
    },
    removeRoom: (state, action: PayloadAction<Room>) => {
      const rooms = state.rooms.filter((room) => room.id !== action.payload.id);
      state.rooms = rooms;
    },
    clearRooms: (state) => {
      state.rooms = [];
    },
  },
});

export const {
  addRoom,
  clearRooms,
  removeRoom,
  setCheckIn,
  setCheckOut,
  setClient,
  setParking,
} = BookingSlice.actions;

export default BookingSlice.reducer;
