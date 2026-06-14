import React from "react";
import ReviewSummaryCard from "./ReviewSummaryCard";
import WriteReviewDialog from "./WriteReviewDialog";

const ReviewHeader = ({summary}) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Customer Reviews</h2>
          <p className="uppercase text-[#8A8A8A] font-bold text-[10px] md:text-[13px] ">
            Verified shopper feedback and ratings
          </p>
        </div>
        <WriteReviewDialog />
      </div>
      <ReviewSummaryCard summary={summary} />
    </div>
  );
};

export default ReviewHeader;
