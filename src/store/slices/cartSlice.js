import { addToCart, getAllCartItems } from "@/api/cart.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartLoading: false,
  cartItems: [],
  cartTotal: 0,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllCartItems.pending, (state) => {
        state.cartLoading = true;
        state.error = null;
      })
      .addCase(getAllCartItems.fulfilled, (state, { payload }) => {
        state.cartLoading = false;
        state.cartItems = payload?.data?.products ?? [];
        state.cartTotal = payload?.data?.cartTotal ?? 0;
        state.error = null;
      })
      .addCase(getAllCartItems.rejected, (state, { payload }) => {
        state.cartLoading = false;
        state.error = payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.cartLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.cartLoading = false;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.cartLoading = false;
        state.error = payload;
      }),
});

export default cartSlice.reducer;
