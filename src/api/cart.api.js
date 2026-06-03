import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import { handleThunkError } from "@/utils/error";

export const getAllCartItems = createAsyncThunk(
  "cart/cartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/cart");
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue);
    }
  },
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/cart/product/${id}/add`,
        body,
      );
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue);
    }
  },
);

export const descreaseQuantity = createAsyncThunk(
  "cart/quantityDescrease",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        `/cart/product/${id}/descrease`,
      );
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue);
    }
  },
);

export const deleteItem = createAsyncThunk(
  "cart/deleteItem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/cart/product/${id}`);
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue);
    }
  },
);
