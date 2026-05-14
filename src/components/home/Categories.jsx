import { cn } from "@/lib/utils";
import React from "react";

export const CATEGORIES = [
  {
    id: "groceries",
    name: "Groceries",
    icon: "🥦",
    color: "#E8F5E9",
    count: 1240,
  },
  {
    id: "dairy",
    name: "Dairy & Eggs",
    icon: "🥛",
    color: "#E3F2FD",
    count: 450,
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: "⚡",
    color: "#FFF3E0",
    count: 890,
  },
  {
    id: "home",
    name: "Home & Kitchen",
    icon: "🏠",
    color: "#F3E5F5",
    count: 1100,
  },
  { id: "beauty", name: "Beauty", icon: "💄", color: "#FCE4EC", count: 670 },
  { id: "snacks", name: "Snacks", icon: "🍫", color: "#FFFDE7", count: 920 },
  {
    id: "beverages",
    name: "Beverages",
    icon: "🥤",
    color: "#E0F7FA",
    count: 580,
  },
  {
    id: "personal-care",
    name: "Personal Care",
    icon: "🧴",
    color: "#F1F8E9",
    count: 740,
  },
  {
    id: "baby-care",
    name: "Baby Care",
    icon: "👶",
    color: "#E1F5FE",
    count: 320,
  },
  {
    id: "pet-supplies",
    name: "Pet Supplies",
    icon: "🐾",
    color: "#EFEBE9",
    count: 150,
  },
];
const Categories = () => {
  return (
   <div className="hidden lg:block sticky top-18 z-30 bg-bg/80 backdrop-blur-md pb-6">
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-2">
        <button
          //   onClick={() => handleCategoryChange("all")}
          className={cn(
            "px-6 py-2.5 rounded-full text-[13px] font-black whitespace-nowrap transition-all border",
            // filters.category === "all"
            //   ? "bg-brand text-white border-brand shadow-lg shadow-brand/20"
            //   : "bg-white border-border hover:border-brand text-muted",
          )}
        >
          All Categories
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            // onClick={() => handleCategoryChange(cat.id)}
            className={cn(
              "px-6 py-2.5 rounded-full text-[13px] font-black whitespace-nowrap transition-all border flex items-center gap-2",
              //   filters.category === cat.id
              //     ? "bg-brand text-white border-brand shadow-lg shadow-brand/20"
              //     : "bg-white border-border hover:border-brand text-muted",
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
