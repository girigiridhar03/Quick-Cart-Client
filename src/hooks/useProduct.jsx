import { getAllBrands, getAllProducts } from "@/api/product.api";
import {
  setSelectedBrandName,
  setSelectedProductId,
  setSelectedSort,
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
    selectedSort,
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

  const setSelectedSortName = (sort) => {
    dispatch(setSelectedSort(sort));
  };

  useEffect(() => {
    fetchProducts({
      brand: selectedBrand,
      category: selectedCategory?.id ?? null,
      subCategory: selectedSubCategory,
      sortBy: selectedSort ?? null,
    });
  }, [selectedBrand, selectedSort, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    fetchBrands();
  }, []);

  return {
    productLoading,
    brandsLoading,
    products,
    brands,
    selectedBrand,
    selectedSort,
    selectedProductId,
    productPagination,
    error,
    setSelectedProduct,
    setSelectedBrand,
    setSelectedSortName,
    fetchProducts,
  };
};

export default useProduct;
