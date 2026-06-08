import ProductDetailsCard from "@/components/home/SingleProduct/ProductDetailsCard";
import SingleProductCard from "@/components/home/SingleProduct/SingleProductCard";
import useProduct from "@/hooks/useProduct";
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
    <section>
      <SingleProductCard
        loading={singleProductLoading}
        product={singleProductDetails}
      />
      <ProductDetailsCard
        loading={singleProductLoading}
        product={singleProductDetails}
      />
    </section>
  );
};

export default SingleProduct;
