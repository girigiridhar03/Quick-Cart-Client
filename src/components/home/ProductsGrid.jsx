import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = ({
  productLoading,
  products,
  setSelectedProduct,
  productPagination,
}) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
