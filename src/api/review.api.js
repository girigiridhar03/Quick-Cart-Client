import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import { handleThunkError, handleThunkSuccess } from "@/utils/error";

export const getProductReviews = createAsyncThunk(
  "review/productReviews",
  async (slugId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/review/product/${slugId}`);
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: false });
    }
  },
);

export const getReviewSummary = createAsyncThunk(
  "review/summary",
  async (slugId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/review/product/${slugId}/reviewsummary`,
      );
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: false });
    }
  },
);

export const addReview = createAsyncThunk(
  "review/add",
  async ({ slugId, body }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.post(
        `/review/product/${slugId}`,
        body,
      );
      dispatch(getProductReviews(slugId));
      return handleThunkSuccess(response?.data, { showToast: true });
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const deleteReview = createAsyncThunk(
  "review/delete",
  async ({slugId,id}, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.delete(`/review/${id}`);
      dispatch(getProductReviews(slugId));
      return handleThunkSuccess(response?.data, { showToast: true });
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const editReview = createAsyncThunk(
  "review/edit",
  async ({slugId, id, body }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.patch(`/review/${id}`, body);
      dispatch(getProductReviews(slugId));
      return handleThunkSuccess(response?.data, { showToast: true });
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);
