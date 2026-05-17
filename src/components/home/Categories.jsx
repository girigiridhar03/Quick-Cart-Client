import { cn } from "@/lib/utils";
import React from "react";

const Categories = ({
  categories,
  loading,
  selectedCategory,
  setSelectectedCategoryId,
  fetchAllSubCategories,
}) => {
  let timer;

  return (
    <div className="hidden lg:block sticky top-18 z-30 bg-bg/80 backdrop-blur-md pb-6">
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-2">
        <button
          onClick={() => setSelectectedCategoryId(null)}
          className={cn(
            "px-6 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 capitalize",
            !selectedCategory
              ? "text-white shadow-sm scale-[1.02] bg-[#ff6b35]"
              : "bg-white hover:border-[#ff6b35]/40 text-[#8A8A8A]",
          )}
        >
          All Categories
        </button>
        {categories?.map((cat) => (
          <button
            key={cat._id}
            onClick={() => {
              setSelectectedCategoryId({ id: cat._id, name: cat.name });
              clearTimeout(timer);
              timer = setTimeout(() => {
                fetchAllSubCategories(cat._id);
              }, 500);
            }}
            style={
              selectedCategory?.id === cat._id
                ? {
                    backgroundColor: `${cat.bgColor}`,
                    borderColor: "#ff6b35",
                  }
                : {}
            }
            className={cn(
              "px-6 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-300 border flex items-center gap-2 capitalize",
              selectedCategory?.id === cat._id
                ? "text-black shadow-sm scale-[1.02]"
                : "bg-white hover:border-[#ff6b35]/40 text-[#8A8A8A]",
            )}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
