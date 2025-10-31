import { FC } from "react";
import { ProductCard } from "@/components/elements";
import { TProductListUIProps } from "./types";

export const ProductListUI: FC<TProductListUIProps> = ({
  products,
  ...props
}) => {
  const productElements = products.map((p) => (
    <ProductCard key={p.id} product={p} {...props} />
  ));

  return (
    <div className="grid gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
      {productElements}
    </div>
  );
};
