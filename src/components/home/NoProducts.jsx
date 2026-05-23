import { ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { resetStates } from "@/store/slices/categorySlice";
import {
  setSelectedBrandName,
  setSelectedSort,
} from "@/store/slices/productSlice";

const NoProducts = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-140 flex flex-col gap-10 items-center justify-center">
      <ShoppingCart className="text-[#8A8A8A] h-8 w-8" />
      <div className="text-center space-y-4">
        <h5 className="text-xl font-bold">No matches found</h5>
        <p className="text-[#8A8A8A] tracking-tight leading-5">
          Reset your filters or try a different keyword to <br />
          see more products.
        </p>
      </div>
      <Button
        className="px-8 py-7 rounded-2xl font-bold cursor-pointer"
        onClick={() => {
          dispatch(resetStates());
          dispatch(setSelectedSort("popularity"));
          dispatch(setSelectedBrandName("All"));
        }}
      >
        RESET ALL FILTERS
      </Button>
    </div>
  );
};

export default NoProducts;
