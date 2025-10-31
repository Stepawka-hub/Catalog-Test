"use client";

import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "@/store";
import {
  fetchAllProductsAsync,
  getIsFetchingProducts,
  getProducts,
} from "@/store/slices";
import { ProductListUI } from "@/components/elements";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/routes";
import { TProductId } from "@/shared/types";

export const ProductList: FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector(getProducts);
  const isFetching = useSelector(getIsFetchingProducts);

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  const onCardClick = (productId: TProductId) => {
    router.push(ROUTES.PRODUCT_PAGE(productId));
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <ProductListUI products={products} onCardClick={onCardClick} />;
};
