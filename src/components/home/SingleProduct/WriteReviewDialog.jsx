import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Plus, Star, UploadCloud } from "lucide-react";
import React, { useEffect, useRef } from "react";

const WriteReviewDialog = () => {
  // const { state, setState, handleSubmit } = formDetails;

  // const handleDetailsChange = (e) => {
  //   const value = e.target.value;
  //   if (value.length <= 500) {
  //     setState((prev) => ({ ...prev, description: value }));
  //   } else {
  //     setState((prev) => ({ ...prev, description: value.slice(0, 500) }));
  //   }
  // };
  const inputRef = useRef(null);
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

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="text-primary hover:text-primary w-auto h-15 text-[12px] md:text-[14px] lg:text-[16px] shadow font-bold rounded-2xl cursor-pointer md:px-7"
            title="Report this product"
          />
        }
      >
        <Plus className="h-20" />
        WRITE A REVIEW
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm md:max-w-lg px-5 md:px-10 max-h-175 2xl:max-h-250 overflow-hidden flex flex-col">
        <DialogHeader className="sticky top-0 bg-popover z-10 pt-2 pb-0">
          <DialogTitle className="text-xl md:text-2xl font-bold">
            {/* {title} */}
            Share Your Experience
          </DialogTitle>
          {/* {para && <DialogDescription>{para}</DialogDescription>} */}
          <Separator className="mt-3" />
        </DialogHeader>
        <div className="space-y-7 overflow-y-auto 2xl:overflow-hidden scrollbar-none flex-1 pb-2 px-1">
          <div className="flex flex-col items-center w-full gap-4">
            <div className="text-[17px] text-[#8A8A8A] font-semibold leading-relaxed uppercase">
              Rate this product
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="fill-primary cursor-pointer w-3 h-3 xl:w-10 xl:h-10 text-primary transition-transform duration-200 hover:scale-125"
                />
              ))}
            </div>
          </div>
          <FieldGroup>
            <Field>
              <FieldLabel className="uppercase text-[#8A8A8A] font-bold">
                Review Title
              </FieldLabel>
              <Input
                className="font-bold text-black text-lg focus:bg-white px-6 bg-[#F7F7F7] rounded-2xl shadow-none h-15 py-6"
                placeholder="Ex: Excellent quality and fast delivery"
              />
            </Field>

            <Field className="w-full px-2">
              <FieldLabel className="flex items-center justify-between w-full uppercase text-[#8A8A8A] font-bold">
                <p className="uppercase ">Your Review</p>
                {/* <p>{state.description.length}/500</p> */}
              </FieldLabel>
              <Textarea
                className="bg-[#F7F7F5] font-bold resize-none h-50 px-5 py-6 rounded-2xl focus:bg-white shadow-none"
                placeholder="Describe the issue in more detail..."
                // value={state.description}
                // onChange={handleDetailsChange}
              />
            </Field>

            <Field className="gap-3">
              <FieldLabel
                htmlFor="product-images"
                className="uppercase text-[#8A8A8A] font-bold"
              >
                PRODUCT IMAGES
              </FieldLabel>
              <div
                onClick={handleClick}
                onDrag={handleDragOver}
                onDrop={handleDrop}
                className="group transition-all border-2 border-dashed border-gray-300 rounded-2xl bg-white h-60 hover:border-primary flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="h-16 w-16 rounded-full bg-[#F7F7F7] group-hover:bg-primary shadow-md flex items-center justify-center mb-6">
                  <Camera
                    size={20}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>

                <h5 className="text-[14px] font-black text-center">
                  ADD PHOTOS
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
              {/* {formData.images.length > 0 && (
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
              )} */}
            </Field>
          </FieldGroup>

          <DialogFooter>
            <Button
              className="flex-1 h-12 2xl:h-15 2xl:text-lg cursor-pointer rounded-xl"
              // disabled={
              //   state.reason.length === 0 &&
              //   (state.reason.length === 0 || state.description.length === 0)
              // }
              // onClick={handleSubmit}
            >
              POST REVIEW
            </Button>
            <DialogClose
              render={<Button variant="outline" />}
              className="flex-1 h-12 2xl:h-15 2xl:text-lg cursor-pointer rounded-xl"
              // onClick={() => setState({ reason: "", description: "" })}
            >
              CANCEL
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WriteReviewDialog;
