import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import { handleThunkError, handleThunkSuccess } from "@/utils/error";

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
      return handleThunkError(error, rejectWithValue, { showToast: true });
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
      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const createProduct = createAsyncThunk(
  "product/create-product",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return handleThunkSuccess(response?.data, {
        showToast: true,
        successMessage: "Product created successfully",
      });
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: true });
    }
  },
);

export const getSingleProduct = createAsyncThunk(
  "product/single-product",
  async (slugId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/product/${slugId}`);
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: false });
    }
  },
);

export const getRelatedProducts = createAsyncThunk(
  "product/relatedProducts",
  async (slugId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/product/${slugId}/related`);
      return response?.data;
    } catch (error) {
      return handleThunkError(error, rejectWithValue, { showToast: false });
    }
  },
);
