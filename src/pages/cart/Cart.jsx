import CartLayout from "@/components/Cart/CartLayout";
import NoItems from "@/components/Cart/NoItems";
import useCart from "@/hooks/useCart";
import React from "react";

const Cart = () => {
  const { cartLoading, cartItems, cartTotal,totalDiscount,totalMrp, error } = useCart();

  return (
    <div className="w-full">
      {cartItems?.length > 0 ? (
        <CartLayout
          cartLoading={cartLoading}
          cartItems={cartItems}
          cartTotal={cartTotal}
          totalDiscount={totalDiscount}
          totalMrp={totalMrp}
          error={error}
        />
      ) : (
        <NoItems />
      )}
    </div>
  );
};

export default Cart;
