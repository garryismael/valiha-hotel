import { Location } from "@/domain/entities/location";
import { Payment } from "@/domain/entities/payment";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { locations: Location[] } = {
  locations: [],
};

export const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
    },
    editLocation: (state, action: PayloadAction<Location>) => {
      state.locations = state.locations.map((Location) =>
        Location.id != action.payload.id ? Location : action.payload
      );
    },
    deleteLocation: (state, action: PayloadAction<string>) => {
      state.locations = state.locations.filter(
        (Location) => Location.id !== action.payload
      );
    },
    editLocationPayment: (state, action: PayloadAction<Payment>) => {
      const index = state.locations.findIndex(
        (Location) => Location.payment.id === action.payload.id
      );
      console.log(index);
      if (index >= 0) {
        const Location = state.locations[index];
        Location.payment = action.payload;
        state.locations[index] = Location;
      }
    },
  },
});

export const {
  setLocations,
  editLocation,
  deleteLocation,
  editLocationPayment,
} = LocationSlice.actions;

export default LocationSlice.reducer;
