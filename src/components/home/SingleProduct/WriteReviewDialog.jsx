import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import React from "react";

const WriteReviewDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="text-primary hover:text-primary w-auto h-15 text-[12px] md:text-[14px] lg:text-[16px] shadow font-bold rounded-2xl cursor-pointer md:px-7"
            title="Report this product"
          />
        }
      >
        <Plus className="h-20" />
        WRITE A REVIEW
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm md:max-w-lg px-5 md:px-10 max-h-175 2xl:max-h-250 overflow-hidden flex flex-col">
        <DialogHeader className="sticky top-0 bg-popover z-10 pt-2 pb-0">
          <DialogTitle className="text-xl md:text-2xl font-bold">
            {/* {title} */}
            Share Your Experience
          </DialogTitle>
          {/* {para && <DialogDescription>{para}</DialogDescription>} */}
          <Separator className="mt-3" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default WriteReviewDialog;
