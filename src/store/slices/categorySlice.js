import { getAllCategories, getAllSubCategories } from "@/api/category.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  categories: [],
  subCategories: [],
  subCategoriesLoading: false,
  selectedCategory: null,
  selectedSubCategory: null,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    setSelectedSubCategory: (state, { payload }) => {
      state.selectedSubCategory = payload;
    },
    resetStates: (state) => {
      state.selectedCategory = null;
      state.selectedSubCategory = null;
      state.subCategories = [];
      state.subCategories = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload?.data;
        state.error = null;
      })
      .addCase(getAllCategories.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAllSubCategories.pending, (state) => {
        state.subCategoriesLoading = true;
        state.subCategoriesLoading = [];
        state.error = null;
      })
      .addCase(getAllSubCategories.fulfilled, (state, { payload }) => {
        state.subCategoriesLoading = false;
        state.subCategories = payload?.data;
        state.error = null;
      })
      .addCase(getAllSubCategories.rejected, (state, { payload }) => {
        state.subCategoriesLoading = false;
        state.error = payload;
      }),
});

export const { setSelectedCategory, setSelectedSubCategory, resetStates } =
  categorySlice.actions;

export default categorySlice.reducer;
