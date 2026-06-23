import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import {
  handleThunkError,
  handleThunkSuccess,
  handleUnauthorizedRedirect,
} from "@/utils/error";

export const createReport = createAsyncThunk(
  "report/createReport",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/report", body);
      return handleThunkSuccess(response?.data, { showToast: true });
    } catch (error) {
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to view reviews.",
      });
      if (authError) return authError;

      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);
