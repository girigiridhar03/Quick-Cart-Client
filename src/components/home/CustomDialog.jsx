import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "../ui/separator";
import { Flag } from "lucide-react";

const CustomDialog = ({ header }) => {
  const { trigger, title, para = null } = header;
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              className="cursor-pointer"
              title="Report this product"
            />
          }
        >
          {trigger}
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm md:max-w-xl px-10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
            {para && <DialogDescription>{para}</DialogDescription>}
          </DialogHeader>
          <Separator />
          <div className="space-y-7" >
            <div className="flex flex-col w-full items-center gap-5">
              <div className="w-15 h-15 bg-red-200 text-red-500 flex items-center justify-center rounded-full">
                <Flag />
              </div>
              <p className="text-[#8A8A8A] font-bold text-center text-[16px]">
                Help us keep QuickMart safe. Your report
                <br /> is anonymous.
              </p>
            </div>

            <div className="flex items-center bg-[#FCFDFD] border border-[#8fa1b928] p-4 gap-3.5 rounded-2xl">
              <div className="w-10 h-10 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold">Boat Bassheads 100 Earphones</div>
                <div className="text-[#8A8A8A] font-bold">
                  Boat • electronics
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default CustomDialog;
