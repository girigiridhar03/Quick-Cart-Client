import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ProductCard = () => {
  return (
    <Card className="px-0.5 py-2 gap-3 rounded-3xl shadow-lg">
      <CardHeader className="px-1">
        <div className="w-full h-40 overflow-hidden rounded-2xl relative">
          <Badge className="absolute top-2 left-2 z-10 bg-[#ff6b35] text-[0.65rem]">
            70% OFF
          </Badge>

          <img
            src="https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400&q=80"
            alt="product-image"
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="px-4 py-0">
        <div>
          <div className="text-[0.7rem] text-[#8A8A8A] font-medium tracking-tight">
            AMUL
          </div>
          <p className="text-[0.8rem] font-semibold line-clamp-1 leading-tight">
            Amul Taaza Toned Milk
          </p>
          <div className="text-[0.8rem] text-[#8A8A8A] font-medium mt-1">
            1L
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-0 flex justify-between">
        <div className="flex flex-col">
          <span className="text-sm font-bold">₹54</span>
          <span className="text-[0.65rem] line-through">₹66</span>
        </div>
        <Button
          variant="outline"
          className="h-8 w-17.5 font-semibold text-[0.8rem] rounded-lg text-[#FF6B35] shadow-none hover:text-[#ff6b35]"
        >
          ADD
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
