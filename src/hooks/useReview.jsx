import {
  addReview,
  deleteReview,
  deleteReviewImage,
  editReview,
  getProductReviews,
  getReviewSummary,
  reviewHelpful,
} from "@/api/review.api";
import { updateReviewHelpful } from "@/store/slices/reviewSlice";
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
    error,
  } = useSelector((state) => state.review);
  const dispatch = useDispatch();

  const fetchReviews = async (slugId) => {
    try {
      await dispatch(getProductReviews(slugId)).unwrap();
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

  return {
    addLoading,
    deleteLoading,
    reviewsLoading,
    deleteReviewImageLoading,
    reviewHelpfulLoading,
    reviews,
    selectedReview,
    reviewSummary,
    error,
    fetchReviews,
    fetchReviewSummary,
    postReview,
    updateReview,
    delReview,
    delReviewImg,
    postReviewHelpful,
  };
};

export default useReview;
