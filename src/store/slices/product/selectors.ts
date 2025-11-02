import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { getProducts } from "./slice";

export const getSelectedProduct = createSelector(
  [getProducts, (_: RootState, id: number) => id],
  (products, id) => products.find((p) => p.id === id)
);
