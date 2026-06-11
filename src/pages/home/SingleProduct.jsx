import ProductDetailsCard from "@/components/home/SingleProduct/ProductDetailsCard";
import ReviewSummaryCard from "@/components/home/SingleProduct/ReviewSummaryCard";
import SingleProductCard from "@/components/home/SingleProduct/SingleProductCard";
import { Button } from "@/components/ui/button";
import useProduct from "@/hooks/useProduct";
import { Plus } from "lucide-react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { slugId } = useParams();
  const {
    singleProductLoading,
    singleProductDetails,
    fetchSingleProductDetails,
  } = useProduct();

  useEffect(() => {
    if (!slugId) return;
    fetchSingleProductDetails(slugId);
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
      <div className="space-y-5" >
        <div className="flex items-center justify-between" >
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Customer Reviews</h2>
            <p className="uppercase text-[#8A8A8A] font-bold text-[10px] md:text-[13px] ">
              Verified shopper feedback and ratings
            </p>
          </div>
          <Button variant="outline" className="text-primary hover:text-primary h-15 text-[12px] md:text-[14px] lg:text-[16px] shadow font-bold rounded-2xl cursor-pointer md:px-7">
            <Plus className="h-20" />
            WRITE A REVIEW
          </Button>
        </div>
        <ReviewSummaryCard />
      </div>
    </section>
  );
};

export default SingleProduct;
