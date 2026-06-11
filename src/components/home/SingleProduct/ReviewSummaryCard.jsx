import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, Star } from "lucide-react";
import React from "react";
import { ReviewProgress } from "../commonComponents";

const ReviewSummaryCard = () => {
  return (
    <Card className="w-full rounded-3xl py-5 px-3 lg:p-8">
      <CardContent className="flex flex-col lg:flex-row  lg:items-stretch gap-10 px-0">
        {/* left */}
        <section className="flex-1 text-center lg:text-left">
          <div className="space-y-3 w-full">
            <div className="text-5xl md:text-6xl font-bold">4.9</div>
            <div className="flex items-center justify-center lg:justify-start gap-1">
              {[1, 2, 3, 4, 5].map(() => (
                <Star className="fill-primary text-primary w-5 h-5 lg:w-6 lg:h-6" />
              ))}
            </div>
            <div className="text-[#8A8A8A] font-semibold text-[13px] lg:text-[16px]">
              Based on 142 verified reviews
            </div>
            <div className="bg-green-50 border-green-100 text-[#00B894] rounded-xl text-[14px] py-1.5 px-4 font-bold w-auto inline-flex gap-1.5 items-center">
              <CircleCheck className="w-4 h-4" />
              <span>Verified Purchases</span>
            </div>
          </div>
        </section>
        {/* right */}
        <section className="flex-1 flex gap-4 flex-col">
          <ReviewProgress />
          <ReviewProgress />
          <ReviewProgress />
          <ReviewProgress />
          <ReviewProgress />
        </section>
      </CardContent>
    </Card>
  );
};

export default ReviewSummaryCard;
