import {
  addReview,
  deleteReview,
  deleteReviewImage,
  editReview,
  getProductReviews,
  getReviewSummary,
  reviewHelpful,
} from "@/api/review.api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addLoading: false,
  deleteLoading: false,
  reviewsLoading: false,
  reviewSummaryLoading: false,
  deleteReviewImageLoading: false,
  reviewHelpfulLoading: false,
  reviews: [],
  reviewSummary: [],
  reviewFilters: {},
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
    updateReviewHelpful: (state, { payload }) => {
      if (!payload?.id) return;

      const review = state.reviews.find((item) => item._id === payload.id);
      if (!review) return;

      if (payload.action.toLowerCase() === "yes") {
        if (review.isHelpYes) {
          review.isHelpYes = false;
          review.helpfulYesCount = Math.max(0, review.helpfulYesCount - 1);
        } else {
          review.isHelpYes = true;
          review.helpfulYesCount += 1;

          if (review.isHelpNo) {
            review.isHelpNo = false;
            review.helpfulNoCount = Math.max(0, review.helpfulNoCount - 1);
          }
        }
      }

      if (payload.action.toLowerCase() === "no") {
        if (review.isHelpNo) {
          review.isHelpNo = false;
          review.helpfulNoCount = Math.max(0, review.helpfulNoCount - 1);
        } else {
          review.isHelpNo = true;
          review.helpfulNoCount += 1;

          if (review.isHelpYes) {
            review.isHelpYes = false;
            review.helpfulYesCount = Math.max(0, review.helpfulYesCount - 1);
          }
        }
      }
    },
    selectedFilters: (state, { payload }) => {
      if (!payload) return;
      state.reviewFilters = payload;
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
      })
      .addCase(reviewHelpful.pending, (state) => {
        state.reviewHelpfulLoading = true;
      })
      .addCase(reviewHelpful.fulfilled, (state) => {
        state.reviewHelpfulLoading = false;
      })
      .addCase(reviewHelpful.rejected, (state, { payload }) => {
        state.reviewHelpfulLoading = false;
        state.error = payload;
      }),
});

export const { setSelectedReview, updateReviewHelpful, selectedFilters } =
  reviewSlice.actions;

export default reviewSlice.reducer;
