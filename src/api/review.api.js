import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import {
  handleThunkError,
  handleThunkSuccess,
  handleUnauthorizedRedirect,
} from "@/utils/error";

export const getProductReviews = createAsyncThunk(
  "review/productReviews",
  async (slugId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/review/product/${slugId}`);
      return response?.data;
    } catch (error) {
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to view reviews.",
      });
      if (authError) return authError;

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
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to view reviews.",
      });
      if (authError) return authError;

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
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      dispatch(getProductReviews(slugId));
      dispatch(getReviewSummary(slugId));
      return handleThunkSuccess(response?.data, { showToast: true });
    } catch (error) {
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to manage your reviews.",
      });
      if (authError) return authError;

      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const deleteReview = createAsyncThunk(
  "review/delete",
  async ({ slugId, id }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.delete(`/review/${id}`);
      dispatch(getProductReviews(slugId));
      dispatch(getReviewSummary(slugId));
      return handleThunkSuccess(response?.data, { showToast: true });
    } catch (error) {
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to manage your reviews.",
      });
      if (authError) return authError;

      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const editReview = createAsyncThunk(
  "review/edit",
  async ({ slugId, id, body }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.patch(`/review/${id}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(getProductReviews(slugId));
      return handleThunkSuccess(response?.data, { showToast: true });
    } catch (error) {
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to manage your reviews.",
      });
      if (authError) return authError;

      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const deleteReviewImage = createAsyncThunk(
  "/review/deleteImage",
  async ({ reviewId, imageId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/review/${reviewId}/image/${imageId}`,
      );
      return handleThunkSuccess(response?.data, { showToast: true });
    } catch (error) {
      const authError = handleUnauthorizedRedirect(error, rejectWithValue, {
        message: "Please log in to manage your reviews.",
      });
      if (authError) return authError;

      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);
