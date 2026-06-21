import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, Star } from "lucide-react";
import React from "react";
import { ReviewProgress } from "../commonComponents";

const ReviewSummaryCard = ({
  user,
  summary,
  reviewFilters,
  setSelectedReviewFilters,
}) => {
  return (
    <Card className="w-full rounded-3xl py-5 px-3 lg:p-8">
      <CardContent className="flex flex-col lg:flex-row  lg:items-stretch gap-10 px-0">
        {/* left */}
        <section className="flex-1 text-center lg:text-left">
          <div className="space-y-3 w-full">
            <div className="text-5xl md:text-6xl font-bold">
              {summary?.averageRating?.toFixed(1)}
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`${i <= Math.floor(summary?.averageRating) ? "fill-primary text-primary" : "text-gray-300"}  w-5 h-5 lg:w-6 lg:h-6`}
                />
              ))}
            </div>
            {summary?.totalReviews > 0 ? (
              <>
                <div className="text-[#8A8A8A] font-semibold text-[13px] lg:text-[16px]">
                  Based on {summary?.totalReviews} verified reviews
                </div>
                <div className="bg-green-50 border-green-100 text-[#00B894] rounded-xl text-[14px] py-1.5 px-4 font-bold w-auto inline-flex gap-1.5 items-center">
                  <CircleCheck className="w-4 h-4" />
                  <span>Verified Purchases</span>
                </div>
              </>
            ) : (
              <>
                <div className="text-[#8A8A8A] font-semibold text-[13px] lg:text-[16px]">
                  No reviews posted yet
                </div>
                <div className="bg-orange-50 border-orange-100 text-primary rounded-xl text-[14px] py-1.5 px-4 font-bold w-auto inline-flex gap-1.5 items-center">
                  📣 Be the First!
                </div>
              </>
            )}
          </div>
        </section>
        {/* right */}
        <section className="flex-1 flex gap-4 flex-col">
          {summary?.ratings?.map((item) => (
            <ReviewProgress
              user={user}
              key={item?.rating}
              item={item}
              reviewFilters={reviewFilters}
              setSelectedReviewFilters={setSelectedReviewFilters}
            />
          ))}
        </section>
      </CardContent>
    </Card>
  );
};

export default ReviewSummaryCard;
