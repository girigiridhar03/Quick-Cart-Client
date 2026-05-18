import { getAllCategories, getAllSubCategories } from "@/api/category.api";
import {
  resetStates,
  setSelectedCategory,
  setSelectedSubCategory,
} from "@/store/slices/categorySlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCategory = () => {
  const {
    loading,
    subCategoriesLoading,
    categories,
    subCategories,
    selectedCategory,
    selectedSubCategory,
  } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const fetchAllCategories = async () => {
    try {
      await dispatch(getAllCategories()).unwrap();
    } catch (error) {}
  };
  const fetchAllSubCategories = async (id) => {
    try {
      await dispatch(getAllSubCategories(id)).unwrap();
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const setSelectectedCategoryId = (obj) => {
    dispatch(setSelectedCategory(obj));
    dispatch(setSelectedSubCategory(null));
  };

  const setSelectedSubCategoryId = (obj) => {
    dispatch(setSelectedSubCategory(obj));
  };

  const resetCategoryStates = () => {
    dispatch(resetStates());
  };

  return {
    loading,
    subCategoriesLoading,
    categories,
    subCategories,
    selectedCategory,
    selectedSubCategory,
    setSelectectedCategoryId,
    setSelectedSubCategoryId,
    fetchAllCategories,
    fetchAllSubCategories,
    resetCategoryStates,
  };
};

export default useCategory;
