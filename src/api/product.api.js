import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

export const getAllProducts = createAsyncThunk(
  "product/products",
  async (filterObj = {}, { rejectWithValue }) => {
    let endPoint = "/product";

    if (Object.keys(filterObj).length > 0) {
      const urlObj = new URLSearchParams();
      Object.keys(filterObj).forEach((key) => {
        if (
          filterObj[key] !== null &&
          filterObj[key] !== undefined &&
          filterObj[key] !== "" &&
          filterObj[key] !== "All"
        ) {
          urlObj.append(key, filterObj[key].toString());
        }
      });

      endPoint += `?${urlObj.toString()}`;
    }
    try {
      const response = await axiosInstance.get(endPoint);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const getAllBrands = createAsyncThunk(
  "product/brands",
  async (obj, { rejectWithValue }) => {
    let endPoint = "/product/brands";

    if (Object.keys(obj).length > 0) {
      const urlObj = new URLSearchParams();

      Object.keys(obj).forEach((key) => {
        if (
          obj[key] !== null &&
          obj[key] !== undefined &&
          obj[key] !== "" &&
          obj[key] !== "All"
        ) {
          urlObj.append(key, obj[key].toString());
        }
      });

      endPoint += `?${urlObj.toString()}`;
    }

    try {
      const response = await axiosInstance.get(endPoint);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);

export const createProduct = createAsyncThunk(
  "product/create-product",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/product", formData);
      return response?.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);
