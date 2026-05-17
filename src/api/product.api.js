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
          filterObj[key] !== ""
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
      console.log(error);
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong",
      );
    }
  },
);
