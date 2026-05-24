import { addToCart, getAllCartItems } from "@/api/cart.api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const { cartLoading, cartItems, cartTotal, error } = useSelector(
    (state) => state.cart,
  );
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

  useEffect(() => {
    fetchCartItems();
  }, []);

  return {
    cartLoading,
    cartItems,
    cartTotal,
    error,
    fetchCartItems,
    addCartItem,
  };
};

export default useCart;
