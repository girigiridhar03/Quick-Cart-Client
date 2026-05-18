import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ProductCard = ({ product }) => {
  return (
    <Card className="px-0.5 py-2 gap-3 rounded-3xl shadow-lg hover:shadow-xl">
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
      <CardFooter className="px-4 py-0 flex justify-between">
        <div className="flex flex-col">
          <span className="text-sm font-bold">
            ₹{product?.price?.toLocaleString()}
          </span>
          {product?.discount > 0 && (
            <span className="text-[0.65rem] line-through">
              ₹{product?.mrp?.toLocaleString()}
            </span>
          )}
        </div>
        <Button
          variant="outline"
          className="h-8 w-17.5 font-semibold text-[0.8rem] rounded-lg text-[#FF6B35] shadow-none hover:text-[#ff6b35]"
        >
          ADD
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
