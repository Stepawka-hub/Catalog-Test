import { FC, useMemo } from "react";
import { EmptyResults, ProductCard, SkeletonCard } from "@/components/elements";
import { TProductListUIProps } from "./types";

export const ProductListUI: FC<TProductListUIProps> = ({
  products,
  isLoading,
  isFetched,
  limit,
  ...props
}) => {
  const skeletons = useMemo(
    () => Array.from({ length: limit }, (_, i) => <SkeletonCard key={i + 1} />),
    [limit]
  );

  if (isLoading || !isFetched) {
    return <section className="product-grid">{skeletons}</section>;
  }

  if (!products.length) {
    return (
      <EmptyResults label="По запросу ничего на найдено" className="mt-10" />
    );
  }

  const productElements = products.map((p) => (
    <ProductCard key={p.id} product={p} {...props} />
  ));

  return <section className="product-grid">{productElements}</section>;
};
