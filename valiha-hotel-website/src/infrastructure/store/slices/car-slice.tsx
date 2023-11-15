import { Car } from "@/domain/entities/car";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  cars: Car[];
} = {
  cars: [],
};

export const CarSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
    },
  },
});

export const { setCars } = CarSlice.actions;

export default CarSlice.reducer;
