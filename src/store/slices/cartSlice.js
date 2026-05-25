import {
  addToCart,
  deleteItem,
  descreaseQuantity,
  getAllCartItems,
} from "@/api/cart.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartLoading: false,
  quantityLoading: false,
  deleteLoading: false,
  cartItems: [],
  cartTotal: 0,
  totalMrp: 0,
  totalDiscount: 0,
  selectedItemId: null,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSelectedItemId: (state, { payload }) => {
      state.selectedItemId = payload;
    },
  },
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
        state.totalDiscount = payload?.data?.totalDiscount ?? 0;
        state.totalMrp = payload?.data?.totalMrp ?? 0;
        state.error = null;
      })
      .addCase(getAllCartItems.rejected, (state, { payload }) => {
        state.cartLoading = false;
        state.error = payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.quantityLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.quantityLoading = false;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.quantityLoading = false;
        state.error = payload;
      })
      .addCase(descreaseQuantity.pending, (state) => {
        state.quantityLoading = true;
        state.error = null;
      })
      .addCase(descreaseQuantity.fulfilled, (state) => {
        state.quantityLoading = false;
        state.error = null;
      })
      .addCase(descreaseQuantity.rejected, (state, { payload }) => {
        state.quantityLoading = false;
        state.error = payload;
      })
      .addCase(deleteItem.pending, (state) => {
        state.deleteLoading = true;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state) => {
        state.deleteLoading = false;
        state.error = null;
      })
      .addCase(deleteItem.rejected, (state, { payload }) => {
        state.deleteLoading = false;
        state.error = payload;
      }),
});

export const { setSelectedItemId } = cartSlice.actions;

export default cartSlice.reducer;
