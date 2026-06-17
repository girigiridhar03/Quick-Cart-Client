import {
  addReview,
  deleteReview,
  deleteReviewImage,
  editReview,
  getProductReviews,
  getReviewSummary,
} from "@/api/review.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addLoading: false,
  deleteLoading: false,
  reviewsLoading: false,
  reviewSummaryLoading: false,
  deleteReviewImageLoading: false,
  reviews: [],
  reviewSummary: [],
  selectedReview: null,
  error: null,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setSelectedReview: (state, { payload }) => {
      state.selectedReview = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviewSummary.pending, (state) => {
        state.reviewSummaryLoading = true;
        state.error = null;
      })
      .addCase(getReviewSummary.fulfilled, (state, { payload }) => {
        state.reviewSummaryLoading = false;
        state.reviewSummary = payload?.data;
      })
      .addCase(getReviewSummary.rejected, (state, { payload }) => {
        state.reviewSummaryLoading = false;
        state.error = payload;
      })
      .addCase(getProductReviews.pending, (state) => {
        state.reviewsLoading = true;
        state.error = null;
      })
      .addCase(getProductReviews.fulfilled, (state, { payload }) => {
        state.reviewsLoading = false;
        state.reviews = payload?.data?.reviews;
      })
      .addCase(getProductReviews.rejected, (state, { payload }) => {
        state.reviewsLoading = false;
        state.error = payload;
      })
      .addCase(addReview.pending, (state) => {
        state.addLoading = true;
        state.error = null;
      })
      .addCase(addReview.fulfilled, (state) => {
        state.addLoading = false;
      })
      .addCase(addReview.rejected, (state, { payload }) => {
        state.addLoading = false;
        state.error = payload;
      })
      .addCase(editReview.pending, (state) => {
        state.addLoading = true;
        state.error = null;
      })
      .addCase(editReview.fulfilled, (state) => {
        state.addLoading = false;
      })
      .addCase(editReview.rejected, (state, { payload }) => {
        state.addLoading = false;
        state.error = payload;
      })
      .addCase(deleteReview.pending, (state) => {
        state.deleteLoading = true;
        state.error = null;
      })
      .addCase(deleteReview.fulfilled, (state) => {
        state.deleteLoading = false;
      })
      .addCase(deleteReview.rejected, (state, { payload }) => {
        state.deleteLoading = false;
        state.error = payload;
      })
      .addCase(deleteReviewImage.pending, (state) => {
        state.deleteReviewImageLoading = true;
      })
      .addCase(deleteReviewImage.fulfilled, (state, action) => {
        const { reviewId, imageId } = action.meta.arg;
        state.deleteReviewImageLoading = false;
        state.reviews = state.reviews.map((review) => {
          if (review._id === reviewId) {
            return {
              ...review,
              images: review.images.filter((img) => img._id !== imageId) || [],
            };
          }

          return review;
        });
      })
      .addCase(deleteReviewImage.rejected, (state, { payload }) => {
        state.deleteReviewImageLoading = false;
        state.error = payload;
      }),
});

export const { setSelectedReview } = reviewSlice.actions;

export default reviewSlice.reducer;
