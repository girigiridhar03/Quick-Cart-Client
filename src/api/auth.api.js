import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import { BASE_URL } from "@/utils/constants";
import { handleThunkError, handleThunkSuccess } from "@/utils/error";

export const authRegister = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`${BASE_URL}/user/register`, formData);
      return handleThunkSuccess(response?.data, {
        showToast: true,
        successMessage: "Registration successful",
      });
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const authLogin = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`${BASE_URL}/user/login`, formData);
      return handleThunkSuccess(response?.data, {
        showToast: true,
        successMessage: "Login successful",
      });
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const authLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/logout");
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);
