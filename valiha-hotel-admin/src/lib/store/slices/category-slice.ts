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
    },
    editCategory: (state, action: PayloadAction<Category>) => {
      state.categories = state.categories.map((category) =>
        category.id != action.payload.id ? category : action.payload
      );
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

export const { setCategories, addCategory, editCategory, deleteCategory } =
  CategorySlice.actions;

export default CategorySlice.reducer;
