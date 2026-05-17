import { getAllBrands, getAllProducts } from "@/api/product.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productLoading: false,
  brandsLoading: false,
  error: null,
  products: [],
  brands: [],
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
      })
      .addCase(getAllBrands.pending, (state) => {
        state.brandsLoading = true;
        state.error = null;
      })
      .addCase(getAllBrands.fulfilled, (state, { payload }) => {
        state.brandsLoading = false;
        state.brands = payload.data;
        state.error = null;
      })
      .addCase(getAllBrands.rejected, (state, { payload }) => {
        state.brandsLoading = false;
        state.error = payload;
      }),
});

export const { setSelectedProductId } = productSlice.actions;

export default productSlice.reducer;
