import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Loader, Star } from "lucide-react";

export const ProductHighlightCard = ({ Icon, title, para }) => {
  return (
    <div className="w-full bg-[#FCFDFD] border border-[#8fa1b928] flex items-center p-2 rounded-xl gap-2.5">
      <div className="bg-[#FFF8ED] w-8 h-8 flex items-center justify-center rounded-lg">
        <Icon className="h-1/2 text-primary" />
      </div>
      <div className="text-[11px]">
        <p className="text-[#8FA1B9] font-bold">{title}</p>
        <p className="font-semibold">{para}</p>
      </div>
    </div>
  );
};

export const ProductDetailsHighlightCard = ({ Icon, title, para }) => {
  return (
    <div className="w-full bg-[#FCFDFD] border border-[#8fa1b928] flex items-center justify-between p-4 rounded-xl gap-2.5 shadow">
      <div className="flex items-center gap-2">
        <div className="bg-[#FFF8ED] w-8 h-8 flex items-center justify-center rounded-lg">
          <Icon className="h-1/2 text-primary" />
        </div>
        <p className="text-[#62748E] font-bold text-[12px]">{title}</p>
      </div>
      <p className="font-bold text-[11px] uppercase">{para}</p>
    </div>
  );
};

export const ReportCard = ({ emoji, title, desc, htmlFor, value }) => {
  return (
    <FieldLabel
      htmlFor={htmlFor}
      className="rounded-2xl! overflow-hidden group border-2! hover:border-primary/30! hover:bg-gray-50! cursor-pointer"
    >
      <Field orientation="horizontal">
        <FieldContent>
          <FieldTitle className="flex-col items-start text-[13px] font-bold">
            <span className="text-[16px]">{emoji}</span>
            <span>{title}</span>
          </FieldTitle>
          <FieldDescription className="text-[#8A8A8A] font-bold text-[12px] group-hover:text-primary">
            {desc}
          </FieldDescription>
        </FieldContent>
        <RadioGroupItem value={value} id={htmlFor} />
      </Field>
    </FieldLabel>
  );
};

export const ReviewProgress = ({ item }) => {
  return (
    <div className="grid grid-cols-[45px_1fr_70px] items-center gap-4 rounded-2xl hover:bg-primary/6 cursor-pointer py-2 px-2 transition-all">
      <div className="flex items-center gap-1 font-bold text-[15px]">
        <span>{item.rating}</span>
        <Star className="fill-black w-4 h-4" />
      </div>

      <div className="bg-[#F7F7F5] rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${item.percentage}%` }}
        />
      </div>

      <div className="text-[#8A8A8A] text-right whitespace-nowrap">
        <span className="font-bold text-[15px]">{item.percentage}%</span>
        {item.count > 0 && <span className="text-[14px]">({item.count})</span>}
      </div>
    </div>
  );
};

//  border-2 border-primary/15 shadow cursor-pointer

export const ReviewButton = ({
  text,
  action,
  handleClick,
  Icon,
  isActive,
  reviewId,
  selectedState,
  disabled = false,
}) => {
  const isLoading =
    disabled &&
    reviewId === selectedState.id &&
    selectedState.action === action;
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`border-2 ${isActive ? "text-primary border-primary" : "text-[#8A8A8A] border-transparent"} group bg-[#F7F7F7] font-bold flex items-center text-[13px] rounded-lg xl:rounded-xl hover:border-primary hover:text-primary py-2 px-3 xl:py-2 xl:px-4 cursor-pointer gap-1.5`}
    >
      {isLoading ? (
        <Loader className="animate-spin w-3 h-3" />
      ) : (
        <>
          <span>
            <Icon className="w-3 h-3 xl:w-4 xl:h-4 " />
          </span>
          <span className="text-[11px] xl:text-[12px]">{text}</span>
        </>
      )}
    </button>
  );
};
