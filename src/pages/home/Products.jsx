import Categories from "@/components/home/Categories";
import ProductLayout from "@/components/home/ProductLayout";
import useCategory from "@/hooks/useCategory";
import React from "react";

const Products = () => {
  const {
    categories,
    loading,
    selectedCategory,
    setSelectectedCategoryId,
    fetchAllSubCategories,
  } = useCategory();
  return (
    <section>
      <Categories
        categories={categories}
        loading={loading}
        selectedCategory={selectedCategory}
        setSelectectedCategoryId={setSelectectedCategoryId}
        fetchAllSubCategories={fetchAllSubCategories}
      />
      <ProductLayout selectedCategory={selectedCategory} />
    </section>
  );
};

export default Products;
