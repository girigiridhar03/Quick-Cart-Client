import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

export const getAllCategories = createAsyncThunk(
  "category/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/category");
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const getAllSubCategories = createAsyncThunk(
  "category/subcategories",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/category/subcategory/${categoryId}`,
      );
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);
