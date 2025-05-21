import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    signinSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    signinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.payload = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { signinStart, signinSuccess, signinFailure, signOut } =
  userSlice.actions;

export default userSlice.reducer;
