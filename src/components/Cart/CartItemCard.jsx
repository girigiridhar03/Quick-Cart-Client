import React, { useState } from "react";
import { Loader, MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";

const CartItemCard = ({
  quantityLoading,
  deleteLoading,
  item,
  descreaseQunatityCount,
  deleteCartItem,
  addCartItem,
  updateCartItems,
  removeCartItem,
}) => {
  const product = item?.product ?? {};
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="w-full px-6">
      <div className="flex gap-8">
        <div className="w-25 h-20 md:w-40 md:h-27 rounded-2xl overflow-hidden">
          <img
            src={product?.productImages?.[0]?.url}
            alt={product?.name}
            className="w-full h-full object-contain"
          />
        </div>
        <section className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h6 className="text-[12.5px] md:text-[14px] text-wrap font-bold">
                {product?.name}
              </h6>
              <p className="text-[#8A8A8A] text-[11.5px] md:text-[13px] ">
                {product?.weight}
              </p>
            </div>

            <button
              onClick={async () => {
                await deleteCartItem(product?._id);
                removeCartItem(product?._id);
              }}
              className="cursor-pointer"
            >
              <Trash2 className="text-[#8A8A8A] w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[14px] md:text-lg font-bold">
                ₹{product?.price?.toLocaleString()}
              </span>
              {product?.discount > 0 && (
                <span className="text-[0.65rem] line-through text-[#8A8A8A]">
                  ₹{product?.mrp?.toLocaleString()}
                </span>
              )}
            </div>
            <ButtonGroup
              orientation="horizontal"
              aria-label="Media controls"
              className="h-fit items-center gap-4 bg-white shadow-lg rounded-xl border outline-0"
            >
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer border-none bg-transparent shadow-none text-primary"
                disabled={
                  product?._id === selectedProduct &&
                  (quantityLoading || deleteLoading)
                }
                onClick={async () => {
                  setSelectedProduct(product?._id);
                  if (item?.quantity <= 1) {
                    await deleteCartItem(product?._id);
                    removeCartItem(product?._id);
                  } else {
                    await descreaseQunatityCount(product?._id);
                    updateCartItems({
                      productId: product?._id,
                      quantity: item.quantity - 1,
                    });
                  }
                }}
              >
                <MinusIcon />
              </Button>
              {product?._id === selectedProduct &&
              (quantityLoading || deleteLoading) ? (
                <Loader className="animate-spin w-4 h-4" />
              ) : (
                <div className="font-bold">{item?.quantity ?? 1}</div>
              )}
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer border-none bg-transparent shadow-none text-primary"
                disabled={
                  product?._id === selectedProduct &&
                  (quantityLoading || deleteLoading)
                }
                onClick={async () => {
                  setSelectedProduct(product?._id);
                  await addCartItem({
                    id: item?.product?._id,
                    body: { quantity: 1 },
                  });
                  updateCartItems({
                    productId: product?._id,
                    quantity: item.quantity + 1,
                  });
                }}
              >
                <PlusIcon />
              </Button>
            </ButtonGroup>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartItemCard;
