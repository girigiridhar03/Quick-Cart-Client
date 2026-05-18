import { LayoutGrid } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Slider } from "../ui/slider";
import { ButtonSkeleton } from "../LoadingSkeletons/ButtonSkeleton";

export const SortCard = ({ selectedSort, setSelectedSort }) => {
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
          {
            label: "Newest",
            value: "newest",
          },
          {
            label: "Price: Low to High",
            value: "price_asc",
          },
          {
            label: "Price: High to Low",
            value: "price_desc",
          },
        ].map((item) => (
          <CustomButton
            key={item.value}
            text={item.label}
            value={item.value}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
        ))}
      </CardContent>
    </Card>
  );
};

const CustomButton = ({ text, value, selectedSort, setSelectedSort }) => {
  return (
    <button
      className={` ${selectedSort === value ? "bg-[#FF6B35] text-white" : "text-[#8a8a8a] hover:bg-gray-50 hover:text-black"} font-semibold text-[0.75rem] text-left transition-all px-4 py-2 rounded-xl cursor-pointer`}
      onClick={() => setSelectedSort(value)}
    >
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

export const Brands = ({ brands, selectedBrand, setSelectedBrand }) => {
  return (
    <Card className="py-5 gap-5 rounded-3xl">
      <CardHeader className="flex items-center gap-2  py-0 px-4 justify-between">
        <h3 className="text-[#8a8a8a] text-[10px] tracking-[0.2em] uppercase font-semibold">
          BRAND
        </h3>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5 max-h-50 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
        <CustomBrandButton
          text={"All"}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
        {brands?.map((brand) => (
          <CustomBrandButton
            key={brand?._id}
            text={brand?.brand}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
        ))}
      </CardContent>
    </Card>
  );
};

const CustomBrandButton = ({ text, selectedBrand, setSelectedBrand }) => {
  return (
    <button
      className={`${selectedBrand === text ? "bg-black text-white" : "bg-white text-[#8a8a8a] border border-[#d7d5d5] hover:border-[#ff6b35]"} text-[10px]   px-3 py-1.5 rounded-lg transition-all   font-bold cursor-pointer`}
      onClick={() => setSelectedBrand(text)}
    >
      {text}
    </button>
  );
};

export const SubCategoriesTypes = ({
  subCategoriesLoading,
  selectedCategory,
  subCategories,
  selectedSubCategory,
  setSelectedSubCategoryId,
}) => {
  return (
    <Card className="py-5 gap-5 rounded-3xl">
      <CardHeader className="flex items-center gap-2  py-0 px-4 justify-between">
        <h3 className="text-[#8a8a8a] text-[10px] tracking-[0.2em] uppercase font-semibold">
          {selectedCategory?.name} TYPES
        </h3>
      </CardHeader>
      <CardContent className="py-0 space-y-2 flex flex-col px-5 max-h-70 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
        {subCategoriesLoading ? (
          Array.from({ length: 3 }).map((_, idx) => (
            <ButtonSkeleton key={idx} />
          ))
        ) : (
          <>
            <SubCategoryButton
              text="All items"
              id={null}
              selectedSubCategory={selectedSubCategory}
              setSelectedSubCategoryId={setSelectedSubCategoryId}
            />
            {subCategories?.map((category) => {
              return (
                <SubCategoryButton
                  key={category?._id}
                  text={category?.name}
                  id={category?._id}
                  selectedSubCategory={selectedSubCategory}
                  setSelectedSubCategoryId={setSelectedSubCategoryId}
                />
              );
            })}
          </>
        )}
      </CardContent>
    </Card>
  );
};

const SubCategoryButton = ({
  text,
  id,
  selectedSubCategory,
  setSelectedSubCategoryId,
}) => {
  return (
    <button
      className={`font-bold text-[0.75rem] flex items-center justify-between text-left transition-all ${selectedSubCategory === id ? "hover:bg-[#FFF8F4] hover:text-[#FF6B35]" : "hover:bg-gray-50 hover:text-black"} px-4 py-3 rounded-lg cursor-pointer capitalize ${selectedSubCategory === id ? "bg-[#FFF8F4] text-[#FF6B35]" : "text-[#8a8a8a] bg-white"} `}
      onClick={() => setSelectedSubCategoryId(id)}
    >
      <span>{text}</span>
      {selectedSubCategory === id && (
        <span className="h-1.5 w-1.5 bg-[#ff6b35] rounded-full"></span>
      )}
    </button>
  );
};
