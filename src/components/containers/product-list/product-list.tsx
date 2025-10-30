"use client";

import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "@/store";
import {
  fetchAllProductsAsync,
  getIsFetchingProducts,
  getProducts,
} from "@/store/slices";
import { ProductListUI } from "@/components/elements";

export const ProductList: FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isFetching = useSelector(getIsFetchingProducts);

  useEffect(() => {
    dispatch(fetchAllProductsAsync());
  }, [dispatch]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <ProductListUI products={products} />;
};
