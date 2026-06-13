import ProductDetailsCard from "@/components/home/SingleProduct/ProductDetailsCard";
import ReviewerCard from "@/components/home/SingleProduct/ReviewerCard";
import ReviewerFilterCard from "@/components/home/SingleProduct/ReviewerFilterCard";
import ReviewHeader from "@/components/home/SingleProduct/ReviewHeader";
import SingleProductCard from "@/components/home/SingleProduct/SingleProductCard";
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
  } = useProduct();

  const { fetchReviews, fetchReviewSummary } = useReview();

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

  return (
    <section className="mb-5">
      <SingleProductCard
        loading={singleProductLoading}
        product={singleProductDetails}
      />
      <ProductDetailsCard
        loading={singleProductLoading}
        product={singleProductDetails}
      />
      <div className="space-y-10">
        <ReviewHeader />
        <ReviewerFilterCard />
        <ReviewerCard />
      </div>
    </section>
  );
};

export default SingleProduct;
