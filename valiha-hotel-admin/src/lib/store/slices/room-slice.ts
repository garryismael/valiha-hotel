import { Room } from "@/domain/entities/room";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { rooms: Room[] } = {
  rooms: [],
};

export const RoomSlice = createSlice({
  name: "Room",
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<Room[]>) => {
      state.rooms = action.payload;
    },
    addRoom: (state, action: PayloadAction<Room>) => {
      state.rooms.push(action.payload);
    },
    editRoom: (state, action: PayloadAction<Room>) => {
      state.rooms = state.rooms.map((room) =>
        room.id != action.payload.id ? room : action.payload
      );
    },
    deleteRoom: (state, action: PayloadAction<string>) => {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload);
    },
  },
});

export const { setRooms, addRoom, editRoom, deleteRoom } = RoomSlice.actions;

export default RoomSlice.reducer;
