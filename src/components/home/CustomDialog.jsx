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
import { Separator } from "../ui/separator";
import { Flag } from "lucide-react";
import { ReportCard } from "./commonComponents";
import { RadioGroup } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

const CustomDialog = ({
  dialogState,
  header,
  reportDetails,
  previewCard,
  formDetails,
}) => {
  const { open, setOpen } = dialogState;
  const { trigger, title, para = null } = header;
  const { reportTitle, cards } = reportDetails;
  const {
    isProduct = false,
    img = null,
    desc = null,
    brand = null,
    category = null,
    title: prevTitle,
  } = previewCard;
  const { state, setState, handleSubmit } = formDetails;

  const handleDetailsChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setState((prev) => ({ ...prev, description: value }));
    } else {
      setState((prev) => ({ ...prev, description: value.slice(0, 500) }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        {/* Button Trigger */}
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

        <DialogContent className="sm:max-w-sm md:max-w-lg px-5 md:px-10 max-h-175 2xl:max-h-250 overflow-hidden flex flex-col">
          {/* Header */}
          <DialogHeader className="sticky top-0 bg-popover z-10 pt-2 pb-0">
            <DialogTitle className="text-xl md:text-2xl font-bold">
              {title}
            </DialogTitle>
            {para && <DialogDescription>{para}</DialogDescription>}
            <Separator className="mt-3" />
          </DialogHeader>

          {/* Body */}
          <div className="space-y-7 overflow-y-auto 2xl:overflow-hidden scrollbar-none flex-1 pb-2">
            <div className="flex flex-col w-full items-center gap-5">
              <div className="w-15 h-15 bg-red-200 text-red-500 flex items-center justify-center rounded-full">
                <Flag />
              </div>
              <p className="text-[#8A8A8A] font-bold text-center text-[14px] md:text-[16px]">
                Help us keep QuickMart safe. Your report
                <br /> is anonymous.
              </p>
            </div>

            {/* Preview Card */}
            <div className="flex items-center bg-[#FCFDFD] border border-[#8fa1b928] p-4 gap-3.5 rounded-2xl">
              <div className="w-10 h-10 overflow-hidden rounded-lg">
                {isProduct && img && (
                  <img src={img} className="w-full h-full object-contain" />
                )}
              </div>
              <div>
                <div className="font-bold">{prevTitle}</div>
                {isProduct && brand && category && (
                  <div className="text-[#8A8A8A] font-bold capitalize">
                    {brand} • {category}
                  </div>
                )}
              </div>
            </div>

            {/* Report Cards */}
            <div className="space-y-3">
              <p className="uppercase text-[#8A8A8A] font-bold text-[13px] px-2">
                {reportTitle}
              </p>
              <RadioGroup
                value={state.reason}
                onValueChange={(value) =>
                  setState((prev) => ({ ...prev, reason: value }))
                }
                className="grid-cols-2 w-full"
              >
                {cards.map((report) => (
                  <ReportCard
                    key={report.htmlFor}
                    emoji={report.emoji}
                    title={report.title}
                    desc={report.description}
                    htmlFor={report.htmlFor}
                    value={report.value}
                  />
                ))}
              </RadioGroup>
            </div>

            {/* Optional Textarea */}
            <div className="space-y-3 w-full px-2">
              <div className="flex items-center justify-between w-full text-[#8A8A8A] font-bold text-[13px]">
                <p className="uppercase ">Additional details (Optional)</p>
                <p>{state.description.length}/500</p>
              </div>
              <Textarea
                className="bg-[#F7F7F5] font-bold resize-none h-30 rounded-2xl focus:bg-white"
                placeholder="Describe the issue in more detail..."
                value={state.description}
                onChange={handleDetailsChange}
              />
            </div>

            {/* Footer */}
            <DialogFooter>
              <Button
                className="flex-1 h-12 2xl:h-15 2xl:text-lg cursor-pointer rounded-xl"
                disabled={
                  state.reason.length === 0 &&
                  (state.reason.length === 0 || state.description.length === 0)
                }
                onClick={handleSubmit}
              >
                SUBMIT REPORT
              </Button>
              <DialogClose
                render={<Button variant="outline" />}
                className="flex-1 h-12 2xl:h-15 2xl:text-lg cursor-pointer rounded-xl"
                onClick={() => setState({ reason: "", description: "" })}
              >
                CANCEL
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default CustomDialog;
