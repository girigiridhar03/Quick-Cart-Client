import {
  createProduct,
  getAllBrands,
  getAllProducts,
  getSingleProduct,
} from "@/api/product.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productLoading: false,
  brandsLoading: false,
  createProductLoading: false,
  singleProductLoading: false,
  error: null,
  products: [],
  brands: [],
  productPagination: {},
  singleProductDetails: {},
  selectedProductId: null,
  selectedBrand: "All",
  selectedSort: "popularity",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProductId: (state, { payload }) => {
      state.selectedProductId = payload;
    },
    setSelectedBrandName: (state, { payload }) => {
      state.selectedBrand = payload;
    },
    setSelectedSort: (state, { payload }) => {
      state.selectedSort = payload;
    },
    resetBrandStates: (state) => {
      state.selectedBrand = "All";
      state.brands = [];
    },
    updatedProduct: (state, { payload }) => {
      const product = state.products.find(
        (item) => item?._id === payload.productId,
      );
      if (product) {
        product.cartQuantity = payload.quantity;
      }
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
        state.products = [];
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
      })
      .addCase(createProduct.pending, (state) => {
        state.createProductLoading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.createProductLoading = false;
        state.error = null;
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.createProductLoading = false;
        state.error = payload;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.singleProductLoading = true;
        state.error = null;
      })
      .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
        state.singleProductLoading = false;
        state.singleProductDetails = payload;
      })
      .addCase(getSingleProduct.rejected, (state, { payload }) => {
        state.singleProductLoading = false;
        state.error = payload;
      }),
});

export const {
  setSelectedProductId,
  setSelectedBrandName,
  resetBrandStates,
  setSelectedSort,
  updatedProduct,
} = productSlice.actions;

export default productSlice.reducer;
