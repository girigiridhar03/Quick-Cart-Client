import ProductsGrid from "./ProductsGrid";
import {
  Brands,
  PriceRange,
  SortCard,
  SubCategoriesTypes,
} from "./FilterCards";

const ProductLayout = ({ product, category, cart }) => {
  const {
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
  } = product;

  const {
    subCategoriesLoading,
    subCategories,
    selectedCategory,
    selectedSubCategory,
    setSelectedSubCategoryId,
  } = category;

  const {
    quantityLoading,
    deleteLoading,
    descreaseQunatityCount,
    addCartItem,
    deleteCartItem,
  } = cart;

  return (
    <div className="flex flex-row gap-10 shrink-0">
      <aside className="hidden lg:block lg:w-60 xl:w-72 sticky top-0">
        <div className="space-y-10">
          <SortCard
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSortName}
          />
          <PriceRange />
          {subCategories?.length > 0 && (
            <SubCategoriesTypes
              subCategoriesLoading={subCategoriesLoading}
              selectedCategory={selectedCategory}
              subCategories={subCategories}
              setSelectedSubCategoryId={setSelectedSubCategoryId}
              selectedSubCategory={selectedSubCategory}
            />
          )}

          {brands?.length > 0 && (
            <Brands
              brands={brands}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
            />
          )}
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
            product={{
              productLoading,
              products,
              productPagination,
              setSelectedProduct,
              updatedProductItem,
            }}
            cart={{
              quantityLoading,
              deleteLoading,
              descreaseQunatityCount,
              addCartItem,
              deleteCartItem,
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductLayout;
