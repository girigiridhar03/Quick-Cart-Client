import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartLoading: false,
  cartItems: [],
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
//   extraReducers: (builder) => builder.addCase(),
});

export default cartSlice.reducer