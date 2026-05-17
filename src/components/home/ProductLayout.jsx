import React from "react";
import ProductsGrid from "./ProductsGrid";
import { FilterCard } from "./ProductCard";
import useProduct from "@/hooks/useProduct";

const ProductLayout = ({ selectedCategory }) => {
  const { productLoading, products, setSelectedProduct, productPagination } =
    useProduct();

  return (
    <div className="flex flex-row gap-4 shrink-0">
      <aside className="w-72">
        <div>
          <h3 className="text-[11px] text-[#8A8A8A] tracking-[0.2em] mb-4 uppercase ">
            SORT BY
          </h3>
          <div className="space-y-2">
            <FilterCard name={"Popularity"} />
            <FilterCard name={"Popularity"} />
            <FilterCard name={"Popularity"} />
          </div>
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
