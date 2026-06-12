import { Card, CardContent } from "@/components/ui/card";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import React from "react";

const ReviewerFilterCard = () => {
  return (
    <Card className="w-full rounded-3xl py-5 px-4 lg:p-8">
      <CardContent className="px-0">
        <div className="flex flex-col gap-4 md:flex-row w-full items-center md:justify-between" >
          <div
            className="
            w-full
            md:w-1/2
            lg:w-1/3
      flex items-center gap-2.5
      bg-[#F7F7F7]
      rounded-2xl
      border-2 border-transparent
      focus-within:border-primary
      focus-within:bg-white
      py-3 px-4
      transition-all duration-200
    "
          >
            <Search className="w-4 h-4 text-[#8A8A8A]" />

            <input
              type="text"
              placeholder="Search reviews by comments..."
              className="
        flex-1
        bg-transparent
        border-none
        outline-none
        focus:outline-none
        focus:ring-0
        text-[15px]
        font-bold
      "
            />
          </div>
          <div className="flex justify-between md:justify-normal w-full md:w-auto items-center gap-3.5 px-1" >
            <p className="text-[#8A8A8A] font-bold text-[12px]" >SORT: </p>
            <NativeSelect className="md:w-40 rounded-2xl" >
              <NativeSelectOption value="most-recent">
                Most Recent
              </NativeSelectOption>
              <NativeSelectOption value="most-helpful">
                Most helpful
              </NativeSelectOption>
              <NativeSelectOption value="higest-rated">
                Highest Rated
              </NativeSelectOption>
              <NativeSelectOption value="lowest-rated">
                Lowest Rated
              </NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
        <Separator className="my-4" />
      </CardContent>
    </Card>
  );
};

export default ReviewerFilterCard;
