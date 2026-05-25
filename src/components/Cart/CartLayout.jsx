import React from "react";
import CartItemCard from "./CartItemCard";
import OrderSummary from "./OrderSummary";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const CartLayout = ({
  cartLoading,
  cartItems,
  cartTotal,
  totalDiscount,
  totalMrp,
  error,
}) => {
  return (
    <div className="w-full space-y-10 mt-2">
      <h2 className="text-2xl font-bold space-x-1">
        <span>Your Cart</span>{" "}
        <span className="text-lg text-[#8A8A8A]">(1 items)</span>
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-start gap-7 lg:gap-5 xl:gap-7">
        <Card className="flex-1 space-y-5 w-full lg:w-[60%] xl:w-[65%] py-6 rounded-3xl">
          <CardContent className="w-full px-0">
            {cartItems?.map((item) => (
              <>
                <CartItemCard key={item?._id} item={item} />
                {cartItems?.length !== cartItems?.length && (
                  <Separator className="my-5" />
                )}
              </>
            ))}
          </CardContent>
        </Card>

        <div className="w-full lg:w-[40%]  xl:w-[35%] space-y-5">
          <OrderSummary
            cartTotal={cartTotal}
            totalDiscount={totalDiscount}
            totalMrp={totalMrp}
          />
          <p className="text-[12px] w-[85%] mx-auto text-[#8A8A8A] text-center">
            QuickMart delivers thousands of items in under 10 minutes. By
            placing this
            order, you agree to our policies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartLayout;
