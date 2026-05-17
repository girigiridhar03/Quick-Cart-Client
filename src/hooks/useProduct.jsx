import { getAllProducts } from "@/api/product.api";
import { setSelectedProductId } from "@/store/slices/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProduct = () => {
  const {
    productLoading,
    products,
    productPagination,
    selectedProductId,
    error,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      await dispatch(getAllProducts()).unwrap();
    } catch {}
  };

  const setSelectedProduct = (id) => {
    dispatch(setSelectedProductId(id));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    productLoading,
    products,
    selectedProductId,
    productPagination,
    error,
    setSelectedProduct,
    fetchProducts,
  };
};

export default useProduct;
