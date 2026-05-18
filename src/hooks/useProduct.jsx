import { getAllBrands, getAllProducts } from "@/api/product.api";
import {
  setSelectedBrandName,
  setSelectedProductId,
} from "@/store/slices/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProduct = () => {
  const {
    productLoading,
    brandsLoading,
    products,
    brands,
    selectedBrand,
    productPagination,
    selectedProductId,
    error,
  } = useSelector((state) => state.product);
  const { selectedCategory, selectedSubCategory } = useSelector(
    (state) => state.category,
  );
  const dispatch = useDispatch();

  const fetchProducts = async (obj = {}) => {
    try {
      await dispatch(getAllProducts(obj)).unwrap();
    } catch {}
  };

  const fetchBrands = async () => {
    try {
      await dispatch(getAllBrands()).unwrap();
    } catch {}
  };

  const setSelectedProduct = (id) => {
    dispatch(setSelectedProductId(id));
  };

  const setSelectedBrand = (brand) => {
    dispatch(setSelectedBrandName(brand));
  };

  useEffect(() => {
    fetchProducts({
      brand: selectedBrand,
      category: selectedCategory?.id ?? null,
      subCategory: selectedSubCategory,
    });
  }, [selectedBrand, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    fetchBrands();
  }, []);

  return {
    productLoading,
    brandsLoading,
    products,
    brands,
    selectedBrand,
    selectedProductId,
    productPagination,
    error,
    setSelectedProduct,
    setSelectedBrand,
    fetchProducts,
  };
};

export default useProduct;
