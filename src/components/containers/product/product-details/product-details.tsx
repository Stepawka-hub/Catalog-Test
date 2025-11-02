"use client";

import { FC, useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "@/store";
import {
  fetchAllProductsAsync,
  getIsFetchingProducts,
  getIsProductsFetched,
  getSelectedProduct,
} from "@/store/slices";
import { EmptyResults, Loader, ProductDetailsUI } from "@/components/elements";

export const ProductDetails: FC = () => {
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();

  const selectedProduct = useSelector((state) =>
    getSelectedProduct(state, Number(productId))
  );
  const isProductsFetched = useSelector(getIsProductsFetched);
  const isFetching = useSelector(getIsFetchingProducts);

  useEffect(() => {
    if (!selectedProduct && !isProductsFetched) {
      dispatch(fetchAllProductsAsync());
    }
  }, [dispatch, selectedProduct, isProductsFetched]);

  if (!isFetching || !isProductsFetched) {
    return <Loader label="Загружаем данные о товаре..." />;
  }

  if (!selectedProduct) {
    return <EmptyResults label="Товар не найден" />;
  }

  const { title, description, rating, stock, price, images, thumbnail } =
    selectedProduct;

  return (
    <ProductDetailsUI
      title={title}
      description={description}
      rating={rating}
      stock={stock}
      price={price}
      thumbnail={thumbnail}
      images={images}
    />
  );
};
