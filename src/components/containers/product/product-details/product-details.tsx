"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "@/store";
import {
  getIsFetchingProducts,
  getIsProductsFetched,
  getSelectedProduct,
} from "@/store/slices";
import { EmptyResults, Loader, ProductDetailsUI } from "@/components/elements";
import { useProductsActions } from "@/hooks";

export const ProductDetails: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const selectedProduct = useSelector((state) =>
    getSelectedProduct(state, productId)
  );
  const isProductsFetched = useSelector(getIsProductsFetched);
  const isFetching = useSelector(getIsFetchingProducts);
  const { onToggleLike } = useProductsActions();

  if (isFetching || !isProductsFetched) {
    return <Loader label="Загружаем данные о товаре..." />;
  }

  if (!selectedProduct) {
    return <EmptyResults label="Товар не найден" />;
  }

  return (
    <ProductDetailsUI product={selectedProduct} onToggleLike={onToggleLike} />
  );
};
