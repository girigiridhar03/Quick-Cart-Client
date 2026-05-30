import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Funnel, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { CustomBrandButton, MobileCategoryCards } from "./FilterCards";

const MobileFilters = ({
  categories,
  loading,
  selectedCategory,
  setSelectectedCategoryId,
  fetchAllSubCategories,
  resetStates,
  brands,
  selectedBrand,
  setSelectedBrand,
  subCategoriesLoading,
  selectedSubCategory,
  setSelectedSubCategoryId,
  subCategories,
}) => {
  return (
    <div className="flex items-center gap-5 w-full mb-7 lg:hidden">
      <Drawer direction="right">
        <DrawerTrigger asChild className="flex-1">
          <Button className="h-11 rounded-xl font-semibold text-[.8rem] flex items-center">
            <Funnel />
            FILTER & BROWSE
          </Button>
        </DrawerTrigger>
        <DrawerContent className="fixed! inset-y-0! right-0! left-auto! mt-0! h-screen! w-screen! md:w-1/2! max-w-none! rounded-none! pb-7">
          <DrawerHeader>
            <DrawerTitle className="flex justify-between items-center text-2xl font-semibold">
              <span>Browse & Filter</span>
              <DrawerClose asChild>
                <Button variant="ghost">
                  {" "}
                  <X />
                </Button>
              </DrawerClose>
            </DrawerTitle>
          </DrawerHeader>
          <Separator className="mb-3" />
          <div className="no-scrollbar overflow-y-auto px-4 space-y-5 h-full">
            <div className="space-y-4">
              <div className="text-[#8A8A8A] font-bold text-[0.8rem]">
                CATEGORIES
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[{ _id: 0, name: "All", icon: "🍴" }, ...categories]?.map(
                  (item) => (
                    <MobileCategoryCards
                      key={item?._id}
                      text={item?.name}
                      icon={item.icon}
                      id={item?._id}
                      selectedCategory={selectedCategory}
                      setSelectectedCategoryId={setSelectectedCategoryId}
                      fetchAllSubCategories={fetchAllSubCategories}
                      resetStates={resetStates}
                    />
                  ),
                )}
              </div>
            </div>

            {subCategories?.length > 0 && (
              <div className="space-y-4 w-full">
                <div className="text-[#8A8A8A] font-bold text-[0.8rem] uppercase">
                  {selectedCategory?.name} TYPES
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-100 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
                  <CustomBrandButton
                    text={"All"}
                    selectedBrand={selectedSubCategory}
                    setSelectedBrand={setSelectedSubCategoryId}
                    id={null}
                  />
                  {subCategories.map((item) => (
                    <CustomBrandButton
                      key={item?._id}
                      text={item?.name}
                      selectedBrand={selectedSubCategory}
                      setSelectedBrand={setSelectedSubCategoryId}
                      id={item?._id}
                    />
                  ))}
                </div>
              </div>
            )}

            {brands?.length > 0 && (
              <div className="space-y-4 w-full">
                <div className="text-[#8A8A8A] font-bold text-[0.8rem]">
                  BRANDS
                </div>
                <div className="flex flex-wrap gap-2 max-h-50 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
                  <CustomBrandButton
                    text={"All"}
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand}
                  />
                  {brands.map((brand) => (
                    <CustomBrandButton
                      key={brand}
                      text={brand}
                      selectedBrand={selectedBrand}
                      setSelectedBrand={setSelectedBrand}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>
      <Button>Hello</Button>
    </div>
  );
};

export default MobileFilters;
