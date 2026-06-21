import React from "react";
import ReviewSummaryCard from "./ReviewSummaryCard";
import WriteReviewDialog from "../../CusomDialogs/WriteReviewDialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleChange, handleStar } from "@/utils/utils";

const ReviewHeader = ({
  user,
  summary,
  addLoading,
  openState,
  reviewDetailsState,
  reviewFilterStates,
  handleChanges,
}) => {
  const { open, setOpen } = openState;
  const { reviewDetails, setReviewDetails } = reviewDetailsState;
  const { reviewFilters, setSelectedReviewFilters } = reviewFilterStates;
  const { handleFileDelete, handlePostReview } = handleChanges;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">Customer Reviews</h2>
          <p className="uppercase text-[#8A8A8A] font-bold text-[10px] md:text-[13px] ">
            Verified shopper feedback and ratings
          </p>
        </div>
        {!summary?.isMyReview && (
          <WriteReviewDialog
            TriggerButton={({ children, ...props }) => (
              <Button
                {...props}
                variant="outline"
                className="text-primary hover:text-primary w-auto h-15 text-[12px] md:text-[14px] lg:text-[16px] shadow font-bold rounded-2xl cursor-pointer md:px-7"
                title="Report this product"
              >
                {children}
              </Button>
            )}
            TriggerJsx={() => (
              <>
                <Plus className="h-20" />
                WRITE A REVIEW
              </>
            )}
            title={"Share Your Experience"}
            reviewDetails={reviewDetails}
            addLoading={addLoading}
            open={open}
            setOpen={setOpen}
            setReviewDetails={setReviewDetails}
            onChange={(e) => handleChange(e, setReviewDetails)}
            handleFileDelete={handleFileDelete}
            onPost={handlePostReview}
            handleStar={(star) => handleStar(star, setReviewDetails)}
          />
        )}
      </div>
      <ReviewSummaryCard
        user={user}
        summary={summary}
        reviewFilters={reviewFilters}
        setSelectedReviewFilters={setSelectedReviewFilters}
      />
    </div>
  );
};

export default ReviewHeader;
