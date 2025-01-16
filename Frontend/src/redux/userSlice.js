import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    signinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  signupStart,
  signupSuccess,
  signupFailure,
  signinStart,
  signinSuccess,
  signinFailure,
  signout,
} = userSlice.actions;

export default userSlice.reducer;
