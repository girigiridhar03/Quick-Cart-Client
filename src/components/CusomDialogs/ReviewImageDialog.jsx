import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";
import { format } from "date-fns";

const ReviewImageDialog = ({ Jsx, review }) => {
  const { title, body, img, rating, createdAt, userDetails } = review;
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="w-15 h-15 lg:w-18 lg:h-18 rounded-2xl overflow-hidden cursor-pointer bg-transparent border-transparent p-0" />
        }
      >
        <Jsx />
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm md:max-w-lg px-5 md:px-10 max-h-180 2xl:max-h-250 overflow-hidden flex flex-col">
        <DialogHeader className="sticky top-0 bg-popover z-10 pt-2 pb-0">
          <DialogTitle className="text-xl md:text-2xl font-bold">
            Review Photo Gallery
          </DialogTitle>
          <Separator className="mt-3" />
        </DialogHeader>

        {/* Body */}
        <div className="space-y-7 overflow-y-auto 2xl:overflow-hidden scrollbar-none flex-1 pb-2">
          <div className="w-full h-100 rounded-2xl overflow-hidden">
            <img
              src={img?.url}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#FDFDFB] border border-gray-200 py-3 px-5 rounded-2xl">
            <div className="flex gap-3 items-center">
              <Avatar className="w-11 h-11 rounded-2xl after:rounded-2xl">
                <AvatarImage
                  className="rounded-2xl"
                  src={userDetails?.profile?.url}
                />
                <AvatarFallback className="rounded-2xl uppercase">
                  {userDetails?.username[0]}
                </AvatarFallback>
              </Avatar>
              <div className="w-full">
                <div className="text-[16px] xl:text-xl font-bold capitalize">
                  {userDetails?.username}
                </div>
                <div className="flex gap-2 xl:gap-3 items-center">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`${star <= Math.floor(rating) ? "fill-primary text-primary" : "text-gray-300"} w-3 h-3 xl:w-4 xl:h-4`}
                      />
                    ))}
                  </div>
                  <p className="font-bold text-[#8A8A8A] text-[12px] ">
                    {format(createdAt, "d MMM yyyy")}
                  </p>
                </div>
              </div>
            </div>
            <Separator className="my-3" />
            <div className="space-y-1" >
              <h6 className="text-[15px] xl:text-lg font-bold capitalize">
                {title}
              </h6>
              <p className="leading-relaxed text-[#444] font-medium text-[12px] xl:text-[16px]">
                {body}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewImageDialog;
