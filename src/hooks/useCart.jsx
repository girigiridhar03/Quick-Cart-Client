import {
  addToCart,
  deleteItem,
  descreaseQuantity,
  getAllCartItems,
} from "@/api/cart.api";
import { setSelectedItemId } from "@/store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const {
    cartLoading,
    quantityLoading,
    deleteLoading,
    cartItems,
    cartTotal,
    totalMrp,
    totalDiscount,
    error,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const fetchCartItems = async () => {
    try {
      await dispatch(getAllCartItems()).unwrap();
    } catch (error) {
      console.log("getCartItems:", error);
    }
  };

  const addCartItem = async ({ id, body }) => {
    try {
      await dispatch(addToCart({ id, body })).unwrap();
    } catch (error) {
      console.log("addToCart: ", error);
    }
  };

  const setSelectedCartitem = (id) => {
    dispatch(setSelectedItemId(id));
  };

  const descreaseQunatityCount = async (id) => {
    await dispatch(descreaseQuantity(id)).unwrap();
  };

  const deleteCartItem = async (id) => {
    await dispatch(deleteItem(id)).unwrap();
  };

  return {
    cartLoading,
    quantityLoading,
    deleteLoading,
    cartItems,
    cartTotal,
    totalDiscount,
    totalMrp,
    error,
    fetchCartItems,
    addCartItem,
    deleteCartItem,
    setSelectedCartitem,
    descreaseQunatityCount,
  };
};

export default useCart;
