import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsGrid;
