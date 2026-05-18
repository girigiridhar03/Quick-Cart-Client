import React from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../LoadingSkeletons/ProductCardSkeleton";

const ProductsGrid = ({
  productLoading,
  products,
  setSelectedProduct,
  productPagination,
}) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {productLoading
        ? Array.from({ length: 3 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        : products?.length > 0 &&
          products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
    </div>
  );
};

export default ProductsGrid;
