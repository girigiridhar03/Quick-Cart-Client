import { createProduct, getAllBrands, getAllProducts } from "@/api/product.api";
import {
  setSelectedBrandName,
  setSelectedProductId,
  setSelectedSort,
  updatedProduct,
} from "@/store/slices/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProduct = () => {
  const {
    productLoading,
    brandsLoading,
    createProductLoading,
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

  const fetchBrands = async ({ category, subCategory }) => {
    try {
      await dispatch(getAllBrands({ category, subCategory })).unwrap();
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

  const updatedProductItem = ({ productId, quantity }) => {
    dispatch(updatedProduct({ productId, quantity }));
  };

  const createProd = async (formData) => {
    try {
      await dispatch(createProduct(formData)).unwrap();
    } catch {}
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
    fetchBrands({
      category: selectedCategory?.id ?? null,
      subCategory: selectedSubCategory?.id ?? null,
    });
  }, [selectedCategory, selectedSubCategory]);

  return {
    productLoading,
    brandsLoading,
    createProductLoading,
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
    updatedProductItem,
    fetchProducts,
    createProd,
  };
};

export default useProduct;
