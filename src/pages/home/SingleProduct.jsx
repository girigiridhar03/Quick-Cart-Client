import ProductDetailsCard from "@/components/home/SingleProduct/ProductDetailsCard";
import ReviewerCard from "@/components/home/SingleProduct/ReviewerCard";
import ReviewerFilterCard from "@/components/home/SingleProduct/ReviewerFilterCard";
import ReviewHeader from "@/components/home/SingleProduct/ReviewHeader";
import SingleProductCard from "@/components/home/SingleProduct/SingleProductCard";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
import useReview from "@/hooks/useReview";
import { getFormData } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleProduct = () => {
  const { slugId } = useParams();
  const {
    singleProductLoading,
    singleProductDetails,
    fetchSingleProductDetails,
    fetchRelatedProducts,
    updateSingleProductCount,
  } = useProduct();

  const {
    reviewSummary,
    reviews,
    deleteReviewImageLoading,
    addLoading,
    deleteLoading: deleteRevLoading,
    reviewHelpfulLoading,
    reviewFilters,
    postReview,
    updateReview,
    fetchReviews,
    fetchReviewSummary,
    delReviewImg,
    delReview,
    postReviewHelpful,
    setSelectedReviewFilters,
  } = useReview();

  const { user } = useAuth();

  const {
    quantityLoading,
    deleteLoading,
    addCartItem,
    deleteCartItem,
    descreaseQunatityCount,
  } = useCart();

  const [reviewDetails, setReviewDetails] = useState({
    title: "",
    body: "",
    rating: 0,
    images: [],
  });
  const [open, setOpen] = useState(false);

  const [selectedState, setSelectedState] = useState({
    id: "",
    action: "",
  });

  useEffect(() => {
    if (!slugId) return;
    const fetchDetails = async () => {
      try {
        await Promise.allSettled([
          fetchSingleProductDetails(slugId),
          fetchRelatedProducts(slugId),
          fetchReviewSummary(slugId),
        ]);
      } catch (error) {
        return error;
      }
    };

    fetchDetails();
  }, [slugId]);

  useEffect(() => {
    if (!slugId) return;
    fetchReviews(slugId, reviewFilters);
  }, [slugId, reviewFilters]);

  useEffect(() => {
    if (open) return;

    setReviewDetails({
      title: "",
      body: "",
      rating: 0,
      images: [],
    });
  }, [open]);

  const handleCart = async (action, payload) => {
    try {
      if (action === "add") {
        await addCartItem(payload);
        updateSingleProductCount(
          slugId,
          singleProductDetails?.cartQuantity + 1,
        );
      } else if (action === "remove") {
        if (singleProductDetails?.cartQuantity <= 1) {
          await deleteCartItem(singleProductDetails?._id);
          updateSingleProductCount(slugId, 0);
        } else {
          await descreaseQunatityCount(singleProductDetails?._id);
          updateSingleProductCount(slugId, payload?.body?.quantity);
        }
      }
    } catch (error) {
      return error;
    }
  };

  const handleEditPost = async (id) => {
    const formData = getFormData(reviewDetails);

    try {
      await updateReview(slugId, id, formData);
      setOpen(false);
    } catch (error) {
      return error;
    }
  };
  const handleFileDelete = async (file, id) => {
    if (file?._id) {
      try {
        await delReviewImg(id, file?._id);
      } catch (error) {
        return error;
      }
    }
    setReviewDetails((prev) => ({
      ...prev,
      images: prev.images.filter(
        (item) =>
          !(
            item?.name === file?.name &&
            item?.lastModified === file?.lastModified
          ) || item?.publicId !== file?.publicId,
      ),
    }));
  };

  const handleDeleteReview = async (id) => {
    try {
      await delReview(slugId, id);
    } catch (error) {
      return error;
    }
  };

  const handlePostReview = async () => {
    const formData = getFormData(reviewDetails);
    try {
      await postReview(slugId, formData);
      setOpen(false);
    } catch (error) {
      return error;
    }
  };

  const handleReviewHelpful = async (reviewId, action) => {
    if (!user) {
      toast.warn("login is required");
      return;
    }
    try {
      setSelectedState({ id: reviewId, action });
      postReviewHelpful(slugId, reviewId, { action: action.toLowerCase() });
    } catch (error) {
      return error;
    }
  };

  return (
    <section className="mb-5">
      <SingleProductCard
        loading={singleProductLoading}
        product={singleProductDetails}
        cart={{
          quantityLoading,
          deleteLoading,
          handleCart,
        }}
      />
      <ProductDetailsCard
        loading={singleProductLoading}
        product={singleProductDetails}
      />
      <div className="space-y-10">
        <ReviewHeader
          slugId={slugId}
          summary={reviewSummary}
          user={user}
          addLoading={addLoading}
          openState={{
            open,
            setOpen,
          }}
          reviewDetailsState={{
            reviewDetails,
            setReviewDetails,
          }}
          handleChanges={{
            handleFileDelete,
            handlePostReview,
          }}
        />
        {reviewSummary?.averageRating > 0 && (
          <ReviewerFilterCard
            reviewFilterStates={{
              reviewFilters,
              setSelectedReviewFilters,
            }}
          />
        )}

        {reviews?.length > 0 && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewerCard
                key={review._id}
                review={review}
                user={user}
                loadings={{
                  deleteRevLoading,
                  delReviewImgLoading: deleteReviewImageLoading,
                  addLoading,
                  reviewHelpfulLoading,
                }}
                openState={{
                  open,
                  setOpen,
                }}
                reviewDetailsState={{
                  reviewDetails,
                  setReviewDetails,
                }}
                selectedStates={{
                  selectedState,
                }}
                handleChanges={{
                  onPost: () => handleEditPost(review._id),
                  handleFileDelete: (file) =>
                    handleFileDelete(file, review._id),
                  handleDeleteReview,
                  handleReviewHelpful,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleProduct;
