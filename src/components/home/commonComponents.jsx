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
