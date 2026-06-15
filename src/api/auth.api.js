import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import { BASE_URL } from "@/utils/constants";
import {
  handleThunkError,
  handleThunkSuccess,
  handleUnauthorizedRedirect,
} from "@/utils/error";

export const authRegister = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `${BASE_URL}/user/register`,
        formData,
      );
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
      const response = await axiosInstance.post(
        `${BASE_URL}/user/login`,
        formData,
      );
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
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to continue.",
      });
      if (authError) return authError;

      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const userDetails = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/me");
      return response?.data;
    } catch (error) {
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to continue.",
      });
      if (authError) return authError;

      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);
