import { LayoutGrid } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Slider } from "../ui/slider";

export const SortCard = () => {
  return (
    <Card className="py-5 gap-1 rounded-3xl">
      <CardHeader className="flex items-center gap-2 text-[#8a8a8a] text-[10px] tracking-[0.2em] mb-4 uppercase font-semibold py-0 px-4">
        <span>
          <LayoutGrid className="h-3 w-3" />
        </span>
        SORTY BY
      </CardHeader>
      <CardContent className="py-0 flex flex-col px-4">
        {[
          "Popularity",
          "Price: Low to Hight",
          "Price: High to Low",
          "Newest",
        ].map((item) => (
          <CustomButton key={item} text={item} />
        ))}
      </CardContent>
    </Card>
  );
};

const CustomButton = ({ text }) => {
  return (
    <button className="text-[#8a8a8a] font-semibold text-[0.75rem] text-left transition-all hover:bg-gray-50 hover:text-black px-4 py-2 rounded-lg cursor-pointer">
      {text}
    </button>
  );
};

export const PriceRange = () => {
  return (
    <Card className="py-5 gap-5 rounded-3xl">
      <CardHeader className="flex items-center gap-2  py-0 px-4 justify-between">
        <h3 className="text-[#8a8a8a] text-[10px] tracking-[0.2em] uppercase font-semibold">
          PRICE RANGE
        </h3>
        <div className="text-[#FF6B35] font-bold text-[12px]">₹0 - ₹2000</div>
      </CardHeader>
      <CardContent className="py-0 flex flex-col px-4 gap-3">
        <Slider
          defaultValue={[75]}
          max={100}
          step={1}
          className="mx-auto w-full max-w-xs"
        />
        <div className="flex items-center justify-between text-[#8A8A8A] text-[9px] font-semibold">
          <div>MIN</div>
          <div>₹2000+</div>
        </div>
      </CardContent>
    </Card>
  );
};

export const Brands = ({ brandsLoading, brands }) => {
  return (
    <Card className="py-5 gap-5 rounded-3xl">
      <CardHeader className="flex items-center gap-2  py-0 px-4 justify-between">
        <h3 className="text-[#8a8a8a] text-[10px] tracking-[0.2em] uppercase font-semibold">
          PRICE RANGE
        </h3>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5 max-h-50 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
        <CustomBrandButton text={"All"} />
        {brands?.map((brand) => (
          <CustomBrandButton key={brand?._id} text={brand?.brand} />
        ))}
      </CardContent>
    </Card>
  );
};

const CustomBrandButton = ({ text }) => {
  return (
    <button className="text-[10px] text-[#8a8a8a] border border-[#d7d5d5] px-3 py-1.5 rounded-lg transition-all bg-white hover:border-[#ff6b35] font-bold cursor-pointer">
      {text}
    </button>
  );
};

export const SubCategoriesTypes = ({ subCategories }) => {
  return (
    <Card className="py-5 gap-5 rounded-3xl">
      <CardHeader className="flex items-center gap-2  py-0 px-4 justify-between">
        <h3 className="text-[#8a8a8a] text-[10px] tracking-[0.2em] uppercase font-semibold">
          PRICE RANGE
        </h3>
      </CardHeader>
      <CardContent className="py-0 flex flex-col px-4 max-h-70 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
        <SubCategoryButton text="All items" />
        {subCategories?.map((category) => {
          return (
            <SubCategoryButton key={category?._id} text={category?.name} />
          );
        })}
      </CardContent>
    </Card>
  );
};

const SubCategoryButton = ({ text }) => {
  return (
    <button className="text-[#8a8a8a] font-semibold text-[0.75rem] text-left transition-all hover:bg-gray-50 hover:text-black px-4 py-2 rounded-lg cursor-pointer capitalize">
      {text}
    </button>
  );
};
