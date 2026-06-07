import SingleProductCard from "@/components/home/SingleProductCard";
import useProduct from "@/hooks/useProduct";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

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
      <SingleProductCard />
    </section>
  );
};

export default SingleProduct;
