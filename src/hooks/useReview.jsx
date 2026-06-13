import {
  addReview,
  deleteReview,
  editReview,
  getProductReviews,
  getReviewSummary,
} from "@/api/review.api";
import { useDispatch, useSelector } from "react-redux";

const useReview = () => {
  const {
    addLoading,
    deleteLoading,
    reviewsLoading,
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
      return error;
    }
  };

  const fetchReviewSummary = async (slugId) => {
    try {
      await dispatch(getReviewSummary(slugId)).unwrap();
    } catch (error) {
      return error;
    }
  };

  const postReview = async (slugId, body) => {
    try {
      await dispatch(addReview({ slugId, body })).unwrap();
    } catch (error) {
      return error;
    }
  };

  const updateReview = async (slugId, id, body) => {
    try {
      await dispatch(editReview({ slugId, id, body })).unwrap();
    } catch (error) {
      return error;
    }
  };

  const delReview = async (slugId, id) => {
    try {
      await dispatch(deleteReview({ slugId, id })).unwrap();
    } catch (error) {
      return error;
    }
  };

  return {
    addLoading,
    deleteLoading,
    reviewsLoading,
    reviews,
    selectedReview,
    reviewSummary,
    error,
    fetchReviews,
    fetchReviewSummary,
    postReview,
    updateReview,
    delReview,
  };
};

export default useReview;
