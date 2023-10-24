import { Category } from "@/domain/entities/category";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { categories: Category[] } = {
  categories: [],
};

export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    }
  },
});

export const { setCategories } = CategorySlice.actions;

export default CategorySlice.reducer;
