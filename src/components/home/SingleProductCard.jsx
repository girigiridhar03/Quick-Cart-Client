import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Zap, Star, CircleCheckBig } from "lucide-react";

const SingleProductCard = () => {
  return (
    <Card className="w-full rounded-3xl">
      <CardContent className="flex items-start gap-10 w-full">
        {/* Left Section */}
        <section className="flex-1 flex flex-col gap-7">
          {/* Main Image */}
          <div className="w-full h-125 rounded-3xl overflow-hidden shadow-sm border bg-white p-4">
            <img
              src="https://res.cloudinary.com/dlbsvtq6c/image/upload/v1778673811/quickCart/products/yvcjc2xfxrs6mjkrosfd.jpg"
              alt="product"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className={`w-full h-28 rounded-2xl overflow-hidden shadow-sm border bg-white p-3 cursor-pointer ${
                  item === 1 ? "border-primary bg-primary/5" : ""
                }`}
              >
                <img
                  src="https://res.cloudinary.com/dlbsvtq6c/image/upload/v1778673811/quickCart/products/yvcjc2xfxrs6mjkrosfd.jpg"
                  alt="product"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Right Section */}
        <section className="flex-1 flex flex-col gap-5">
          {/* Brand */}
          <div className="text-primary text-sm font-semibold">Dove</div>

          {/* Title */}
          <h1 className="text-5xl font-bold leading-tight">
            Dove Cream Beauty Bar
          </h1>

          {/* Rating Section */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 bg-orange-50 px-5 py-3 rounded-2xl">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-semibold text-primary">4.7</span>
            </div>

            <span className="text-muted-foreground font-medium">
              4.3K Reviews
            </span>

            <div className="h-6 w-px bg-border" />

            <div className="flex items-center gap-2 bg-green-50 px-5 py-3 rounded-2xl">
              <CircleCheckBig className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-600">In Stock</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-6xl font-bold">₹215</span>

            <span className="text-3xl text-muted-foreground line-through">
              ₹240
            </span>

            <span className="text-green-600 font-bold text-lg">10% OFF</span>
          </div>

          {/* Delivery */}
          <div className="w-full bg-primary/10 flex items-center p-6 gap-4 rounded-3xl">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Zap
                className="w-7 h-7 fill-primary text-primary"
                strokeWidth={2}
              />
            </div>

            <div>
              <div className="font-bold text-lg">Free Delivery in 10 mins</div>

              <div className="text-primary font-semibold">
                Order now and get it by 18:43
              </div>
            </div>
          </div>

          {/* Product Highlights */}
          <div className="border rounded-2xl p-5">
            <h3 className="font-bold text-lg mb-4">Key Details</h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Brand</span>
                <span className="font-semibold">Anker</span>
              </div>

              <div className="flex justify-between">
                <span>Weight</span>
                <span className="font-semibold">356g</span>
              </div>

              <div className="flex justify-between">
                <span>Category</span>
                <span className="font-semibold">Power Bank</span>
              </div>

              {/* <div className="flex justify-between">
                <span>Stock</span>
                <span className="font-semibold">{product.stock} Available</span>
              </div> */}
            </div>
          </div>

          {/* Add To Cart */}
          <Button className="h-16 rounded-2xl text-xl font-bold cursor-pointer">
            Add to Cart
          </Button>
        </section>
      </CardContent>
    </Card>
  );
};

export default SingleProductCard;
