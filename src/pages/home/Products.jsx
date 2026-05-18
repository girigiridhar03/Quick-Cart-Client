import Categories from "@/components/home/Categories";
import ProductLayout from "@/components/home/ProductLayout";
import useCategory from "@/hooks/useCategory";

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
      <ProductLayout
        subCategoriesLoading={subCategoriesLoading}
        selectedCategory={selectedCategory}
        selectedSubCategory={selectedSubCategory}
        subCategories={subCategories}
        setSelectedSubCategoryId={setSelectedSubCategoryId}
      />
    </section>
  );
};

export default Products;
