import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import {
  Zap,
  Star,
  CircleCheckBig,
  ShieldCheck,
  Sparkles,
  Info,
  Flag,
  Loader,
} from "lucide-react";
import { ProductHighlightCard } from "../commonComponents";
import CustomDialog from "../CustomDialog";
import { productReportReasons } from "@/utils/constants";

const SingleProductCard = ({ loading, product, cart }) => {
  const { quantityLoading, deleteLoading, handleCart } = cart;
  const [selectedImage, setSelectedImage] = useState({});
  const [open, setOpen] = useState(false);
  const [reportDetails, setReportDetails] = useState({
    reason: "",
    description: "",
  });
  useEffect(() => {
    if (!product?.productImages?.length) return;

    setSelectedImage(product.productImages[0]);
  }, [product?.productImages]);

  const handleFlagSubmit = () => {
    console.log(reportDetails);
  };

  useEffect(() => {
    if (open) return;
    setReportDetails({
      reason: "",
      description: "",
    });
  }, [open]);

  return (
    <Card className="w-full rounded-3xl">
      <CardContent className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-5 xl:gap-10 w-full">
        {/* Left Section */}
        <section className="flex-1 flex flex-col gap-7">
          {/* Main Image */}
          <div className="w-full h-100 lg:h-120 xl:h-125 rounded-3xl overflow-hidden shadow-sm border bg-white p-4">
            <img
              src={selectedImage?.url}
              alt={product?.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-3">
            {product?.productImages?.map((item) => (
              <div
                key={item?.publicId}
                className={`w-full h-20 lg:h-25 xl:h-28 rounded-xl lg:rounded-2xl overflow-hidden shadow-sm border bg-white p-3 cursor-pointer ${
                  selectedImage?.publicId === item?.publicId
                    ? "border-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item?.url}
                  alt={item?.publicId}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Right Section */}
        <section className="flex-1 flex flex-col gap-4 lg:gap-5">
          <div className="flex gap-1 flex-col">
            {/* Brand */}
            <div className="flex justify-between">
              <div className="text-primary text-sm font-semibold uppercase">
                {product?.brand}
              </div>

              {/* Flag Dialog */}
              <CustomDialog
                dialogState={{
                  open,
                  setOpen,
                }}
                header={{
                  trigger: <Flag className="w-4 h-4" />,
                  title: "Report Product",
                }}
                reportDetails={{
                  cards: productReportReasons,
                  reportTitle: "Why are you reporting this product?",
                }}
                formDetails={{
                  state: reportDetails,
                  setState: setReportDetails,
                  handleSubmit: handleFlagSubmit,
                }}
                previewCard={{
                  isProduct: true,
                  title: product?.name,
                  img: product?.productImages?.[0]?.url ?? null,
                  brand: product?.brand,
                  category: product?.category?.name,
                }}
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl xl:text-4xl font-bold leading-tight capitalize">
              {product?.name}
            </h1>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-5">
            {product?.avgRating > 0 && (
              <>
                <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 lg:px-5 lg:py-3 rounded-xl lg:rounded-2xl">
                  <Star className=" w-3 h-3  lg:w-4 lg:h-4 fill-primary text-primary" />
                  <span className="font-semibold text-primary">
                    {product?.avgRating.toFixed(1)}
                  </span>
                </div>

                <span className="text-muted-foreground font-medium">
                  {product?.reviewersCount > 1
                    ? `${product?.reviewersCount} Reviews`
                    : `${product?.reviewersCount} Review`}
                </span>
                <div className="h-6 w-px bg-border" />
              </>
            )}
            <div
              className={`flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-3 rounded-xl lg:rounded-2xl ${
                product?.stock > 0 ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <CircleCheckBig
                className={`w-4 h-4 lg:w-5 lg:h-5 ${
                  product?.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              />

              <span
                className={`font-semibold ${
                  product?.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product?.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold">₹{product?.price}</span>

            {product?.mrp !== product?.price && (
              <span className="text-xl text-muted-foreground line-through">
                ₹{product?.mrp}
              </span>
            )}
            {product?.discount > 0 && (
              <span className="text-green-600 font-bold text-[14px]">
                {product?.discount}% OFF
              </span>
            )}
          </div>

          <div className="mt-auto flex flex-col justify-between gap-7">
            {/* Delivery */}
            <div className="w-full bg-primary/10 flex items-center p-3 lg:p-4 gap-4 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <Zap
                  className="w-6 h-6 fill-primary text-primary"
                  strokeWidth={2}
                />
              </div>
              <div>
                <div className="font-bold lg:text-[15px]">
                  Free Delivery in 10 mins
                </div>

                <div className="text-primary font-semibold text-[13px] lg:text-[14px]">
                  Order now and get it by 18:43
                </div>
              </div>
            </div>

            {/* Product Highlights */}
            <div className="grid grid-cols-2 gap-2">
              <ProductHighlightCard
                Icon={ShieldCheck}
                title={"AUTHETIC"}
                para={product?.brand}
              />
              <ProductHighlightCard
                Icon={Sparkles}
                title={"CATEGORY"}
                para={product?.category?.name}
              />
              <ProductHighlightCard
                Icon={Info}
                title={"NET WEIGHT"}
                para={product?.weight}
              />
              <ProductHighlightCard
                Icon={Zap}
                title={"STOCK LEFT"}
                para={product?.stock}
              />
            </div>

            {/* Add To Cart */}
            <Button
              onClick={
                product?.cartQuantity <= 0
                  ? () => {
                      handleCart("add", {
                        id: product?._id,
                        body: { quantity: 1 },
                      });
                    }
                  : undefined
              }
              className={`h-14 lg:h-16 rounded-2xl text-lg lg:text-xl font-bold cursor-pointer w-full px-5 py-8 ${product?.cartQuantity > 0 && "hover:bg-primary/90 bg-primary/90"}`}
            >
              {product?.cartQuantity > 0 ? (
                <div className="flex items-center justify-between w-full">
                  <span
                    className="bg-white/20 h-9 w-9 flex items-center justify-center rounded-xl"
                    onClick={() =>
                      handleCart("remove", {
                        id: product?._id,
                        body: { quantity: product?.cartQuantity - 1 },
                      })
                    }
                  >
                    -
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-[11px] font-bold text-white/70">
                      IN CART
                    </span>
                    <span className="font-bold">
                      {quantityLoading || deleteLoading ? (
                        <Loader className="animate-spin w-4 h-4" />
                      ) : (
                        product.cartQuantity
                      )}
                    </span>
                  </div>
                  <span
                    className="bg-white/20 h-9 w-9 flex items-center justify-center rounded-xl"
                    onClick={() =>
                      handleCart("add", {
                        id: product?._id,
                        body: { quantity: 1 },
                      })
                    }
                  >
                    +
                  </span>
                </div>
              ) : (
                <span>
                  {quantityLoading ? (
                    <Loader className="animate-spin w-4 h-4" />
                  ) : (
                    "Add to Cart"
                  )}
                </span>
              )}
            </Button>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default SingleProductCard;
