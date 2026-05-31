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
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Plus, Sparkles, UploadCloud, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { useEffect, useRef, useState } from "react";
import { Badge } from "../ui/badge";

const AddProductDrawer = ({ loading, createProd }) => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    weight: "",
    mrp: "",
    category: "",
    subCategory: "",
    discount: "",
    description: "",
    tags: "",
    stock: "",
  });

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);

    setFiles((prev) => [...prev, ...selectedFiles].slice(0, 5));
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

    setFiles((prev) => [...prev, ...droppedFiles].slice(0, 5));
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

  const handleChange = (e) => {};

  const filedLabelStyle =
    "text-[0.6rem] text-[#8A8A8A] font-semibold tracking-[0.1rem]";
  const fieldInputStyle =
    "bg-[#F9FAFB] rounded-xl border border-input h-12 px-3 font-bold text-sm shadow-none focus:outline-none focus:ring-2 focus:ring-ring w-full";

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
                      defaultValue=""
                      className={fieldInputStyle}
                    >
                      <option value="">Select status</option>
                      <option value="todo">Todo</option>
                      <option value="in-progress">In Progress</option>
                      <option value="done">Done</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
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
                      defaultValue=""
                      className={fieldInputStyle}
                    >
                      <option value="">Select status</option>
                      <option value="todo">Todo</option>
                      <option value="in-progress">In Progress</option>
                      <option value="done">Done</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
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
                      name="weigth"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                    />
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
                  </Field>
                  <Field className="gap-1">
                    <FieldLabel className={filedLabelStyle}>
                      Catalog visibility
                    </FieldLabel>
                    <Field orientation="horizontal" className="flex-1">
                      <Switch id="switch" />
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
                    accept=".jpg,.jpeg,.png,.webp"
                    className="hidden"
                    onChange={handleFileChange}
                  />
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
                      className={`flex flex-wrap gap-1.5 p-3 bg-gray-50 border border-border rounded-xl min-h-11`}
                    >
                      <span className="text-[11px] text-[#A0A0A0] font-semibold self-center px-1">
                        No tags added. Enter below or click "Auto-Fill" above.
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Input
                        id="tags"
                        placeholder="Product Name"
                        required
                        className={`${fieldInputStyle}`}
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                      />
                      <Button
                        variant="outline"
                        className="h-11 rounded-xl cursor-pointer py-0 text-primary font-semibold"
                      >
                        ADD TAG
                      </Button>
                    </div>
                  </div>
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </div>
        <Separator className="mb-3" />
        <DrawerFooter className="flex-row items-center w-full">
          <Button
            variant="outline"
            className="w-1/2 px-5 py-6 font-semibold text-[0.9rem] rounded-2xl cursor-pointer"
          >
            Cancel
          </Button>
          <Button className="w-1/2 px-5 py-6 font-semibold text-[0.9rem] rounded-2xl cursor-pointer">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddProductDrawer;
