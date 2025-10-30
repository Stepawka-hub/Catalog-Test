import { FC } from "react";
import { ProductCard } from "@/components/elements";
import { TProductListUIProps } from "./types";

export const ProductListUI: FC<TProductListUIProps> = ({ products }) => {
  const productElements = products.map((p) => (
    <ProductCard key={p.id} product={p} />
  ));

  return <div>{productElements}</div>;
};
