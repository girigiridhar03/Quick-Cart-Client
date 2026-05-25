import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ChevronRight, MapPin, Ticket } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const OrderSummary = ({ cartTotal, totalMrp, totalDiscount }) => {
  return (
    <Card className="w-full rounded-3xl">
      <CardHeader className="gap-5">
        <h5 className="text-lg font-bold">Order Summary</h5>
        <Card className="bg-[#F9FAFB] border border-gray-50 px-1 py-0.5 rounded-2xl cursor-pointer">
          <CardContent className="flex items-center px-4 py-3 w-full gap-3">
            <div className="bg-[#FFEDD4] w-11 h-11 flex items-center justify-center rounded-xl">
              <Ticket className="w-6 h-6 text-primary" />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="space-y-0.5">
                <div className="font-bold">Apply Coupon</div>
                <p className="text-[12px] text-[#8A8A8A]">
                  Extra saving and cashback
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8A8A8A]" />
            </div>
          </CardContent>
        </Card>
      </CardHeader>

      <div className="w-[90%] mx-auto">
        <Separator />
      </div>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between w-full text-[#8A8A8A]">
          <div className="font-semibold">Item Total (MRP)</div>
          <div className="font-bold line-through">₹{totalMrp?.toLocaleString()}</div>
        </div>
        <div className="flex items-center justify-between w-full font-semibold text-green-600">
          <div>Product Discount</div>
          <div className="font-bold">-₹{totalDiscount}</div>
        </div>
        <div className="flex items-center justify-between w-full text-[#8A8A8A]">
          <div className="font-semibold">Subtotal</div>
          <div className="font-bold">₹{cartTotal?.toLocaleString()}</div>
        </div>
        <div className="flex items-center justify-between w-full text-[#8A8A8A]">
          <div className="font-semibold">Delivery Fee</div>
          <div className="font-bold text-green-600">FREE</div>
        </div>
        <div className="flex items-center justify-between w-full text-[#8A8A8A]">
          <div className="font-semibold">Handling Fee</div>
          <div className="font-bold">₹5</div>
        </div>
      </CardContent>

      <div className="w-[90%] mx-auto">
        <Separator />
      </div>

      <CardFooter className="flex flex-col w-full gap-10">
        {totalDiscount > 0 && (
          <div className="bg-green-100 text-green-700 text-center py-4 px-3 rounded-2xl w-full">
            🎉 You are saving ₹{totalDiscount} on this order!
          </div>
        )}

        <div className="flex items-center justify-between w-full text-xl font-bold">
          <div>Total Payable</div>
          <div className="text-primary">₹{cartTotal?.toLocaleString()}</div>
        </div>
        <Button className="w-full py-7 rounded-2xl font-bold text-[0.95rem] cursor-pointer">
          PROCEED TO CHECKOUT
        </Button>

        <Card className="bg-primary/10 px-1 py-0.5 rounded-2xl cursor-pointer w-full">
          <CardContent className="flex items-start px-4 py-3 w-full gap-3">
            <MapPin className="text-primary w-5 h-5 mt-0.5" />

            <div className="flex items-center justify-between w-full">
              <div className="space-y-0.5">
                <div className="font-bold">Delivery to Home</div>
                <p className="text-[12px] text-[#8A8A8A]">
                  Plot No 4, Sector 7, Visakhapatnam - 530001
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
