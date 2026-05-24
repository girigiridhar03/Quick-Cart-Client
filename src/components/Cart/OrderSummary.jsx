import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ChevronRight, Ticket } from "lucide-react";

const OrderSummary = () => {
  return (
    <Card className="w-[35%] rounded-3xl">
      <CardHeader className="gap-5" >
        <h5 className="text-lg font-bold" >Order Summary</h5>
        <Card className="bg-[#F9FAFB] border border-gray-50 px-1 py-0.5 rounded-3xl cursor-pointer">
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
      <CardContent></CardContent>
    </Card>
  );
};

export default OrderSummary;
