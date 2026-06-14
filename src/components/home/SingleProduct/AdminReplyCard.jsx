import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import React from "react";

const AdminReplyCard = ({ adminReply }) => {
  return (
    <div className="bg-[#FDFDFD] space-y-5 border-2 border-primary/7 p-4 xl:p-6 xl:ml-5 w-full rounded-2xl xl:rounded-3xl border-l-5 border-l-primary">
      <div className="flex items-center gap-4">
        <Badge>QuickMart Official Response</Badge>
        <span className="text-[#8A8A8A] font-bold text-[12px]">
          {format(adminReply?.repliedAt, "d MM yyyy")}
        </span>
      </div>
      <p className="text-[12px] xl:text-[14.5px] text-[#444] font-bold leading-relaxed">
        {adminReply?.reply}
      </p>
    </div>
  );
};

export default AdminReplyCard;
