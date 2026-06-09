import CartLayout from "@/components/Cart/CartLayout";
import NoItems from "@/components/Cart/NoItems";
import useCart from "@/hooks/useCart";
import React, { useEffect } from "react";

const Cart = () => {
  const {
    cartLoading,
    quantityLoading,
    deleteLoading,
    cartItems,
    cartTotal,
    totalDiscount,
    totalMrp,
    error,
    descreaseQunatityCount,
    fetchCartItems,
    deleteCartItem,
    addCartItem,
    updateCartItems,
    removeCartItem,
  } = useCart();

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="w-full">
      {cartItems?.length > 0 ? (
        <CartLayout
          cart={{
            cartLoading,
            quantityLoading,
            deleteLoading,
            cartItems,
            cartTotal,
            totalDiscount,
            totalMrp,
            error,
            descreaseQunatityCount,
            fetchCartItems,
            deleteCartItem,
            addCartItem,
            updateCartItems,
            removeCartItem,
          }}
        />
      ) : (
        <NoItems />
      )}
    </div>
  );
};

export default Cart;
