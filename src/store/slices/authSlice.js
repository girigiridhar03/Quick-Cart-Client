import { authLogin, authLogout, authRegister } from "@/api/auth.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null
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
      })
      .addCase(authLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(authLogout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
      }),
});

export default authSlice.reducer;
