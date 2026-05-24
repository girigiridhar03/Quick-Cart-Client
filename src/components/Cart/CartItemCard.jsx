import React from "react";
import { Card, CardContent } from "../ui/card";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";

const CartItemCard = ({ item }) => {
  const product = item?.product ?? {};
  return (
    <Card className="w-full">
      <CardContent className="flex gap-8">
        <div className="w-40 h-30 rounded-2xl overflow-hidden">
          <img
            src={product?.productImages?.[0]?.url}
            alt={product?.name}
            className="w-full h-full object-contain"
          />
        </div>
        <section className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h6 className="font-bold">{product?.name}</h6>
              <p className="text-[#8A8A8A]">{product?.weight}</p>
            </div>

            <button className="cursor-pointer">
              <Trash2 className="text-[#8A8A8A] w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-bold">
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
              >
                <MinusIcon />
              </Button>
              <div className="font-bold">{item?.quantity ?? 1}</div>
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer border-none bg-transparent shadow-none text-primary"
              >
                <PlusIcon />
              </Button>
            </ButtonGroup>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
