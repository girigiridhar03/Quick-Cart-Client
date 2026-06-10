import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, Star } from "lucide-react";
import React from "react";
import { ReviewProgress } from "../commonComponents";

const ReviewSummaryCard = () => {
  return (
    <Card className="w-full rounded-3xl p-8">
      <CardContent className="flex items-stretch gap-10">
        {/* left */}
        <section className="flex-1" >
          <div className="space-y-3">
            <div className="text-7xl font-bold">4.9</div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(() => (
                <Star className="fill-primary text-primary" />
              ))}
            </div>
            <div className="text-[#8A8A8A] font-semibold text-lg">
              Based on 142 verified reviews
            </div>
            <div className="bg-green-50 border-green-100 text-[#00B894] rounded-xl text-[14px] py-1.5 px-4 font-bold w-auto inline-flex gap-1.5 items-center">
              <CircleCheck className="w-4 h-4" />
              <span>Verified Purchases</span>
            </div>
          </div>
        </section>
        {/* right */}
        <section className="flex-1 flex gap-7 flex-col">
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
