import React from "react";
import CartItemCard from "./CartItemCard";
import OrderSummary from "./OrderSummary";

const CartLayout = ({ cartLoading, cartItems, cartTotal, error }) => {
  return (
    <div className="w-full flex items-start gap-7">
      <div className="flex-1 space-y-5 w-[65%]">
        {cartItems?.map((item) => (
          <CartItemCard key={item?._id} item={item} />
        ))}
      </div>

       <OrderSummary />
    </div>
  );
};

export default CartLayout;
