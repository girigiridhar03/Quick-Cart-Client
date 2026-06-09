import ProductCard from "./ProductCard";
import ProductCardSkeleton from "../LoadingSkeletons/ProductCardSkeleton";
import NoProducts from "./NoProducts";

const ProductsGrid = ({ product, cart }) => {
  const {
    productLoading,
    products,
    productPagination,
    setSelectedProduct,
    updatedProductItem,
  } = product;

  const {
    quantityLoading,
    deleteLoading,
    descreaseQunatityCount,
    addCartItem,
    deleteCartItem,
  } = cart;

  return (
    <div className="w-full">
      {productLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      ) : products?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              quantityLoading={quantityLoading}
              deleteLoading={deleteLoading}
              setSelectedProduct={setSelectedProduct}
              descreaseQunatityCount={descreaseQunatityCount}
              addCartItem={addCartItem}
              updatedProductItem={updatedProductItem}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </div>
      ) : (
        <NoProducts />
      )}
    </div>
  );
};

export default ProductsGrid;
