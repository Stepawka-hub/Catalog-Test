import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { getProducts } from "./slice";
import { TProductId } from "@/shared/types";

export const getSelectedProduct = createSelector(
  [getProducts, (_: RootState, id: TProductId) => id],
  (products, id) => products.find((p) => p.id === id)
);
