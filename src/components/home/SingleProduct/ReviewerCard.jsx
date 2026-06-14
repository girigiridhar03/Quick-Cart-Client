import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Flag, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ReviewButton } from "../commonComponents";
import AdminReplyCard from "./AdminReplyCard";
import { format } from "date-fns";
const ReviewerCard = ({ review }) => {
  return (
    <Card className="w-full rounded-3xl px-6 py-8 xl:px-10 gap-6 xl:gap-7">
      <CardHeader className="px-0 flex gap-4">
        <Avatar className="w-13 h-13 rounded-2xl after:rounded-2xl">
          <AvatarImage
            className="rounded-2xl"
            src={review?.userDetails?.profile?.url}
          />
          <AvatarFallback className="rounded-2xl uppercase">
            {review?.userDetails?.username[0]}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-0.5 xl:space-y-1">
          <div className="text-[16px] xl:text-xl font-bold">Deepak Chahar</div>
          <div className="flex gap-2 xl:gap-3 items-center">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`${star <= Math.floor(review.rating) ? "fill-primary text-primary" : "text-gray-300"} w-3 h-3 xl:w-4 xl:h-4`}
                />
              ))}
            </div>
            <p className="font-bold text-[#8A8A8A] text-[12px] ">
              {format(review.createdAt, "d MMM yyyy")}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 space-y-2">
        <h5 className="text-[16px] xl:text-lg font-bold capitalize">
          {review.title}
        </h5>
        <p className="leading-relaxed text-[#444] font-medium text-[13px] xl:text-[16px]">
          {review.body}
        </p>
      </CardContent>
      <Separator />
      <CardFooter className="px-0 flex-col justify-start items-start w-full gap-6">
        <div className="font-bold text-[11px] xl:text-[13px] text-[#8A8A8A] flex items-center gap-2 xl:gap-3">
          HELPFUL?
          <ReviewButton
            text={"Yes"}
            Icon={ThumbsUp}
            handleClick={() => console.log("clicked")}
          />
          <ReviewButton
            text={"No"}
            Icon={ThumbsDown}
            handleClick={() => console.log("clicked")}
          />
          <ReviewButton
            text={"Report"}
            Icon={Flag}
            handleClick={() => console.log("clicked")}
          />
        </div>
        {review?.adminReply?.reply?.length > 0 && <AdminReplyCard adminReply={review?.adminReply} />}
      </CardFooter>
    </Card>
  );
};

export default ReviewerCard;
