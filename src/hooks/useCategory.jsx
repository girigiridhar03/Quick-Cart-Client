import { getAllCategories, getAllSubCategories } from "@/api/category.api";
import { setSelectedCategory } from "@/store/slices/categorySlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCategory = () => {
  const {
    loading,
    categories,
    subCategories,
    selectedCategory,
    subCategoriesLoading,
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
  };

  return {
    loading,
    categories,
    subCategories,
    selectedCategory,
    subCategoriesLoading,
    setSelectectedCategoryId,
    fetchAllCategories,
    fetchAllSubCategories,
  };
};

export default useCategory;
