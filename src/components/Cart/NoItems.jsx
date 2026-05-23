import { ShoppingBag } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetStates } from "@/store/slices/categorySlice";
import {
  setSelectedBrandName,
  setSelectedSort,
} from "@/store/slices/productSlice";

const NoItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="w-full flex flex-col items-center h-100 justify-center gap-12 ">
      <ShoppingBag className="text-[#8A8A8A] h-15 w-15" />
      <div className="text-center space-y-7">
        <h2 className="text-3xl font-bold">Your cart is empty</h2>
        <p className="text-[#8A8A8A] text-sm">
          Looks like you haven't added anything to your cart yet. Let's find
          <br />
          some groceries!
        </p>
        <Button
          className="font-bold px-7 py-6 rounded-2xl cursor-pointer"
          onClick={() => {
            dispatch(resetStates());
            dispatch(setSelectedSort("popularity"));
            dispatch(setSelectedBrandName("All"));
            navigate("/");
          }}
        >
          START SHOPPING
        </Button>
      </div>
    </div>
  );
};

export default NoItems;
