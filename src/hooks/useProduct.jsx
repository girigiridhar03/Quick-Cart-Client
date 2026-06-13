import {
  createProduct,
  getAllBrands,
  getAllProducts,
  getRelatedProducts,
  getSingleProduct,
} from "@/api/product.api";
import {
  setSelectedBrandName,
  setSelectedProductId,
  setSelectedSort,
  updatedProduct,
} from "@/store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useProduct = () => {
  const {
    productLoading,
    brandsLoading,
    createProductLoading,
    singleProductLoading,
    products,
    brands,
    singleProductDetails,
    selectedBrand,
    selectedSort,
    productPagination,
    selectedProductId,
    error,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProducts = async (obj = {}) => {
    try {
      await dispatch(getAllProducts(obj)).unwrap();
    } catch (error) {
      return error;
    }
  };

  const fetchBrands = async ({ category, subCategory }) => {
    try {
      await dispatch(getAllBrands({ category, subCategory })).unwrap();
    } catch (error) {
      return error;
    }
  };

  const fetchSingleProductDetails = async (slugId) => {
    try {
      await dispatch(getSingleProduct(slugId)).unwrap();
    } catch (error) {
      navigate("/", { replace: true });
      return error;
    }
  };
  const createProd = async (formData) => {
    try {
      await dispatch(createProduct(formData)).unwrap();
    } catch (error) {
      return error;
    }
  };

  const fetchRelatedProducts = async (slugId) => {
    try {
      await dispatch(getRelatedProducts(slugId)).unwrap();
    } catch (error) {
      return error;
    }
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

  return {
    productLoading,
    brandsLoading,
    createProductLoading,
    singleProductLoading,
    products,
    brands,
    singleProductDetails,
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
    fetchSingleProductDetails,
    fetchBrands,
    fetchRelatedProducts,
  };
};

export default useProduct;
