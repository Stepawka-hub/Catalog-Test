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

export const ProductDetails: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const selectedProduct = useSelector((state) =>
    getSelectedProduct(state, Number(productId))
  );
  const isProductsFetched = useSelector(getIsProductsFetched);
  const isFetching = useSelector(getIsFetchingProducts);

  if (isFetching || !isProductsFetched) {
    return <Loader label="Загружаем данные о товаре..." />;
  }

  if (!selectedProduct) {
    return <EmptyResults label="Товар не найден" />;
  }

  const {
    title,
    description,
    rating,
    stock,
    price,
    images,
    thumbnail,
    category,
    sku,
    brand,
  } = selectedProduct;

  return (
    <ProductDetailsUI
      title={title}
      description={description}
      category={category}
      sku={sku}
      brand={brand}
      rating={rating}
      stock={stock}
      price={price}
      thumbnail={thumbnail}
      images={images}
    />
  );
};
