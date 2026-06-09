import {
  authLogin,
  authLogout,
  authRegister,
  userDetails,
} from "@/api/auth.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(authLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(authLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
      })
      .addCase(authRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authRegister.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(authRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
      })
      .addCase(authLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(authLogout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(userDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload?.data;
        state.isAuthenticated = true;
      })
      .addCase(userDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
        state.user = null;
      }),
});

export default authSlice.reducer;
