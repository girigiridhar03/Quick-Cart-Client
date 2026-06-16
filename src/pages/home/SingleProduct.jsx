import ProductDetailsCard from "@/components/home/SingleProduct/ProductDetailsCard";
import ReviewerCard from "@/components/home/SingleProduct/ReviewerCard";
import ReviewerFilterCard from "@/components/home/SingleProduct/ReviewerFilterCard";
import ReviewHeader from "@/components/home/SingleProduct/ReviewHeader";
import SingleProductCard from "@/components/home/SingleProduct/SingleProductCard";
import useAuth from "@/hooks/useAuth";
import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
import useReview from "@/hooks/useReview";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

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
    postReview,
    fetchReviews,
    fetchReviewSummary,
  } = useReview();

  const { user } = useAuth();

  const {
    quantityLoading,
    deleteLoading,
    addCartItem,
    deleteCartItem,
    descreaseQunatityCount,
  } = useCart();

  useEffect(() => {
    if (!slugId) return;
    const fetchDetails = async () => {
      try {
        await Promise.allSettled([
          fetchSingleProductDetails(slugId),
          fetchRelatedProducts(slugId),
          fetchReviews(slugId),
          fetchReviewSummary(slugId),
        ]);
      } catch (error) {
        return error;
      }
    };

    fetchDetails();
  }, [slugId]);

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
          postReview={postReview}
          user={user}
        />
        {reviewSummary?.averageRating > 0 && <ReviewerFilterCard />}

        {reviews?.length > 0 && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewerCard key={review._id} review={review} user={user} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleProduct;
