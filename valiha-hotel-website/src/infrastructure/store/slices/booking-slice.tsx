import { Room } from "@/domain/entities/room";
import {
  ClientRequestDto,
  ReservationRequestDto,
} from "@/domain/use-cases/reservation";
import { dateToString } from "@/infrastructure/utils/date";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ReservationRequestDto = {
  rooms: [],
  checkIn: dateToString(new Date()),
  checkOut: dateToString(new Date()),
  parking: false,
  pax: 1,
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
    setCheckIn: (state, action: PayloadAction<string>) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action: PayloadAction<string>) => {
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
