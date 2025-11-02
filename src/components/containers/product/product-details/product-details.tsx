"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "@/store";
import { getSelectedProduct } from "@/store/slices";
import { EmptyResults } from "@/components/elements";

export const ProductDetails: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const selectedProduct = useSelector((state) =>
    getSelectedProduct(state, Number(productId))
  );

  if (!selectedProduct) {
    return <EmptyResults label="Товар не найден" />;
  }

  const { title } = selectedProduct;

  return <div>{title}</div>;
};
