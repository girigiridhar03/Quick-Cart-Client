import AddProductDrawer from "@/components/admin/AddProductDrawer";
import { CustomHeader } from "@/components/admin/CompUtils";
import useCategory from "@/hooks/useCategory";
import useProduct from "@/hooks/useProduct";
import React, { useEffect } from "react";

const AdminProducts = () => {
  const {
    createProductLoading,
    productLoading,
    brandsLoading,
    products,
    selectedBrand,
    selectedSort,
    selectedProductId,
    productPagination,
    setSelectedBrand,
    setSelectedProduct,
    setSelectedSortName,
    updatedProductItem,
    fetchProducts,
    fetchBrands,
    createProd,
    error,
  } = useProduct();

  const {
    loading,
    subCategoriesLoading,
    categories,
    subCategories,
    selectedCategory,
    selectedSubCategory,
    setSelectectedCategoryId,
    setSelectedSubCategoryId,
    fetchAllCategories,
    fetchAllSubCategories,
    resetCategoryStates,
  } = useCategory();

  useEffect(() => {
    fetchProducts({
      brand: selectedBrand,
      category: selectedCategory?.id ?? null,
      subCategory: selectedSubCategory,
      sortBy: selectedSort ?? null,
    });
  }, [selectedBrand, selectedSort, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    fetchBrands({
      category: selectedCategory?.id ?? null,
      subCategory: selectedSubCategory?.id ?? null,
    });
  }, [selectedCategory, selectedSubCategory]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <CustomHeader
          title={"Inventory Management"}
          description={"Control your catalog visibility and stock levels."}
        />
        <AddProductDrawer
          loading={createProductLoading}
          createProd={createProd}
          categoryObj={{
            categories,
            subCategories,
            fetchSubCategories: fetchAllSubCategories,
          }}
        />
      </div>
    </div>
  );
};

export default AdminProducts;
