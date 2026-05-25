import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

export const getAllCartItems = createAsyncThunk(
  "cart/cartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/cart");
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/cart/${id}`, body);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const descreaseQuantity = createAsyncThunk(
  "cart/quantityDescrease",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/cart/descrease/${id}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const deleteItem = createAsyncThunk(
  "cart/deleteItem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/cart/${id}`);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);
