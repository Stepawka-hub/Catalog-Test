import { FC, useMemo } from "react";
import { ProductCard, SkeletonCard } from "@/components/elements";
import { TProductListUIProps } from "./types";

export const ProductListUI: FC<TProductListUIProps> = ({
  products,
  isLoading,
  limit,
  ...props
}) => {
  const skeletons = useMemo(
    () => Array.from({ length: limit }, (_, i) => <SkeletonCard key={i + 1} />),
    [limit]
  );

  if (isLoading) {
    return <section className="product-grid">{skeletons}</section>;
  }

  if (!products.length) {
    return <div>No data found</div>;
  }

  const productElements = products.map((p) => (
    <ProductCard key={p.id} product={p} {...props} />
  ));

  return <section className="product-grid">{productElements}</section>;
};
