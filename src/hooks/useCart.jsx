import {
  addToCart,
  deleteItem,
  descreaseQuantity,
  getAllCartItems,
} from "@/api/cart.api";
import { removeItem, setSelectedItemId, updateQuantity } from "@/store/slices/cartSlice";
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
      return error;
    }
  };

  const addCartItem = async ({ id, body }) => {
    try {
      await dispatch(addToCart({ id, body })).unwrap();
    } catch (error) {
      return error;
    }
  };

  const setSelectedCartitem = (id) => {
    dispatch(setSelectedItemId(id));
  };

  const descreaseQunatityCount = async (id) => {
    try {
      await dispatch(descreaseQuantity(id)).unwrap();
    } catch (error) {
      return error;
    }
  };

  const deleteCartItem = async (id) => {
    try {
      await dispatch(deleteItem(id)).unwrap();
    } catch (error) {
      return error;
    }
  };

  const updateCartItems = ({ productId, quantity }) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const removeCartItem = (id)=>{
    dispatch(removeItem(id));
  }

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
    updateCartItems,
    removeCartItem
  };
};

export default useCart;
