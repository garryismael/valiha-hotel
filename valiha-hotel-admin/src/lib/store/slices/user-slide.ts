import { User } from "@/domain/entities/user";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { users: User[] } = {
  users: [],
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    editUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.map((user) =>
        user.id != action.payload.id ? user : action.payload
      );
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, editUser, deleteUser } = UserSlice.actions;

export default UserSlice.reducer;
