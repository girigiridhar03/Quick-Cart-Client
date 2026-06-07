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
        categories={categories}
        loading={loading}
        selectedCategory={selectedCategory}
        brands={brands}
        selectedBrand={selectedBrand}
        subCategoriesLoading={subCategoriesLoading}
        subCategories={subCategories}
        setSelectedSubCategoryId={setSelectedSubCategoryId}
        selectedSubCategory={selectedSubCategory}
        setSelectectedCategoryId={setSelectectedCategoryId}
        fetchAllSubCategories={fetchAllSubCategories}
        resetStates={resetCategoryStates}
        setSelectedBrand={setSelectedBrand}
      />
      <ProductLayout
        productLoading={productLoading}
        products={products}
        brands={brands}
        selectedBrand={selectedBrand}
        selectedSort={selectedSort}
        productPagination={productPagination}
        subCategoriesLoading={subCategoriesLoading}
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
        subCategories={subCategories}
        quantityLoading={quantityLoading}
        deleteLoading={deleteLoading}
        setSelectedSubCategoryId={setSelectedSubCategoryId}
        setSelectedBrand={setSelectedBrand}
        setSelectedProduct={setSelectedProduct}
        setSelectedSortName={setSelectedSortName}
        updatedProductItem={updatedProductItem}
        descreaseQunatityCount={descreaseQunatityCount}
        addCartItem={addCartItem}
        deleteCartItem={deleteCartItem}
      />
    </section>
  );
};

export default Products;
