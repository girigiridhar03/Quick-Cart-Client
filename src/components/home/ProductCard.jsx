import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Loader, MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  quantityLoading,
  deleteLoading,
  descreaseQunatityCount,
  addCartItem,
  updatedProductItem,
  deleteCartItem,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <Card className="px-0.5 py-2 gap-3 rounded-3xl shadow-lg hover:shadow-xl">
      <Link to={`/${product?.slug}`}>
        <CardHeader className="px-1">
          <div className="w-full h-40 overflow-hidden rounded-2xl relative">
            {product?.discount > 0 && (
              <Badge className="absolute top-2 left-2 z-10 bg-[#ff6b35] text-[0.65rem]">
                {product?.discount}% OFF
              </Badge>
            )}

            <img
              src={product?.productImages?.[0]?.url}
              alt="product-image"
              className="w-full h-full object-contain object-center transition-transform duration-300"
            />
          </div>
        </CardHeader>
        <CardContent className="px-4 py-0">
          <div>
            <div className="text-[0.7rem] text-[#8A8A8A] font-medium tracking-tight uppercase">
              {product?.brand}
            </div>
            <p className="text-[0.8rem] font-semibold line-clamp-1 leading-tight">
              {product?.name}
            </p>
            <div className="text-[0.8rem] text-[#8A8A8A] font-medium mt-1">
              {product?.weight}
            </div>
          </div>
        </CardContent>
      </Link>

      <CardFooter className="px-4 py-0 flex justify-between">
        <div className="flex flex-col">
          <span className="text-sm font-bold">
            ₹{product?.price?.toLocaleString()}
          </span>
          {product?.discount > 0 && (
            <span className="text-[0.65rem] line-through text-[#8A8A8A]">
              ₹{product?.mrp?.toLocaleString()}
            </span>
          )}
        </div>
        {product?.cartQuantity > 0 ? (
          <ButtonGroup
            orientation="horizontal"
            aria-label="Media controls"
            className="h-8 w-17.5 items-center justify-between bg-primary text-white shadow-lg rounded-xl border outline-0"
          >
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer border-none bg-transparent text-white shadow-none hover:bg-transparent hover:text-white w-[40%] "
              disabled={quantityLoading || deleteLoading}
              onClick={async () => {
                setSelectedProduct(product?._id);
                if (product?.cartQuantity === 1) {
                  await deleteCartItem(product?._id);
                  updatedProductItem({
                    productId: product?._id,
                    quantity: 0,
                  });
                } else {
                  await descreaseQunatityCount(product?._id);
                  updatedProductItem({
                    productId: product?._id,
                    quantity: product?.cartQuantity - 1,
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
              <div className="font-bold">{product.cartQuantity}</div>
            )}
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer border-none bg-transparent text-white shadow-none hover:bg-transparent hover:text-white w-[40%] "
              disabled={
                product?._id === selectedProduct &&
                (quantityLoading || deleteLoading)
              }
              onClick={async () => {
                setSelectedProduct(product?._id);
                await addCartItem({
                  id: product?._id,
                  body: { quantity: 1 },
                });
                updatedProductItem({
                  productId: product?._id,
                  quantity: product?.cartQuantity + 1,
                });
              }}
            >
              <PlusIcon />
            </Button>
          </ButtonGroup>
        ) : (
          <Button
            variant="outline"
            className="h-8 w-17.5 font-semibold text-[0.8rem] rounded-lg text-[#FF6B35] shadow-none hover:text-[#ff6b35] cursor-pointer"
            onClick={async (e) => {
              setSelectedProduct(product?._id);
              await addCartItem({
                id: product?._id,
                body: { quantity: 1 },
              });
              updatedProductItem({
                productId: product?._id,
                quantity: product?.cartQuantity + 1,
              });
            }}
          >
            ADD
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
