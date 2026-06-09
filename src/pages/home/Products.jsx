import Categories from "@/components/home/Categories";
import MobileFilters from "@/components/home/MobileFilters";
import ProductLayout from "@/components/home/ProductLayout";
import useCart from "@/hooks/useCart";
import useCategory from "@/hooks/useCategory";
import useProduct from "@/hooks/useProduct";
import { useEffect } from "react";

const Products = () => {
  const {
    categories,
    loading,
    subCategoriesLoading,
    selectedCategory,
    selectedSubCategory,
    subCategories,
    setSelectectedCategoryId,
    setSelectedSubCategoryId,
    fetchAllSubCategories,
    resetCategoryStates,
  } = useCategory();

  const {
    productLoading,
    products,
    brands,
    selectedBrand,
    selectedSort,
    productPagination,
    setSelectedBrand,
    setSelectedProduct,
    setSelectedSortName,
    updatedProductItem,
    fetchProducts,
    fetchBrands,
  } = useProduct();

  const {
    quantityLoading,
    deleteLoading,
    descreaseQunatityCount,
    addCartItem,
    deleteCartItem,
  } = useCart();

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
    <section>
      <Categories
        categories={categories}
        loading={loading}
        selectedCategory={selectedCategory}
        setSelectectedCategoryId={setSelectectedCategoryId}
        fetchAllSubCategories={fetchAllSubCategories}
        resetStates={resetCategoryStates}
      />
      <MobileFilters
        category={{
          loading,
          subCategoriesLoading,
          categories,
          subCategories,
          selectedCategory,
          selectedSubCategory,
          setSelectedSubCategoryId,
          setSelectectedCategoryId,
          fetchAllSubCategories,
          resetCategoryStates,
        }}
        product={{
          brands,
          selectedBrand,
          setSelectedBrand,
        }}
      />
      <ProductLayout
        product={{
          productLoading,
          products,
          productPagination,
          brands,
          selectedBrand,
          selectedSort,
          setSelectedProduct,
          setSelectedSortName,
          setSelectedBrand,
          updatedProductItem,
        }}
        category={{
          subCategoriesLoading,
          subCategories,
          selectedCategory,
          selectedSubCategory,
          setSelectedSubCategoryId,
        }}
        cart={{
          quantityLoading,
          deleteLoading,
          descreaseQunatityCount,
          addCartItem,
          deleteCartItem,
        }}
      />
    </section>
  );
};

export default Products;
