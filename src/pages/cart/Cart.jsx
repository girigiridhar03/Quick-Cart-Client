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
  } = useCart();

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="w-full">
      {cartItems?.length > 0 ? (
        <CartLayout
          cartLoading={cartLoading}
          quantityLoading={quantityLoading}
          deleteLoading={deleteLoading}
          cartItems={cartItems}
          cartTotal={cartTotal}
          totalDiscount={totalDiscount}
          totalMrp={totalMrp}
          error={error}
          descreaseQunatityCount={descreaseQunatityCount}
          fetchCartItems={fetchCartItems}
          deleteCartItem={deleteCartItem}
          addCartItem={addCartItem}
        />
      ) : (
        <NoItems />
      )}
    </div>
  );
};

export default Cart;
