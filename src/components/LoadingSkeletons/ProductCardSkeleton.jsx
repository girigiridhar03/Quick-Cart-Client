import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="px-0.5 py-2 gap-3 rounded-3xl shadow-lg hover:shadow-xl">
      <CardHeader className="px-1">
        <Skeleton className="w-full h-40 rounded-2xl" />
      </CardHeader>
      <CardContent className="px-4 py-0">
        <div className="space-y-2">
          <Skeleton className="w-[70%] h-5" />
          <Skeleton className="w-[90%] h-5" />
          <Skeleton className="w-[30%] h-5" />
        </div>
      </CardContent>
      <CardFooter className="px-4 py-0 flex justify-between">
        <Skeleton className="w-[40%] h-8" />
        <Skeleton className="h-8 w-17.5" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
