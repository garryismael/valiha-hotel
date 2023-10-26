import { Blog } from "@/domain/entities/blog";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  blogs: Blog[];
} = {
  blogs: [],
};

export const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs } = BlogSlice.actions;

export default BlogSlice.reducer;
