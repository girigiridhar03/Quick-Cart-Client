import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, ShieldCheck, Sparkles, Zap } from "lucide-react";
import React from "react";
import { ProductDetailsHighlightCard } from "../commonComponents";

const ProductDetailsCard = ({ loading, product }) => {
  return (
    <Card className="my-10 w-full rounded-3xl shadow-none">
      <CardContent className="w-full flex flex-col lg:flex-row items-stretch gap-10">
        <section className="flex-1">
          <p className="text-[11px] text-primary font-semibold">
            PRODUCT OVERVIEW
          </p>
          <div className="text-2xl font-bold">About This Product</div>
          <div className="mt-7 ml-2 border-l-2 border-l-primary/40 pl-3 text-[#44556C] text-[14px] font-semibold leading-relaxed">
            {product?.description}
          </div>
        </section>
        <section className="flex-1">
          <Card className="bg-[#FDFDFD] border border-[#F0F0F0]/80 rounded-2xl p-5 shadow-none gap-3">
            <CardHeader className="flex items-center justify-between p-0">
              <div className="font-bold text-[12px] tracking-wider">
                PRODUCT SPECIFICATIONS
              </div>
              <div>
                <ShieldCheck className="w-4 h-4 text-green-500" />
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="w-full p-0 flex flex-col gap-2.5">
              {/* Brand */}
              <ProductDetailsHighlightCard
                Icon={Zap}
                title={"Brand"}
                para={product?.brand}
              />
              <ProductDetailsHighlightCard
                Icon={Info}
                title={"Size / Weight"}
                para={product?.weight}
              />
              <ProductDetailsHighlightCard
                Icon={Sparkles}
                title={"Category"}
                para={product?.category?.name}
              />

              {/* Fresh Tag */}
              <div className="bg-[#F8FDFA] w-full rounded-xl flex items-center text-green-700 p-4 gap-1.5 ">
                <ShieldCheck className="md:w-3 md:h-4 text-green-700" />
                <p className="text-[11px] font-bold">
                  Sourced with intention. Every item is verified for quality
                  before it reaches you.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsCard;
