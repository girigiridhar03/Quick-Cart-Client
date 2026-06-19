import {
  addReview,
  deleteReview,
  deleteReviewImage,
  editReview,
  getProductReviews,
  getReviewSummary,
  reviewHelpful,
} from "@/api/review.api";
import {
  selectedFilters,
  updateReviewHelpful,
} from "@/store/slices/reviewSlice";
import { useDispatch, useSelector } from "react-redux";

const useReview = () => {
  const {
    addLoading,
    deleteLoading,
    reviewsLoading,
    deleteReviewImageLoading,
    reviewHelpfulLoading,
    reviews,
    selectedReview,
    reviewSummary,
    reviewFilters,
    error,
  } = useSelector((state) => state.review);
  const dispatch = useDispatch();

  const fetchReviews = async (slugId, filter = {}) => {
    try {
      await dispatch(getProductReviews({ slugId, filter })).unwrap();
    } catch (error) {
      throw error;
    }
  };

  const fetchReviewSummary = async (slugId) => {
    try {
      await dispatch(getReviewSummary(slugId)).unwrap();
    } catch (error) {
      throw error;
    }
  };

  const postReview = async (slugId, body) => {
    try {
      await dispatch(addReview({ slugId, body })).unwrap();
    } catch (error) {
      throw error;
    }
  };

  const updateReview = async (slugId, id, body) => {
    try {
      await dispatch(editReview({ slugId, id, body })).unwrap();
    } catch (error) {
      throw error;
    }
  };

  const delReview = async (slugId, id) => {
    try {
      await dispatch(deleteReview({ slugId, id })).unwrap();
    } catch (error) {
      throw error;
    }
  };

  const delReviewImg = async (reviewId, imageId) => {
    try {
      await dispatch(deleteReviewImage({ reviewId, imageId })).unwrap();
    } catch (error) {
      throw error;
    }
  };

  const postReviewHelpful = async (slugId, id, body) => {
    dispatch(updateReviewHelpful({ id, action: body.action }));
    try {
      await dispatch(reviewHelpful({ slugId, id, body })).unwrap();
    } catch (error) {
      dispatch(updateReviewHelpful({ id, action: body.action }));
      return error;
    }
  };

  const setSelectedReviewFilters = (filters) => {
    dispatch(selectedFilters(filters));
  };

  return {
    addLoading,
    deleteLoading,
    reviewsLoading,
    deleteReviewImageLoading,
    reviewHelpfulLoading,
    reviews,
    selectedReview,
    reviewFilters,
    reviewSummary,
    error,
    fetchReviews,
    fetchReviewSummary,
    postReview,
    updateReview,
    delReview,
    delReviewImg,
    postReviewHelpful,
    setSelectedReviewFilters,
  };
};

export default useReview;
