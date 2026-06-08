import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Loader2, Plus, Sparkles, UploadCloud, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { useEffect, useRef, useState } from "react";
import { Badge } from "../ui/badge";
import { createProductSchema } from "@/utils/constants";

const AddProductDrawer = ({ loading, createProd, categoryObj }) => {
  const { categories, subCategories, fetchSubCategories } = categoryObj;
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    weight: "",
    mrp: "",
    category: "",
    subCategory: "",
    discount: "",
    description: "",
    stock: "",
    isActive: true,
    tags: [],
    images: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    brand: "",
    weight: "",
    mrp: "",
    category: "",
    subCategory: "",
    discount: "",
    description: "",
    stock: "",
    images: "",
    tags: [],
    isActive: true,
  });
  const [productsTags, setProductsTags] = useState([]);
  const [tag, setTag] = useState("");

  const syncImages = (incomingFiles) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...incomingFiles].slice(0, 5),
    }));
    setErrors((prev) => ({
      ...prev,
      images: "",
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    syncImages(selectedFiles);
    e.target.value = "";
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.files);
    syncImages(droppedFiles);
  };

  useEffect(() => {
    const preventDefaults = (e) => {
      e.preventDefault();
    };

    window.addEventListener("dragover", preventDefaults);
    window.addEventListener("drop", preventDefaults);

    return () => {
      window.removeEventListener("dragover", preventDefaults);
      window.removeEventListener("drop", preventDefaults);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCreateProduct = async () => {
    const result = createProductSchema.safeParse({
      ...formData,
      images: undefined,
    });

    if (!result.success || formData.images.length === 0) {
      const errors = {};

      if (!result.success) {
        const format = result.error.flatten();

        Object.keys(format.fieldErrors).forEach((item) => {
          errors[item] = format.fieldErrors[item]?.[0];
        });
      }

      if (formData.images.length === 0) {
        errors.images = "Product Images required";
      }

      setErrors((prev) => ({
        ...prev,
        ...errors,
      }));

      return;
    }
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "tags") {
        value.forEach((item) => payload.append("tags", item));
      } else if (key === "images") {
        value.forEach((file) => payload.append("images", file));
      } else {
        payload.append(key, value);
      }
    });

    try {
      await createProd(payload);
      setFormData({
        name: "",
        brand: "",
        weight: "",
        mrp: "",
        category: "",
        subCategory: "",
        discount: "",
        description: "",
        stock: "",
        isActive: true,
        tags: [],
        images: [],
      });
      setProductsTags([]);
    } catch (error) {
      console.log(error);
    }
  };

  const filedLabelStyle =
    "text-[0.6rem] text-[#8A8A8A] font-semibold tracking-[0.1rem]";
  const fieldInputStyle =
    "bg-[#F9FAFB] rounded-xl border border-input h-12 px-3 font-bold text-sm shadow-none focus:outline-none focus:ring-2 focus:ring-ring w-full";
  const isFormValid = true;
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button className="px-5 py-6 font-semibold text-[0.9rem] rounded-2xl cursor-pointer">
          <Plus />
          ADD PRODUCT
        </Button>
      </DrawerTrigger>
      <DrawerContent className="rounded-none! md:w-[25%]! max-w-none! overflow-visible">
        <DrawerHeader>
          <DrawerTitle className="flex justify-between items-center text-2xl font-semibold">
            <span>Add New Product</span>
            <DrawerClose asChild>
              <Button variant="ghost" className="cursor-pointer">
                {" "}
                <X />
              </Button>
            </DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        <Separator className="mb-3" />
        <div className="no-scrollbar overflow-y-auto px-4 h-full pb-4.5">
          <FieldGroup>
            <FieldSet>
              {/* Product Name */}
              <FieldGroup>
                <Field className="gap-3">
                  <FieldLabel
                    htmlFor="product-name"
                    className={`${filedLabelStyle}`}
                  >
                    PRODUCT NAME*
                  </FieldLabel>
                  <Input
                    id="product-name"
                    placeholder="Product Name"
                    required
                    className={`${fieldInputStyle}`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name.length > 0 && (
                    <FieldError className="px-1 capitalize text-[12px]">
                      {errors.name}
                    </FieldError>
                  )}
                </Field>
              </FieldGroup>

              {/* Brand Name & Category */}
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <Field className="gap-3">
                    <FieldLabel
                      htmlFor="brand-name"
                      className={`${filedLabelStyle}`}
                    >
                      BRAND NAME*
                    </FieldLabel>
                    <Input
                      id="brand-name"
                      placeholder="Brand Name"
                      className={`${fieldInputStyle}`}
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      required
                    />
                    {errors.brand.length > 0 && (
                      <FieldError className="px-1 capitalize text-[12px]">
                        {errors.brand}
                      </FieldError>
                    )}
                  </Field>
                  <Field className="gap-3">
                    <FieldLabel
                      htmlFor="category"
                      className={`${filedLabelStyle}`}
                    >
                      CATEGORY*
                    </FieldLabel>
                    <select
                      id="category"
                      className={`${fieldInputStyle} capitalize`}
                      name="category"
                      value={formData.category}
                      onChange={(e) => {
                        handleChange(e);
                        fetchSubCategories(e.target.value);
                      }}
                    >
                      <option value="">Select Cateogry</option>
                      {categories?.map((item) => (
                        <option key={item?._id} value={item?._id}>
                          {item?.name}
                        </option>
                      ))}
                    </select>
                    {errors?.category?.length > 0 && (
                      <FieldError className="px-1 capitalize text-[12px]">
                        {errors.category}
                      </FieldError>
                    )}
                  </Field>
                </div>
              </FieldGroup>

              {/* SubCategory & Weigth */}
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <Field className="gap-3">
                    <FieldLabel
                      htmlFor="sub-category"
                      className={filedLabelStyle}
                    >
                      SUBCATEGORY
                    </FieldLabel>

                    <select
                      id="sub-category"
                      name="subCategory"
                      value={formData.subCategory}
                      className={`${fieldInputStyle} capitalize`}
                      disabled={subCategories?.length === 0}
                      onChange={handleChange}
                    >
                      <option value="">None / General</option>
                      {subCategories?.map((item) => (
                        <option key={item?._id} value={item?._id}>
                          {item?.name}
                        </option>
                      ))}
                    </select>
                    {errors?.subCategory?.length > 0 && (
                      <FieldError className="px-1 capitalize text-[12px]">
                        {errors.subCategory}
                      </FieldError>
                    )}
                  </Field>
                  <Field className="gap-3">
                    <FieldLabel
                      htmlFor="weigth-size"
                      className={filedLabelStyle}
                    >
                      WEIGTH / PACK SIZE
                    </FieldLabel>
                    <Input
                      id="weigth-size"
                      placeholder="e.g. 500g, 1L, Pack of 4"
                      className={fieldInputStyle}
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                    />
                    {errors?.weight?.length > 0 && (
                      <FieldError className="px-1 capitalize text-[12px]">
                        {errors.weight}
                      </FieldError>
                    )}
                  </Field>
                </div>
              </FieldGroup>

              {/* Price & Discount */}
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <Field className="gap-3">
                    <FieldLabel htmlFor="mrp-price" className={filedLabelStyle}>
                      MRP PRICE (₹)
                    </FieldLabel>

                    <Input
                      id="mrp-price"
                      type="number"
                      placeholder="Maximum retail price"
                      required
                      className={`${fieldInputStyle}`}
                      min={1}
                      name="mrp"
                      value={formData.mrp}
                      onChange={handleChange}
                    />
                    {errors.mrp.length > 0 && (
                      <FieldError className="px-1 capitalize text-[12px]">
                        {errors.mrp}
                      </FieldError>
                    )}
                  </Field>
                  <Field className="gap-3">
                    <FieldLabel htmlFor="discount" className={filedLabelStyle}>
                      Discount
                    </FieldLabel>
                    <Input
                      id="discount"
                      type="number"
                      placeholder="e.g. 10"
                      className={fieldInputStyle}
                      min={0}
                      required
                      name="discount"
                      value={formData.discount}
                      onChange={handleChange}
                    />
                    {errors?.discount?.length > 0 && (
                      <FieldError className="px-1 capitalize text-[12px]">
                        {errors.discount}
                      </FieldError>
                    )}
                  </Field>
                </div>
              </FieldGroup>

              {/* STOCK AND VISIBLITY */}
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <Field className="gap-1">
                    <FieldLabel htmlFor="stock" className={filedLabelStyle}>
                      AVAILABLE STOCK*
                    </FieldLabel>

                    <Input
                      id="stock"
                      type="number"
                      placeholder="Units in stock"
                      required
                      className={`${fieldInputStyle}`}
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                    />
                    {errors?.stock?.length > 0 && (
                      <FieldError className="px-1 capitalize text-[12px]">
                        {errors.stock}
                      </FieldError>
                    )}
                  </Field>
                  <Field className="gap-1">
                    <FieldLabel className={filedLabelStyle}>
                      Catalog visibility
                    </FieldLabel>
                    <Field orientation="horizontal" className="flex-1">
                      <Switch
                        id="switch"
                        defaultChecked={formData.isActive}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({
                            ...prev,
                            isActive: checked,
                          }))
                        }
                      />
                      <FieldLabel
                        htmlFor="switch"
                        className="font-bold"
                        defaultChecked
                      >
                        ACTIVE/VISIBLE
                      </FieldLabel>
                    </Field>
                  </Field>
                </div>
              </FieldGroup>

              {/* Product Images */}
              <FieldGroup>
                <Field className="gap-3">
                  <FieldLabel
                    htmlFor="product-images"
                    className={filedLabelStyle}
                  >
                    PRODUCT IMAGES*
                  </FieldLabel>
                  <div
                    onClick={handleClick}
                    onDrag={handleDragOver}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-gray-300 rounded-4xl bg-[#F9FAFB] h-40 hover:border-primary flex flex-col items-center justify-center cursor-pointer"
                  >
                    <div className="h-13 w-13 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
                      <UploadCloud size={20} className="text-gray-400" />
                    </div>

                    <h5 className="text-[12px] font-bold text-center">
                      DRAG & DROP IMAGE HERE, OR CLICK
                    </h5>

                    <p className="text-[11px] text-gray-500 font-semibold mt-2">
                      Supports JPG, PNG, WEBP. Max 5 files.
                    </p>
                  </div>

                  <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.webp,.avif"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-5 gap-3 mt-4">
                      {formData.images.map((file) => (
                        <div
                          key={`${file.name}-${file.lastModified}`}
                          className="group h-20 w-20 rounded-xl overflow-hidden relative"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              images: prev.images.filter(
                                (item) =>
                                  !(
                                    item.name === file.name &&
                                    item.lastModified === file.lastModified
                                  ),
                              ),
                            }))
                          }
                        >
                          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 cursor-pointer">
                            <X size={18} />
                          </div>

                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="h-full w-full object-cover border-2 border-primary/10 bg-black"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {errors.images.length > 0 && (
                    <FieldError className="px-1 capitalize text-[12px]">
                      {errors.images}
                    </FieldError>
                  )}
                </Field>
              </FieldGroup>

              {/* Product Description */}
              <FieldGroup>
                <Field className="gap-3">
                  <FieldLabel
                    className={`${filedLabelStyle} flex items-center justify-between `}
                  >
                    <span>PRODUCT DESCRIPTION*</span>
                    <Badge className="bg-[#FFF0EB] text-primary text-[10px] gap-2 flex items-center font-semibold cursor-pointer">
                      <Sparkles />
                      <span>AUTO-FILL DETAILS VIA AI</span>
                    </Badge>
                  </FieldLabel>
                  <Textarea
                    className={`${fieldInputStyle}  min-h-25 overflow-y-auto resize-none`}
                    placeholder="Provide details about fresh origins, benefits, premium qualities..."
                    row={10}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                  {errors.description.length > 0 && (
                    <FieldError className="px-1 capitalize text-[12px]">
                      {errors.description}
                    </FieldError>
                  )}
                </Field>
              </FieldGroup>

              {/* Products Tags */}
              <FieldGroup>
                <Field className="gap-3">
                  <FieldLabel htmlFor="tags" className={filedLabelStyle}>
                    PRODUCT TAGS*
                  </FieldLabel>
                  <div className="space-y-2">
                    <div
                      className={`flex flex-wrap gap-1.5 p-3 bg-gray-50 border border-border rounded-xl max-h-40 overflow-y-auto`}
                    >
                      {productsTags?.length > 0 ? (
                        productsTags?.map((tag) => (
                          <div
                            key={tag}
                            className="bg-[#FFF0EB] text-primary font-semibold flex items-center gap-1.5 py-2 px-3 capitalize rounded-xl"
                          >
                            <span>{tag}</span>
                            <button
                              onClick={() => {
                                const nextTags = productsTags.filter(
                                  (item) => item !== tag,
                                );
                                setProductsTags(nextTags);
                                setFormData((prev) => ({
                                  ...prev,
                                  tags: nextTags,
                                }));
                              }}
                              className="cursor-pointer"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))
                      ) : (
                        <span className="text-[11px] text-[#A0A0A0] font-semibold self-center px-1">
                          No tags added. Enter below or click "Auto-Fill" above.
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Input
                        id="tags"
                        placeholder="Product Tags"
                        required
                        className={`${fieldInputStyle}`}
                        value={tag}
                        onChange={(e) => {
                          setTag(e.target.value);
                        }}
                      />
                      <Button
                        variant="outline"
                        className="h-11 rounded-xl cursor-pointer py-0 text-primary font-semibold"
                        disabled={tag.trim()?.length === 0}
                        onClick={() => {
                          const nextTags = [...productsTags, tag.toUpperCase()];
                          setProductsTags(nextTags);
                          setFormData((prev) => ({
                            ...prev,
                            tags: nextTags,
                          }));
                          setTag("");
                        }}
                      >
                        ADD TAG
                      </Button>
                    </div>
                  </div>
                  {errors.tags.length > 0 && (
                    <FieldError className="px-1">{errors.tags}</FieldError>
                  )}
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </div>
        <Separator className="mb-3" />
        <DrawerFooter className="flex-row items-center w-full">
          <Button
            variant="outline"
            className="w-1/2 px-5 py-6 font-semibold text-[0.9rem] rounded-2xl cursor-pointer text-primary"
          >
            CANCEL
          </Button>

          <Button
            onClick={handleCreateProduct}
            className="w-1/2 px-5 py-6 font-semibold text-[0.9rem] rounded-2xl cursor-pointer"
            disabled={loading || !isFormValid}
          >
            {loading && <Loader2 className="animate-spin" />}
            CREATE PRODUCT
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddProductDrawer;
