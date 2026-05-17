import React from "react";
import ProductsGrid from "./ProductsGrid";
import useProduct from "@/hooks/useProduct";
import { Brands, PriceRange, SortCard, SubCategoriesTypes } from "./FilterCards";

const ProductLayout = ({ selectedCategory }) => {
  const { productLoading, products, setSelectedProduct, productPagination } =
    useProduct();

  return (
    <div className="flex flex-row gap-10 shrink-0">
      <aside className="w-72 sticky top-0">
        <div className="space-y-10" >
          <SortCard />
          <PriceRange />
          <SubCategoriesTypes />  
          <Brands />
        </div>
      </aside>
      <section className="flex-1">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold capitalize">
              {selectedCategory?.name ?? "All Products"}
            </h2>
            <p className="text-[.8rem] font-semibold text-[#8A8A8A]">
              {productPagination?.total ?? 0} RESULTS FOUND
            </p>
          </div>
          <ProductsGrid
            productLoading={productLoading}
            products={products}
            productPagination={productPagination}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductLayout;
