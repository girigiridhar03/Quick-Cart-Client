import React, { useEffect, useState } from "react";
import ReviewSummaryCard from "./ReviewSummaryCard";
import WriteReviewDialog from "./WriteReviewDialog";
import { Plus } from "lucide-react";

const ReviewHeader = ({ slugId, summary, postReview }) => {
  const [reviewDetails, setReviewDetails] = useState({
    title: "",
    body: "",
    rating: 0,
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setReviewDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleStar = (star) => {
    setReviewDetails((prev) => ({ ...prev, rating: star }));
  };

  const handlePostReview = async () => {
    try {
      await postReview(slugId, reviewDetails);
      setOpen(false);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (open) return;

    setReviewDetails({
      title: "",
      body: "",
      rating: 0,
    });
  }, [open]);

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
            TriggerJsx={() => (
              <>
                <Plus className="h-20" />
                WRITE A REVIEW
              </>
            )}
            title={"Share Your Experience"}
            reviewDetails={reviewDetails}
            onChange={handleChange}
            onPost={handlePostReview}
            handleStar={handleStar}
            open={open}
            setOpen={setOpen}
          />
        )}
      </div>
      <ReviewSummaryCard summary={summary} />
    </div>
  );
};

export default ReviewHeader;
