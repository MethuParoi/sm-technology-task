import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: null | boolean;
  token: null | string;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.user = true; // Mark the user as logged in
    },
    logout: (state) => {
      state.token = null;
      state.user = false;
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice;
