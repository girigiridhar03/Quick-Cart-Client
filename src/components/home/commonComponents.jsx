import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Star } from "lucide-react";

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

export const ReviewProgress = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center font-bold text-[17px]">
        <span>5</span>
        <span>
          <Star className="fill-black h-4.5 w-4.5" />
        </span>
      </div>
      <div className="flex-1 bg-[#F7F7F5] rounded-2xl h-2.5">
        <div className="w-[49%] bg-primary rounded-2xl h-full"></div>
      </div>
      <div className="text-[#8A8A8A]">
        <span className="font-bold text-[17px]">49%</span>
        <span className="text-[14px]">(69)</span>
      </div>
    </div>
  );
};
