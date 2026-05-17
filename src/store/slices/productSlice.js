import { getAllProducts } from "@/api/product.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productLoading: false,
  error: null,
  products: [],
  productPagination: {},
  selectedProductId: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProductId: (state, { payload }) => {
      state.selectedProductId = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.productLoading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.productLoading = false;
        state.error = null;
        state.products = payload.data.products;
        state.productPagination = payload.data.pagination;
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        state.productLoading = false;
        state.error = payload;
      }),
});

export const { setSelectedProductId } = productSlice.actions;

export default productSlice.reducer;
