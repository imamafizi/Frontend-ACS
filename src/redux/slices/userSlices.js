import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    id: null,
    username: "",
    email: "",
  },
  reducers: {
    loginAction: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logoutAction: (state) => {
      state.id = "";
      state.username = "";
      state.email = "";
      state.token = "";
    },
  },
});

export const { loginAction, logoutAction } = usersSlice.actions;

export default usersSlice.reducer;
